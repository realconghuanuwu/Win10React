import { StartMenu, TaskBar } from "./components/index"
import { Desktop } from "./pages/index"

function App() {
  return (
    <>
      <section className="relative w-screen h-screen bg-blue-500 hidden md:block">
        <StartMenu />
        <Desktop />
        <TaskBar />
      </section>
      <section className="flex justify-center items-center text-dark font-bold md:hidden h-screen">
        <p>Desktop only</p>
      </section>
    </>
  )
}

export default App
