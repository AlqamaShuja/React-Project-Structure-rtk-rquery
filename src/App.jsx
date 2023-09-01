// import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes/AllRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
 
const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AllRoutes />
       <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default App
