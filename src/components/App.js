import Navbar from "../components/Navbar"
import Search from "../components/Search"
import Products from "../components/Products"
import Aboutus from './components/Aboutus';

import Footer from "..components/Footer"

function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Search></Search>
        <Products></Products>
        <Aboutus></Aboutus>
        <Footer></Footer>
    </div>
    )
}

export default App
