import React from "react"
import ReactDOM from "react-dom/client"
import "./css/index.css"
// import App from "./App"
import reportWebVitals from "./reportWebVitals"
// import { ConfigProvider } from "antd"
import { RouterProvider } from "react-router-dom"
import routes from './routes/index';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
         <App />
      </ConfigProvider>
    </BrowserRouter> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
