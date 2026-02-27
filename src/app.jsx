import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
import { ROUTES } from './routes/routes.js'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <QueryClientProvider>
        <RouterProvider router={ROUTES}/>
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>,
)
// доподключись и настроить библиотеки
// определить где будет лежать папочка routes
