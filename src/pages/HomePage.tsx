
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hillcon Royal Hotel
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our luxury hotel management system
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/auth">Admin Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
