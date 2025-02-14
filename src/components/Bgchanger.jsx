import React , {useState} from 'react'

function Bgchanger() {
    const [color , setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200 flex m-auto justify-center items-center ' style={{backgroundColor: color }}>
      <nav className='bg-white text-black  text-2xl rounded-lg font-mono border-2    border-black'>
        <ul className='flex justify-around p-4 m-auto border-x-4  flex-wrap'>
            <button className='bg-red-400 p-3 rounded-2xl text-white border-1 border-black hover:bg-red-800 ml-2 mr-2 mt-2 ' style={{backgroundColor: "red"}} onClick={() => {setColor("red")}}>Red</button>
            <button className='bg-green-400 p-3 rounded-2xl text-white border-1 border-black hover:bg-green- ml-2 mr-2 mt-2' style={{backgroundColor: "green"}} onClick={() => {setColor("green")}}>Green</button>
            <button className='bg-blue-400 p-3 rounded-2xl text-white border-1 border-black hover:bg-blue-800 ml-2 mr-2 mt-2'  style={{backgroundColor: "blue"}} onClick={() => {setColor("blue")}}>Blue</button>
            <button className='bg-orange-400 p-3 rounded-2xl text-white border-1 border-black hover:bg-orange-800 ml-2 mr-2 mt-2' style={{backgroundColor: "orange"}} onClick={() => {setColor("orange")}}>Orange</button>
            <button className='bg-purple-400 p-3 rounded-2xl text-white border-1 border-black hover:bg-purple-800 ml-2 mr-2 mt-2' style={{backgroundColor: "purple"}} onClick={() => {setColor("purple")}}>Purple</button>
            <button className='bg-violet-400 p-3 rounded-2xl text-white border-1 border-black hover:bg-violet-800 ml-2 mr-2 mt-2' style={{backgroundColor: "violet"}} onClick={() => {setColor("violet")}} >Violet</button>
            <button className='bg-yellow-400 p-3 rounded-2xl text-white border-1 border-black hover:bg-yellow-800 ml-2 mr-2 mt-2'style={{backgroundColor: "brown" } } onClick={() => {setColor("brown")}}>Brown</button>
        </ul>
      </nav>
    </div>
  )
}

export default Bgchanger
