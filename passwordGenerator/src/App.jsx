import { useState } from 'react'


function App() {
  const [length , setLength] = useState(8);
   

  return (
  
    <>
     <div className='flex items-center w-48 h-28 rounded-xl shadow-xl bg-gray-600 px-4 py-4 gap-y-4'></div>
    </>
  )
}

export default App
