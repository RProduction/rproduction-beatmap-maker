import React from 'react';
import {createRoot} from 'react-dom/client';

import BaseLayout from '@/pages/BaseLayout';
import Welcome from '@/pages/Welcome';
import Main from '@/pages/Main';

import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import {RecoilRoot} from "recoil";
import {createHashRouter, RouterProvider} from 'react-router-dom';

const container = document.getElementById('root')

const root = createRoot(container!)

const theme = createTheme({
  palette: {
    primary: {
      main: "#27e024"
    },
    secondary: {
      main: "#a3c219"
    }
  }
})

const router = createHashRouter([
  {
    path: "/",
    element: <BaseLayout/>,
    children: [
      {
        path: "/",
        element: <Welcome/>,
      },
      {
        path: "/main",
        element: <Main/>,
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <RouterProvider router={router}/>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
)
