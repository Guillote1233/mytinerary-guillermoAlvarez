import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout(){
  return (
    <div className="bg-[url('/bg-index.jpg')] bg-no-repeat bg-cover">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}