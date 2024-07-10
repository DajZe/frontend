// //arrow function


// const Kotak1 = () => {
//   return (
//     <>
//     <h1>Komponen Kotak 1</h1>
//     </>
//   )
//   } 

//   const Kotak2 = () => {
//     return (
//       <>
//       <h1>Komponen Kotak 2</h1>
//         <Kotak1/> 
//       </>
//     )
//     } 


//function biasa 
//<Kotak1/> memindahkan/menggabungkan const, biasakan nm komponen di awali kapital

import Kotak1 from "./components/Kotak1"
import Kotak2 from "./components/Kotak2"


function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Kotak1/>
      <Kotak2/>
    </>
  )
}

export default App
