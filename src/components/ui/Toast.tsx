import * as React from 'react';
import { Toaster as HotToaster } from 'react-hot-toast';

export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#1e3c2f',
          color: '#39ff14',
          border: '1px solid rgba(57, 255, 20, 0.3)',
          fontFamily: 'monospace',
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: '#39ff14',
            secondary: '#1e3c2f',
          },
        },
        error: {
          duration: 4000,
          iconTheme: {
            primary: '#ff4444',
            secondary: '#1e3c2f',
          },
        },
      }}
    />
  );
}