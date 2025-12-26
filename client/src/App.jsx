import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'

import HomePage from './pages/LandingPages/Homepage.jsx'
import ArticleListPage from './pages/LandingPages/ArticleListPage.jsx'
import ArticlePage from './pages/LandingPages/ArticlePage.jsx'
import AboutPage from './pages/LandingPages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'



const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children:[
      {
      path:'/',
      element:<HomePage/>
      },
      {
      path:'/about',
      element:<AboutPage/>
      },
      {
      path:'/articles',
      element:<ArticleListPage/>
      },
      {
      path:'/articles/:name',
      element:<ArticlePage/>
      }
    ]
  }
]

const router = createBrowserRouter(routes)

function App() {
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )

}

export default App
