import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HomePage } from "./components/HomePage/HomePage.tsx";
import { UseTransitionExample } from "./components/UseTransitionExample";
import { FormActionExample } from './components/FormActionsExamples/';
import UseOptimisticExample from "./components/UseOptimisticExample/UseOptimisticExample.tsx";
import { UseAPIExample } from "./components/UseAPIExample/UseAPIExample.tsx";
import { RefAsProp } from './components/RefAsProp/index.tsx';
import { MetadataExample } from './components/MetadataExample/MetadataExample.tsx';


function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path="use-transition-example" element={<UseTransitionExample />} />
            <Route path="form-actions-example" element={<FormActionExample />} />
            <Route path="use-optimistic-example" element={<UseOptimisticExample />} />
            <Route path="use-api-example" element={<UseAPIExample />} />
            <Route path="ref-as-prop-example" element={<RefAsProp />} />
            <Route path="metadata-example" element={<MetadataExample />} />
        </Route>
    ))

    return <RouterProvider router={router} />
}

export default App
