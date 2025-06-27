import * as React from 'react';

/**
 * Props for the AuthLayout component.
 */
interface AuthLayoutProps {
  /**
   * The content to be rendered inside the layout. Typically a page or a set of components.
   */
  children: React.ReactNode;
}

/**
 * A layout component for authentication pages.
 * It provides a full-screen, centered container for its children.
 * The background color is set to the theme's background color.
 * 
 * @param {AuthLayoutProps} props The props for the component.
 * @returns {JSX.Element} The rendered AuthLayout component.
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Children, such as a login or sign-up card, will be rendered here and centered */}
      {children}
    </main>
  );
};

export default AuthLayout;
