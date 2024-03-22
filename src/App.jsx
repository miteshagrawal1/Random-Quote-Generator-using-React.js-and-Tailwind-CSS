import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
const [quote, setquote] = useState([])

const handleclick = async ()=>{
  let res = await axios.get("https://api.quotable.io/random")
  console.log(res.data);
  setquote(res.data)
}
useEffect(()=>{
  handleclick()
}, [])

  return (
    <>
      <div className="container min-w-full min-h-screen flex items-center flex-col bg-teal-100">
        <div className="my-24 flex items-center justify-center text-center px-2 py-2 bg-slate-100 shadow-slate-800 flex-col border-2 border-black rounded-md w-1/3">
          <h2 className='text-xl font-bold'>{quote.content}</h2>
          <p className='font-semibold py-2'>{`by:- ${quote.author}`}</p>
          <button onClick={handleclick} className='bg-cyan-950 px-2 py-1 text-white font-bold rounded-md text-center hover:bg-teal-900'>Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
