import React from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import About from './components/About';
import Dashboard from './components/Dashboard';
import Root from './components/Root';

export default function App1() {
    return (
        <div>
            <h1>App1 Application</h1>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route path='' element={<Dashboard />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </div>
    )
}