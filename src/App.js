import "./App.css";
import WelcomeBack from "./WelcomeBack"
import Greeting from "./Greeting"

function App() {
  return (
    <>
      <WelcomeBack name="Joe"/>
      <WelcomeBack name="Anna"/>
      <WelcomeBack />
      <Greeting />
      <Greeting language="es" />
      <Greeting language="fr" />
    </>
  )
}

export default App;