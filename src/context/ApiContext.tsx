'use client';

import React, { createContext, useContext } from 'react';

type ApiContextType = {
  apiUrl: string;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '';

  return (
    <ApiContext.Provider value={{ apiUrl }}>{children}</ApiContext.Provider>
  );
};

export const useApiContext = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
