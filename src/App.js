import './App.css';
import AddSuspense from './AddSuspense'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { questionJaunes, questionRouges, questionVertes, questionNoires, questionPourpres, questionOranges, questionBleues } from './Questions';

const rouge = "#d42a2a"
const bleu = "#22147d"
const vert = "#3e992e"
const jaune = "#d9d90f"
const pourpre = "#630e2f"
const noir = "#000000"
const orange = "#e6830b"

const styleBoutonRouge ={
  borderRadius: 35,
  backgroundColor: "#ffffff",
  padding: "18px 36px",
  fontSize: "18px",
  color: "#d42a2a",
  width: "300px"
}

const styleBoutonJaune ={
  borderRadius: 35,
  backgroundColor: "#ffffff",
  padding: "18px 36px",
  fontSize: "18px",
  color: "#d9d90f",
  width: "300px"
}

const styleBoutonVert ={
  borderRadius: 35,
  backgroundColor: "#ffffff",
  padding: "18px 36px",
  fontSize: "18px",
  color: "#3e992e",
  width: "300px"
}


  const styleBoutonNoir ={
    borderRadius: 35,
    backgroundColor: "#ffffff",
    padding: "18px 36px",
    fontSize: "18px",
    color: "#000000",
    width: "300px"
  }

  const styleBoutonOrange ={
    borderRadius: 35,
    backgroundColor: "#ffffff",
    padding: "18px 36px",
    fontSize: "18px",
    color: "#e6830b",
    width: "300px"
  }

  const styleBoutonBleu ={
    borderRadius: 35,
    backgroundColor: "#ffffff",
    padding: "18px 36px",
    fontSize: "18px",
    color: "#3522c7",
    width: "300px"
  }

  const styleBoutonPourpre ={
    borderRadius: 35,
    backgroundColor: "#ffffff",
    padding: "18px 36px",
    fontSize: "18px",
    color: "#630e2f",
    width: "300px"
  }

function App() {
  
  const [couleur, setCouleur] = useState("grey")
  const [personState, setPersonState] = useState("Clique sur un bouton pour avoir ta première question !")

const questionsChoisie = (tableauQuestions) => {
  const randomNumber = Math.floor(Math.random() * tableauQuestions.length);
  setPersonState(tableauQuestions[randomNumber])
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
          <Button variant="contained" style={styleBoutonJaune} onClick={()=>{click(jaune); questionsChoisie(questionJaunes)}}>Questions Jaunes</Button>
          <p></p>
          <Button variant="contained" style={styleBoutonOrange} onClick={()=>{click(orange); questionsChoisie(questionOranges)}}>Questions Oranges</Button>
          <p></p>
          <Button variant="contained" style={styleBoutonVert} onClick={()=>{click(vert); questionsChoisie(questionVertes)}}>Questions Vertes</Button>
          <p></p>
          <Button variant="contained" style={styleBoutonBleu} onClick={()=>{click(bleu); questionsChoisie(questionBleues)}}>Questions Bleues</Button>
          <p></p>
          <Button variant="contained" style={styleBoutonNoir} onClick={()=>{click(noir); questionsChoisie(questionNoires)}}>Questions Noires</Button>
          <p></p>
          <Button variant="contained" style={styleBoutonRouge} onClick={()=>{click(rouge); questionsChoisie(questionRouges)}}>Questions Rouges</Button>
          <p></p>
          <Button variant="contained" style={styleBoutonPourpre} onClick={()=>{click(pourpre); questionsChoisie(questionPourpres)}}>Questions Pourpres</Button>
        </p>
      </header>
            
    </div>
  );
}

export default App;
