import React from 'react'

const InstrumentTypeSelect = ({
  instrumentType,
  setDraggableInstrumentType
}) => {
  return (
    <button className="instrumentTypeSelect"
      onClick={ ()=>{ setDraggableInstrumentType(instrumentType) } }
    >
      { instrumentType }
    </button>
  )
}

export default InstrumentTypeSelect