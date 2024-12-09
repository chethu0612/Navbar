
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
      <Navbar/>
      
      <div className="cards" >
      <Card title="Card1"  description="card 1 description using props"/>
      <Card title="Card2"  description="card 2 description using props"/>
      <Card title="Card3"  description="card 3 description using props"/>
      <Card title="Card4"  description="card 4 description using props"/>
      </div>
      <Footer/>

    </>
  )
}

export default App
