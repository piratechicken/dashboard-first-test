import React, { Component } from 'react';
import Dashboard from './components/Dashboard'
import SaveButton from './components/SaveButton'
import InfoButton from './components/InfoButton'
import AddButton from './components/AddButton'
import DraggableComponent from './components/DraggableComponent'

import './App.css'

class App extends Component {
  state = {
    showAdd: false,
    draggableInstrument: null,
    slotInstrumentTypes: [null, null, null, null, null, null]
  }

  toggleShowAdd = () => {
    this.setState(() => {
      return({ showAdd: !this.state.showAdd })
    })
  }

  setDraggableInstrumentType = (draggableInstrument) => {
    this.setState(() => {
      return({ 
        draggableInstrument: draggableInstrument,
        showAdd: false 
      })
    })
  }

  setSlotInstrumentType = (slotArrayIndex) => { 
    this.setState((prevState) => {
      let newArray = prevState.slotInstrumentTypes
      newArray[slotArrayIndex] = this.state.draggableInstrument
      return({ 
        slotInstrumentTypes: newArray
      })
    })
  }

  render() {
    const { showAdd, draggableInstrument, slotInstrumentTypes} = this.state

    return (
      <div className="App">
        {
          !!draggableInstrument &&
          <DraggableComponent 
            draggableInstrument={ draggableInstrument }
            setDraggableInstrumentType={ this.setDraggableInstrumentType }
          />
        }
        <Dashboard 
          slotInstrumentTypes = { slotInstrumentTypes }
          setSlotInstrumentType={ this.setSlotInstrumentType }
        />
        <InfoButton />
        <AddButton 
          showAdd={ showAdd }
          toggleShowAdd={ this.toggleShowAdd }
          setDraggableInstrumentType={ this.setDraggableInstrumentType }
        />
        <SaveButton />
      </div>
    );
  }
}

export default App;
