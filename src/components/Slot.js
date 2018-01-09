import React from 'react'

const Slot = ({
  slotNumber,
  setSlotInstrumentType,
  instrumentType
}) => {
  
  //let slotArrayIndex = { slotNumber }

  return (
    <div className="slot"
      onClick = {setSlotInstrumentType}
    >
      { slotNumber }
      <br/>
      { instrumentType }
    </div>
  )
}

export default Slot