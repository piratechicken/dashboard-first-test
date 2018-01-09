import React from 'react'
import InstrumentTypeSelect from './InstrumentTypeSelect'

const DraggableComponent = ({
  draggableInstrument,
  setDraggableInstrumentType
}) => {
  return (
    <div className="draggableInstrument">
      <button className="closeButton"
        onClick={ ()=>{ setDraggableInstrumentType(null) } }
      >
        X
      </button>
      { draggableInstrument }
      <div className="draggableInstrumentInstruction">
        Drag me to an available slot
      </div>
    </div>
  )
}

export default DraggableComponent