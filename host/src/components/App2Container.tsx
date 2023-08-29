import React from 'react'

// const App2 = React.lazy(() => import('app2/container'))

export default function App2Container() {
    return (
        <div>App 2</div>
        // <React.Suspense fallback={<div>Loading App2...</div>}>
        //     <App2 />
        // </React.Suspense>
    )
}