import { FC, FormEventHandler, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '../Button';
import { FormField } from '../FormField';
import './PostForm.css';
import { createPost } from '../../api/Posts';

export interface IPostFormProps {}

export const PostForm: FC<IPostFormProps> = () => {

  const [text, setText] = useState('');

  const createPostMutation = useMutation({
    mutationFn: () => createPost(text),
  })
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    createPostMutation.mutate;
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <FormField label="Текст поста">
        <textarea className="post-form__input" value={text} onChange={(e) => setText(e.currentTarget.value)}/>
      </FormField>

      <Button type="submit" title="Опубликовать" isLoading={createPostMutation.isPending}/>
    </form>
  );
};
