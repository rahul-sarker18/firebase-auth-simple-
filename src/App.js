import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Order from './components/Order';
import Signup from './components/Signup';
import Main from './Layout/Main';
import Progress from './route/Progress';

function App() {

  const rout =createBrowserRouter([
    {path:'/', element:<Main></Main> , children:[
      {path:'/', element: <Home></Home>},
      {path:'/home', element: <Home></Home>},
      {path:'/orderss', element: <Progress> <Order></Order> </Progress>},
      {path:'/login', element: <Login></Login>},
      {path:'/signup', element:<Signup></Signup>},
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={rout}></RouterProvider>
    </div>
  );
}

export default App;
