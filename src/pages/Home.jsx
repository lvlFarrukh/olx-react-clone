import React from 'react'

// Component
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Adds from '../components/Adds.jsx'
import Slider from '../components/Slider.jsx'
import AddCarts from '../components/AddCarts.jsx'

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header />

                <Navbar />

                <Adds />

                <Slider />

                <AddCarts />


                <Adds />

                <Footer />
            </div>
        )
    }
}

export default Home
