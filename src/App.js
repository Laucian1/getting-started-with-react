import "./App.css";
import WelcomeBack from "./WelcomeBack"
import Greeting from "./Greeting"

const toDoList = [
  { completed: false, description: "Make the bed" }, 
  { completed: true, description: "Wash the dishes" }, 
  { completed: false, description: "Mow the lawn" }
]

function App() {
  const rows = toDoList.map(({completed, description}, index) => (
    <tr key = {index}>
      <td>{description}</td>
      <td>{completed ? "Yes" : "No"}</td>
    </tr>))

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Completed?</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default App;