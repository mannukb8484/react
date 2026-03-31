import { useState } from "react"

function App() {
  const [colour, setColour] = useState('olive')
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: colour }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
            {/* button 1 */}
            <button
              onClick={() => setColour('red')} className="outline-none px-4 py-1 rounded-full
              text-white shadow-lg" style={{ backgroundColor: "red" }}>red
            </button>
            {/* button 2 */}
            <button
              onClick={() => setColour('indigo')} className="outline-none px-4 py-1 rounded-full
              text-white shadow-lg" style={{ backgroundColor: "indigo" }}>indigo
            </button>
            {/* button 3 */}
            <button
              onClick={() => setColour('green')} className="outline-none px-4 py-1 rounded-full
              text-white shadow-lg" style={{ backgroundColor: "green" }}>green
            </button>
            {/* button 4 */}
            <button
              onClick={() => setColour('yellow')} className="outline-none px-4 py-1 rounded-full
              text-white shadow-lg" style={{ backgroundColor: "yellow" }}>yellow
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
