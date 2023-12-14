import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watch from './components/Watch';
import MainContainer from "./components/MainContainer"

const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<Body />,
      children:[
      {
        path:"/",
        element: <MainContainer  />
      },{
        path:"watch",
        element:<Watch />
      }
      ]
    },
    {
      path:"/"
    }
  ]
)

function App() {
  return (
    <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
    </ Provider> 
  );
}

export default App;
