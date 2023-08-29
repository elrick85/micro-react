import React from 'react'

const App1 = React.lazy(() => import('app1/container'))

export default function App1Container() {
    return (
        <React.Suspense fallback={<div>Loading App1...</div>}>
            <App1 />
        </React.Suspense>
    )
}