import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies'
import Services from './component/Services'

function App() {

  return (
    <div>
    <div className='card-grid-pro'>
     <Companies  name={"Elm"} employeeNum={10} foundedYear={1999}/>
       </div>

       <div className='card-grid'>
       <Programers name={"Khaled"} language={"Typescript"} company={"Elm"} years={2}/>
       <Programers name={"Mohammed"} language={"Java"} company={"Elm"} years={3}/>
       <Programers name={"Ahamd"} language={"Javascript"} company={"Elm"} years={4}/>
       </div>
       <div className='card-grid-pro'>
        <Services servicesType={"Tech"} price={80}/>
       </div>
        <hr />
       <div className='card-grid-pro'>
     <Companies  name={"STC"} employeeNum={15} foundedYear={1980}/>
       </div>

       <div className='card-grid'>
       <Programers name={"Amer"} language={"Typescript"} company={"STC"} years={1}/>
       <Programers name={"Sara"} language={"Java"} company={"STC"} years={2.5}/>
       <Programers name={"Ali"} language={"Javascript"} company={"STC"} years={4}/>
       </div>

       <div className='card-grid-pro'>
        <Services servicesType={"Tech"} price={100}/>
       </div>
       <hr />
       <div className='card-grid-pro'>
     <Companies  name={"Tuwaiq"} employeeNum={10} foundedYear={1999}/>
       </div>
       <div className='card-grid'>
       <Programers name={"Faisl"} language={"Typescript"} company={"Tuwaiq"} years={5}/>
       <Programers name={"Hatim"} language={"Java"} company={"Tuwaiq"} years={6}/>
       <Programers name={"Rayan"} language={"Javascript"} company={"Tuwaiq"} years={3.5}/>
       </div>

       <div className='card-grid-pro'>
        <Services servicesType={"Teaching"} price={200}/>
       </div>
    </div>
  )
}

export default App
