import Navbar from './Navbar'
import Footer from './Footer'
import{Outlet} from 'react-router-dom'
import '../styles/Layout.css'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <div className='layout-container'>   
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout
