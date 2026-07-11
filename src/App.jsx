import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>🎉 SiteTitle.com</h1>
        <p>React + Vite başarıyla bağlanmış!</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Sayı: {count}
          </button>
          <p>
            <code>src/App.jsx</code> dosyasını düzenleyerek başlayabilirsin
          </p>
        </div>

        <p className="read-the-docs">
          Daha fazla bilgi için <a href="https://vitejs.dev" target="_blank">Vite</a> ve <a href="https://react.dev" target="_blank">React</a> belgelerine göz at
        </p>
      </div>
    </>
  )
}

export default App
