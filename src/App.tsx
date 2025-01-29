import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HomePage } from "./components/HomePage.tsx";
import { UseTransitionExample } from "./components/UseTransitionExample";

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path="actions-example-1" element={<UseTransitionExample />} />
        </Route>
    ))

    return <RouterProvider router={router} />
}

export default App
