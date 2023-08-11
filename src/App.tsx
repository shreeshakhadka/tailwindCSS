import ButtonComponent from "./components/Button.comp"
import CardComponent from "./components/Card.comp"
import FormComponent from "./components/form.comp"
import './components/components.css'
import './index.css'
function App() {

  return (
    <>
    
    <h1 className="button"> Button components</h1>
    <ButtonComponent/>
    <h1 className="card"> Card components</h1>
    <CardComponent
    />
    <br/>
    <FormComponent/>
    </>
  )
}

export default App
