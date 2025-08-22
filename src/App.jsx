import Context from "./Components/Context"
import Navbar from "./Routes/Navbar"
import Routing from "./Routes/Routing"

function App() {
  const value = localStorage.getItem("name")
  return (
    <>
      <Context.Provider value={value}>
        <div className="container mx-auto">
          <Navbar />
          <Routing />
        </div>
      </Context.Provider>
    </>
  )
}

export default App
