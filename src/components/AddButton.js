import React from 'react'
import InstrumentTypeSelect from './InstrumentTypeSelect'

const AddButton = ({
  showAdd,
  toggleShowAdd,
  setDraggableInstrumentType
}) => {
  return (
    <div>
    <button 
      className="addButton" 
      onClick={ ()=>{ toggleShowAdd() } }>
      <div>+</div>
    </button>
    {
      !!showAdd && 
      <div className="instrumentOptions"> 
        <button className="closeButton"
          onClick={ ()=>{ toggleShowAdd() } }
        >
        X
        </button>

        <InstrumentTypeSelect 
          instrumentType='Altimeter'
          setDraggableInstrumentType={setDraggableInstrumentType}
        />
        <InstrumentTypeSelect 
          instrumentType = 'Airspeed'
          setDraggableInstrumentType={setDraggableInstrumentType}
        />
        <InstrumentTypeSelect 
          instrumentType = 'Fuel'
          setDraggableInstrumentType={setDraggableInstrumentType}
        />


      </div>
    }
    </div>
  )
}

export default AddButton