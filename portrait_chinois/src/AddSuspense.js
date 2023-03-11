import {RandomReveal} from 'react-random-reveal'

const AddSuspense = props => {

  return <RandomReveal isPlaying duration={2} characters={props.texte} />
}

export default AddSuspense