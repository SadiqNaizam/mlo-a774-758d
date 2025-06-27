import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import Card from '../components/Login/Card';

/**
 * The main login page for the application.
 * This page utilizes the AuthLayout to center the login card on the screen.
 * All authentication logic and UI elements are encapsulated within the Card and LoginForm components.
 * 
 * @returns {JSX.Element} The rendered login page component.
 */
const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <Card />
    </AuthLayout>
  );
};

export default LoginPage;
