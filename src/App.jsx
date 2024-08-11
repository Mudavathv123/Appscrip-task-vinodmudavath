
import DiscourProductSection from './components/DiscourProductSection/DiscourProductSection'
import FooterSection from './components/FooterSection/FooterSection'
import HeaderSection from './components/HeaderSection/HeaderSection'
import ProductSection from './components/ProductSection/ProductSection'
import './App.css'

function App() {


  return (
    <div className= "app-container">
      <HeaderSection />
      <hr />
      <DiscourProductSection /> 
      <ProductSection /> 
      <FooterSection />
    </div>
    
  )
}

export default App
