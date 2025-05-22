import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faq from './Components/Faq'
function App() {



  // const [ans , setShowAns] = useState(initialFaqs[0].id)
  return (
    <>
    <h1>Hello World</h1>
    <Faq/>
    </>
//  <>
//  <h1 className='text-center mt-2 m-3 bg-green-200 h-auto p-4 rounded-lg'>Frequently Asked Questions</h1>

//  <div className='faqOuter'>
//  {initialFaqs.map((faq)=>{
//       return(
//         <div className='faqItem border-2 '>

//         <h2 onClick={() => setShowAns(faq.id)}>{faq.question}</h2>
//         <p className={ans === faq.id ? "showFaqItem" : " "}>{faq.answer }</p>
//       </div>
//       );
//     })}

//  </div>
//  </>
  )
}

export default App
