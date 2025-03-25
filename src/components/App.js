import React from 'react';
import ReactDOM from 'react-dom';

function MyComponent() {
    return (
        <p>
            I am learning React. My life is getting better.
        </p>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <MyComponent />
    </React.StrictMode>,
    document.getElementById('root')
);
