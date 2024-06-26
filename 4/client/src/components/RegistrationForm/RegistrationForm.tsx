import { FC, FormEventHandler, useState } from 'react';

import { FormField } from '../FormField';
import { Button } from '../Button';
import './RegistrationForm.css';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../api/User';

export const RegistrationForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    registrationMutation.mutate({ username, password });
  };

  const registrationMutation = useMutation({
    mutationFn: (variables: { username: string, password: string }) => registerUser(variables.username, variables.password),
    onSuccess: () => {
      // Здесь можно добавить логику при успешной регистрации
      console.log('Registration successful');
    },
    onError: (error) => {
      // Здесь можно добавить логику при ошибке регистрации
      console.error('Registration failed', error);
    }
  })

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
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
      {registrationMutation.error && <span>{registrationMutation.error.message}</span>}

      <Button type="submit" title="Зарегистрироваться" isLoading={registrationMutation.isPending}/>
    </form>
  );
};
