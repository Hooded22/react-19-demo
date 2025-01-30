import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {HomePage} from "./components/HomePage.tsx";
import {UseTransitionExample} from "./components/UseTransitionExample";
import {FormActionExample} from './components/FormActionsExamples/';
import UseOptimisticExample from "./components/UseOptimisticExample/UseOptimisticExample.tsx";

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path="use-transition-example" element={<UseTransitionExample/>}/>
            <Route path="form-actions-example" element={<FormActionExample/>}/>
            <Route path="use-optimistic-example" element={<UseOptimisticExample/>}/>
        </Route>
    ))

    return <RouterProvider router={router}/>
}

export default App
