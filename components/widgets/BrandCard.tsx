import React from 'react';
import { Card } from '../ui/Card';
import { TextLogo } from '../Logo';

export const BrandCard: React.FC = () => {
  return (
    <Card variant="dark" className="h-full flex items-center justify-center p-12">
      <div className="transform scale-150">
        <TextLogo color="white" />
      </div>
    </Card>
  );
};
