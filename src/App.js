import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Academic from './components/Academic/Academic';
import Contact from './components/Contact/Contact';
import Elearning from './components/Elearning/Elearning';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Notice from './components/Notice/Notice';
import Students from './components/Students/Students';
import Teachers from './components/Teachers/Teachers';
import Main from './layouts/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'academic',
          loader: () => fetch('academic.json'),
          element: <Academic></Academic>
        },
        {
          path: 'teachers',
          element: <Teachers></Teachers>
        },
        {
          path: 'students',
          element: <Students></Students>
        },
        {
          path: 'notice',
          element: <Notice></Notice>
        },
        {
          path: 'elearning',
          element: <Elearning></Elearning>
        },
        {
          path: 'gallery',
          element: <Gallery></Gallery>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },

      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
