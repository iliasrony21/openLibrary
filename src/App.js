import './App.css'
import Footer from './Components/Footer'
import Around from './Components/Home/Around'
import Header from './Components/Home/Header'

import Welcome from './Components/Home/Welcome'
import Practise from './Components/Practise'

function App () {
  return (
    <div className='bg-[#E1DCC5]'>
      <Header></Header>
      <Welcome></Welcome>
      <Practise name={'Trending Books'}></Practise>
      <Practise name={'Classic Books'}></Practise>
      <Practise name={'Books We Love'}> </Practise>
      <Practise name={'Recently Returned'}></Practise>
      <Practise name={'Romance'}></Practise>
      <Practise name={'Kids'}></Practise>
      <Practise name={'Thrillers'}></Practise>
      <Practise name={'Textbooks'}></Practise>
      <Practise name={'Authors Alliance & MIT Press'}></Practise>
      <Around></Around>
      <Footer></Footer>
    </div>
  )
}

export default App
