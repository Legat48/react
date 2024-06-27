import { FC } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '../Button';
import { FormField } from '../FormField';
import './PostForm.css';
import { createPost } from '../../api/Posts';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export interface IPostFormProps {}

const CreatePostSchema = z.object({
  text: z.string().min(10, 'Текст поста должен быть длиннее 10 символов')
});

type CreatePostForm = z.infer<typeof CreatePostSchema>;

export const PostForm: FC<IPostFormProps> = () => {
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors } } = useForm<CreatePostForm>({
    resolver: zodResolver(CreatePostSchema),
  });

  const createPostMutation = useMutation<void, unknown, string>({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const onSubmit = (data: CreatePostForm) => {
    createPostMutation.mutate(data.text);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="post-form">
      <FormField label="Текст поста">
        <textarea className="post-form__input" {...register('text')} />
        {errors.text && <span>{errors.text.message}</span>}
      </FormField>
      {createPostMutation.error instanceof Error && <span>{createPostMutation.error.message}</span>}
      <Button type="submit" title="Опубликовать" isLoading={createPostMutation.isPending} />
    </form>
  );
};