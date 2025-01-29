import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {HomePage} from "./components/HomePage.tsx";
import {ActionsExample1} from "./components/ActionsExample1/ActionsExample1.tsx";

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path="actions-example-1" element={<ActionsExample1/>}/>
        </Route>
    ))

  return <RouterProvider router={router}/>
}

export default App
