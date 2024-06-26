import { FC, FormEventHandler, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '../Button';
import { FormField } from '../FormField';
import './PostForm.css';
import { createPost } from '../../api/Posts';

export interface IPostFormProps {}

export const PostForm: FC<IPostFormProps> = () => {
  const [text, setText] = useState('');
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: (variables: { text: string }) => createPost(variables.text),
    onSuccess: () => {
      queryClient.invalidateQueries( { queryKey: ['posts'] });
    }
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    createPostMutation.mutate({text});
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <FormField label="Текст поста">
        <textarea className="post-form__input" value={text} onChange={(e) => setText(e.currentTarget.value)} />
      </FormField>
      {createPostMutation.error && <span>{(createPostMutation.error as Error).message}</span>}
      <Button type="submit" title="Опубликовать" isLoading={createPostMutation.isPending} />
    </form>
  );
};