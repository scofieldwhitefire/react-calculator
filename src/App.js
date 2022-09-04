import { Display, ButtonPanel } from './components/index'


function App() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              React Calculator
            </h2>
          </div>
          <div className="container">
            <div className="header">Calculator</div>
            <input type="text" className="result" />
            <div className="first-row">
              <button className="global">&radic;</button>
              <button className="global">(</button>
              <button className="global">)</button>
              <button className="global">%</button>
            </div>
            <div className="second-row">
              <button  className="global">7</button>
              <button  className="global">8</button>
              <button  className="global">9</button>
              <button className="global">/</button>
            </div>
            <div className="third-row">
              <button  className="global">4</button>
              <button  className="global">5</button>
              <button  className="global">6</button>
              <button  className="global">X</button>
            </div>
            <div className="fourth-row">
              <button  className="global">1</button>
              <button  className="global">2</button>
              <button  className="global">3</button>
              <button className="global">-</button>
            </div>
            <div className="conflict">
              <div className="left">
                <button  className=" big">0</button>
                <button className=" small">.</button>
                <button  className=" red small white-text top-margin">Del</button>
                <button className=" green white-text big top-margin">=</button>
              </div>
              <div className="right">
                <button className="global grey plus">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
