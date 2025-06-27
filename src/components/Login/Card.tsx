import * as React from 'react';

import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LoginForm } from './LoginForm';

const Card: React.FC = () => {
  return (
    <ShadcnCard className="w-full max-w-sm bg-card text-card-foreground rounded-lg shadow-md border-0">
      <CardHeader className="text-center space-y-1 pt-8">
        <CardTitle className="text-3xl font-bold">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <LoginForm />
      </CardContent>
    </ShadcnCard>
  );
};

export default Card;
