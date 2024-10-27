import React from 'react';
import { router } from './routes/router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
// import { TextField } from '@mui/material';
import InitializedAuth from './auth/InitializedAuth'

function App() {
  return (
    <Provider store={store}>
      {/* <TextField /> */}
      <InitializedAuth />
      <RouterProvider router={router}/> 
    </Provider>
  );
}

export default App;
