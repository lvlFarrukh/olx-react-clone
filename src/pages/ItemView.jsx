import React from 'react'
import { connect } from 'react-redux';

import { changeHandleSearch, subFilter } from '../store/action'

// import Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Adds from '../components/Adds'
// import MultiCategoryList from '../components/MultiCategoryList'
// import SingleCategoryList from '../components/SingleCategoryList'
import InputPriceAndArea from '../components/InputPriceAndArea'
import SelectorCategory from '../components/SelectorCategory'
// import CheckBoxCategory from '../components/CheckBoxCategory'
import ActionBar from '../components/ActionBar';
import SequenceView from '../components/SequenceViewCart';
import TitleViewCart from '../components/TitleViewCart';
import GridItemView from '../components/GridItemView';

class ItemView extends React.Component {
    constructor(){
        super();
        this.state = {
            filterAdds: [],
            addsLength: 0,
            checkBoxCat: ""
        }
    }
    
    componentDidMount() {
        setTimeout(()=>{ this.setState({checkBoxCat: this.state.filterAdds[0].catagory}) }, 4000)
        const filterAddsData = (data)=> {
            let filerAdds = this.props.location.state.allAdds.filter((v)=>{
                return ( v.City.toLowerCase() === (data.location === null ? v.City.toLowerCase() : data.location.toLowerCase())
                || v.state.toLowerCase() === data.location.toLowerCase()) 
                    && (v.catagory.toLowerCase() === data.search.toLowerCase()
                    || v.title.toLowerCase().includes(data.search.toLowerCase()) )
            })

            this.setState({
                filterAdds: filerAdds,
                addsLength: filerAdds.length
            })

        }
        filterAddsData(this.props.location.state)    
    }

    componentDidUpdate(){
        const seachingAdds = ()=> {
            let filerAdds = this.props.location.state.allAdds.filter((v)=>{
                return ( v.City.toLowerCase() === (this.props.searchParameter.location === null ? v.City.toLowerCase() : this.props.searchParameter.location.toLowerCase())
                || v.state.toLowerCase() === this.props.searchParameter.location.toLowerCase()) 
                    && (v.catagory.toLowerCase() === this.props.searchParameter.search.toLowerCase()
                    || v.title.toLowerCase().includes(this.props.searchParameter.search.toLowerCase()) )
            })

            this.setState({
                filterAdds: filerAdds,
                addsLength: filerAdds.length
            })

            this.props.changeHandleSearch();
        }

        if (this.props.searchHandle === 1){
            seachingAdds()
        }

    }

    componentWillUpdate(){
        const filterFiltedAdds = ()=> {
            let filtedAdds
            if (this.props.subFilters[0].toLowerCase() === "company"){
                filtedAdds = this.props.adds.filter((v)=>{
                    return v.company.toLowerCase() === this.props.subFilters[1].toLowerCase()
                })
               
            } else if (this.props.subFilters[0].toLowerCase() === "condition") {
                filtedAdds = this.state.filterAdds.filter((v)=>{
                    return v.condition.toLowerCase() === this.props.subFilters[1].toLowerCase()
                })
            }
            console.log(filtedAdds)
            this.setState({
                filterAdds: filtedAdds,
                addsLength: filtedAdds.length
            })
            this.props.subFilter({type: "", action: null})

        }
        this.props.subFilters !== null && filterFiltedAdds()
    }
    render() {
        // console.log(this.props)
        // console.log(this.state)
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
                            <h3>{`${this.props.location.state.search.charAt(0).toUpperCase() + this.props.location.state.search.slice(1)} in ${this.props.location.state.location === undefined ? "All Locations":this.props.location.state.location}`}</h3>
                        </div>


                        <div className="row">
                            
                            <div className="col-3 cate-div-VI">

                                <h5>Filter</h5>
                                {/* <hr/> */}


                                {/* <MultiCategoryList />
                                <MultiCategoryList /> */}

                                <InputPriceAndArea />

                                <SelectorCategory attr={{type: "Condition", options: ['New', 'Used']}}/>

                                {/* <CheckBoxCategory attr={{type: "Company", options: this.state.checkBoxCat === "" ? "Vehicle" : this.state.checkBoxCat}}/> */}
                               
                                
                            </div>

                            <div className="col-9">
                                
                                <div className="row ab-main">
                                    <div>
                                        <div className="carts-section">
                                            <p>{this.state.addsLength} ads in <span>{this.props.location.state.location}.</span></p>
                                        </div>
                                    </div>

                                    <ActionBar />
                                   
                                </div>

                                <div className="ab-hr">
                                    <hr/>
                                </div>

                                {/* cart Show case */}

                                <div className="row">
                                
                                    {this.props.productView === 0 ? this.state.filterAdds.map((v, i)=> { return <SequenceView key={i} attr={v}/> }) 
                                    : this.props.productView === 1 ? this.state.filterAdds.map((v, i)=> { return <GridItemView key={i} attr={v}/> }) 
                                    : this.state.filterAdds.map((v, i)=> { return <TitleViewCart key={i} attr={v}/> })}
                                    
                                    
                                    

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

const mapStateToProps = (state) => ({ 
    adds: state.adds.allProduct,
    productView: state.adds.productView,
    searchParameter: state.adds.searchParameter,
    searchHandle: state.adds.searchHandle,
    subFilters: state.adds.subFilters
    
})
    
const mapDispatchToProps = (dispatch)=> ({
    changeHandleSearch: ()=> { dispatch(changeHandleSearch())},
    subFilter: (obj)=> { dispatch(subFilter(obj)) },

})

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);