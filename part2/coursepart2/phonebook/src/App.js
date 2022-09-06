import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Submit from './Components/Submit'
import Search from './Components/Search'
import SearchList from './Components/Searchlist'
import Scroll from './Components/Scroll'
import Input from './Components/Input'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ searchField, setSearchField] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('efect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      }) 
  }, [])
   console.log('render', persons.length, 'persons')
  
  
  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
      
    }

    

    const foundPerson = 
    persons.find((person) => person.name === nameObject.name ) 
    if(foundPerson) {
      window.alert(`${nameObject.name} is already in phonebook`)
      return
    } 
    setPersons(persons.concat(nameObject))
    setNewName('')

    setNewNumber(newNumber.concat(nameObject))
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filteredPersons = persons.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .number
        .includes(searchField)
      )
    }
  )
 
  const handleChange = event => {
    setSearchField(event.target.value);
  }

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons}/>
      </Scroll>
        
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Search onChange={handleChange} />
      <h2>Add a new</h2>
        <form onSubmit={addPerson}>
          Name: 
            <Input type={'text'} value={newName} onChange={handleNameChange} /> 
          Number:
            <Input type={'number'} value={newNumber} onChange={handleNumberChange} />
            <Submit type="submit" text="add" />
        </form>
      
      <h2>Numbers</h2>
      {searchList()}
    </div>
  )
}

export default App
