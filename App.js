import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
root.render(<App/>);