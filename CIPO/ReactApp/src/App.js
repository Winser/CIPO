import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await fetch('/hello')

            //sleep 2 sec
            await new Promise(r => setTimeout(r, 2000));

            if (response.ok) {
                setData(await response.text())
            }
        })()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {data && (<h1>{data}</h1>)}
                {!data && (
                    <>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </>)}
            </header>
        </div>
    );
}

export default App;
