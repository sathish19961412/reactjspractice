import {Component} from 'react';
import ApiExample from './ApiExample';
import Form from './Form';
import Table from './Table';

class App extends Component
{
  state = {
    character:[]
}

  removecharacter =(index)=>{
    const {character} =this.state
    let filter=character.filter((character,i)=>{
        return i!==index
    });
     this.setState({character:filter});
  }

  handleSubmit=(character)=>{
      this.setState({character:[...this.state.character,character]})
  }
  render(){
    const {character}=this.state
    return(
      <div className='App mt-5'>
           <Table removecharacter={this.removecharacter} characterData={character} />
           <Form handleSubmit={this.handleSubmit} />
           <ApiExample />
      </div>
    );
  }
}

export default App;

