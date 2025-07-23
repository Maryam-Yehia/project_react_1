import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layers from './components/lauout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import About from './components/About/About.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './main.css'
import Contact from './components/contact/Contact.jsx';


const Router = createBrowserRouter([
  {path: '/',element: <Layers /> , children:[
    {index: true, element: <Home />},
    {path:'contact', element: <Contact />},
    {path:'portfolio', element: <Portfolio />},
    {path:'about', element: <About />},

  ]},
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router} />
)
