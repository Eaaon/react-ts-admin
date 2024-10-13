import React from "react"
import { Button } from "antd"
import Profile from "@/components/Profile"
import { getVal } from "./util"
import "./index.css"

function Cup({ guest = 2 }) {
  return <h2>tea cup fo guest # {guest}</h2>
}

function Color({ value = "#f00" }) {
  console.log(value)
  return <div className="colorbox" style={{ backgroundColor: value }} />
}

function Home() {
  const [index, setIndex] = React.useState(0)
  const colors = ["#333", "#666", "#999", "#f00", "#f0f", "#333", "#666", "#999", "#f00", "#f0f"]

  const next = () => setIndex((index + 1) % colors.length);
  const quote = colors[index];
  return (
    <div className="App">
      {index}
      <Color value={quote}></Color>
      <div>{getVal(4)}</div>
      <Cup></Cup>
      <Profile size={200} />
      <Profile />
      <Profile />
      <header className="App-header">
        <h1 className="text-3xl font-bold underline text-amber-300">Hello, world</h1>
        <Button type="primary" onClick={next}>
          Button
        </Button>
      </header>
    </div>
  )
}

export default Home
