import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App.jsx';
import { UtilisProvider } from './context/utilisStates.jsx';


// TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='498813637013-litfnqdrubpkvuvod7l0igac384qamu1.apps.googleusercontent.com'>
        <UtilisProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </UtilisProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
)
