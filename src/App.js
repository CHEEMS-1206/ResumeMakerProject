import './StyleSheets/App.css';
import { RouterProvider } from 'react-router-dom';

import routerName from './Components/Routs/Routs';

function App() {
  return (
    <>
      <RouterProvider router={routerName}/>
    </>
  );
}

export default App;
