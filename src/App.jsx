import { useState } from "react"
import { Container, Button, List } from "./styles";
import Image from './img/people.svg'

function App() {
  const[coment, setComent] = useState();
  const [allComents, setAllComents] = useState([]);
  
  function handleClickButton(){
    if(coment != ''){
      const allOldComents = [...allComents, coment];
      setAllComents(allOldComents);
    }

  }

  function handleTextArea(event){
    setComent(event.target.value);
  }

  return (
    <Container>
      <img src={Image} alt="" />
      <textarea onChange={handleTextArea}></textarea>
      <Button isOn={coment} onClick={handleClickButton}>Comentar</Button>

      <List>
        {allComents.map((coment, index) => {
          return(
            <li key={index}>{coment}</li>
          )
        })}
      </List>
    </Container>
  )
}

export default App
