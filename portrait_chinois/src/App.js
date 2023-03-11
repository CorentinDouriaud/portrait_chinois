import './App.css';
import AddSuspense from './AddSuspense'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const styleBoutonRouge ={
  borderRadius: 35,
  backgroundColor: "#2b33bd",
  padding: "18px 36px",
  fontSize: "18px",
  color: "#d42a2a"
}

const styleBoutonJaune ={
  borderRadius: 35,
  backgroundColor: "#2b33bd",
  padding: "18px 36px",
  fontSize: "18px",
  color: "#d9b61c"
}

const styleBoutonVert ={
  borderRadius: 35,
  backgroundColor: "#2b33bd",
  padding: "18px 36px",
  fontSize: "18px",
  color: "#3e992e"
}

function App() {

  const questionVertes = [
  "Questionv 1",
  "Questionv 2",
  "Questionv 3",
  "Questionv 4"]
  const questionRouges = [
  "Questionr 1",
  "Questionr 2",
  "Questionr 3",
  "Questionr 4"]
  const questionJaunes = [
  "QuestionJ 1",
  "Questionj 2",
  "Questionj 3",
  "Questionj 4"]
  
  const [couleur, setCouleur] = useState("grey")
  const [personState, setPersonState] = useState("Quelle est ton empathie envers la nature ?")
  const questionVertesAlea = () => {
    const randomNumber = Math.floor(Math.random() * questionVertes.length);
    setPersonState(questionVertes[randomNumber])
    console.log(personState)
}
const questionRougesAlea = () => {
  const randomNumber = Math.floor(Math.random() * questionRouges.length);
  setPersonState(questionRouges[randomNumber])
  console.log(personState)
}
const questionJaunesAlea = () => {
  const randomNumber = Math.floor(Math.random() * questionJaunes.length);
  setPersonState(questionJaunes[randomNumber])
  console.log(personState)
}
  const click = couleur => {
    setCouleur(couleur)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = couleur
  },[couleur])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <AddSuspense texte={personState} key={personState}/>
          <p></p>
          <Button variant="contained" style={styleBoutonRouge} onClick={()=>{click("#d42a2a"); questionRougesAlea()}}>Questions Rouges</Button>
          <p></p>
          <Button variant="contained" style={styleBoutonJaune} onClick={()=>{click("#d9b61c"); questionJaunesAlea()}}>Questions Jaunes</Button>
          <p></p>
          <Button variant="contained" style={styleBoutonVert} onClick={()=>{click("#3e992e"); questionVertesAlea()}}>Questions Vertes</Button>
        </p>
      </header>
            
    </div>
  );
}

export default App;
