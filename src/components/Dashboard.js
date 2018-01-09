import React from 'react'
import Slot from './Slot'


const Dashboard = ({
  slotInstrumentTypes, 
  setSlotInstrumentType
}) => {
  return (
    <div className="dashboard">
      <Slot 
        instrumentType={ slotInstrumentTypes[0] }
        slotNumber={1}
        setSlotInstrumentType = { () => { setSlotInstrumentType(0) } }
      />
      <Slot 
        instrumentType={ slotInstrumentTypes[1] }
        slotNumber={2}
        setSlotInstrumentType = { () => { setSlotInstrumentType(1) } }
      />
      <Slot         
        instrumentType={ slotInstrumentTypes[2] }        
        slotNumber={3}
        setSlotInstrumentType = { () => { setSlotInstrumentType(2) } }
      />
      <Slot
        instrumentType={ slotInstrumentTypes[3] }        
        slotNumber={4}
        setSlotInstrumentType = { () => { setSlotInstrumentType(3) } }
      />
      <Slot 
        instrumentType={ slotInstrumentTypes[4] }        
        slotNumber={5}
        setSlotInstrumentType = { () => { setSlotInstrumentType(4) } }
      />
      <Slot
        instrumentType={ slotInstrumentTypes[5] }        
        slotNumber={6}
        setSlotInstrumentType = { () => { setSlotInstrumentType(5) } }
      />
    </div>
  )
}

export default Dashboard