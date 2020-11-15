import React from 'react'

// import Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Adds from '../components/Adds'
import MultiCategoryList from '../components/MultiCategoryList'
import SingleCategoryList from '../components/SingleCategoryList'
import InputPriceAndArea from '../components/InputPriceAndArea'
import SelectorCategory from '../components/SelectorCategory'
import CheckBoxCategory from '../components/CheckBoxCategory'
import ActionBar from '../components/ActionBar';
// import SequenceView from '../components/SequenceView';
import TitleViewCart from '../components/TitleViewCart';

class ItemView extends React.Component {
    render() {
        return(
            <div>

                <Header />
                <Navbar />
                <Adds />

                <section>
                    <div className="container-fluid main-div-VI">
                        <div className="row">
                            <p className="navi-option"> Home / Catagory / sub-Catagory / Location </p>
                        </div>

                        <div className="row title-IV">
                            <h3>Motorcycles in Kala Khatai Road</h3>
                        </div>


                        <div className="row">
                            
                            <div className="col-3 cate-div-VI">

                                <h5>Filter</h5>
                                <hr/>


                                <MultiCategoryList />
                                <MultiCategoryList />


                                <SingleCategoryList />

                                <InputPriceAndArea />


                                <SelectorCategory />

                                <CheckBoxCategory />

                               
                                
                            </div>

                            <div className="col-9">
                                
                                <div className="row ab-main">
                                    <div>
                                        <div className="carts-section">
                                            <p>7 ads in <span>Kala Khatai Road</span></p>
                                        </div>
                                    </div>

                                    <ActionBar />
                                   
                                </div>

                                <div className="ab-hr">
                                    <hr/>
                                </div>

                                {/* cart Show case */}

                                <div className="row">

                                    <TitleViewCart/>
                                    <TitleViewCart/>
                                    <TitleViewCart/>
                                    <TitleViewCart/>
                                    <TitleViewCart/>

                                </div>    
                    
                            </div>
                        </div>
                    </div>

                </section>


                <Footer />
            </div>
        )
    }
}

export default ItemView
