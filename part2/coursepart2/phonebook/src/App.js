import React, { useState } from 'react'
import Submit from './Components/Submit'
import Search from './Components/Search'
import SearchList from './Components/Searchlist'
import Scroll from './Components/Scroll'
import Input from './Components/Input'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 0, number: "040-123456"},
    { name: 'Ada Lovelace',id: 1, number: '39-44-5323523' },
    { name: 'Dan Abramov',id: 2, number: '12-43-234345' },
    { name: 'Mary Poppendieck',id: 3, number: '39-23-6423122' }
  ]) 

  const [ searchField, setSearchField] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length,
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
