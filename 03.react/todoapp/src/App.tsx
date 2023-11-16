import router from '@/routes';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </>
  );
}

export default App;
