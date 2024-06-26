import { FC, FormEventHandler, useState } from 'react';
import { useMutation, useQueryClient  } from '@tanstack/react-query';

import { FormField } from '../FormField';
import { Button } from '../Button';
import './LoginForm.css';
import {  login } from '../../api/User';

export const LoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const queryClient = useQueryClient(); // Получаем экземпляр QueryClient
  const loginMutation = useMutation({
    mutationFn: (variables: { username: string, password: string }) => login(variables.username, variables.password),
    onSuccess: () => {
      // Здесь можно добавить логику при успешной авторизации
      console.log('Login successful');
      queryClient.invalidateQueries({ queryKey: ['users','me'] });
    },
    onError: (error) => {
      // Здесь можно добавить логику при ошибке авторизации
      console.error('Login failed', error);
    }
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    loginMutation.mutate({ username, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormField label="Имя пользователя">
        <input
          type="text"
          name="username"
          autoComplete="username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
      </FormField>

      <FormField label="Пароль">
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </FormField>
      {loginMutation.error && <span>{loginMutation.error.message}</span>}
      <Button type="submit" title="Войти" isLoading={loginMutation.isPending} />
    </form>
  );
};
