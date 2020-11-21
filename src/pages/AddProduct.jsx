import React from 'react'
import LOGO from '../media/olx_logo.png'
import './css/addProduct.css'
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { postAdd, setUploadStatus,setUser } from '../store/action'
import { storage } from '../config/firebase'


class AddProduct extends React.Component {
    constructor(){
        super();
        
        this.state = {
            subcatagoey: {
                Vehicle : ['Car', 'Car Accessories', 'Bus, van, truck', 'other vehicle'],
                Bike: ['Motorcycle', 'spare parts', 'Bicycles', 'other bikes'],
                Mobile: ['Mobile Phones', 'Accessories', 'Tablet', 'other'],
            },
            selectedCat: ['Car', 'Car Accessories', 'Bus, van, truck', 'other vehicle'],

            companyList: {
                Vehicle: ['Honda', 'Corolla', 'City', 'Other'],
                Bike: ['Honda', 'Super power', 'Unique', 'Super star', 'Other'],
                Mobile: ['Apple', 'Huawie', 'Samsung', 'Other'],
            },

            city: {
                Sindh: ['badin','dadu','hydrabad','karachi', 'other'],
                Punjab: ['attock','lahore','chakwal','jhelum', 'other'],
                Balochistan: ['bela','gawadar','jiwani','other'],
                Islamabad: ['Islamabad']
            },
            selectedCity: ['badin','dadu','hydrabad','karachi', 'other'],
            image: [],
            
            catagory: 'Vehicle',
            subCatagory: 'Car on installments',
            condition: '',
            company: '',
            title: '',
            description: '',
            price: '',
            state: 'Sindh',
            City: 'badin',
            allImageName: [],

            btnDisplay: false,
            progressShow: false,
            prograssValue: 0,
            postUploaded: false,
        }
    }

    componentDidMount() {
        if (this.props.user[0].uid === ""){
            alert("Please login First")
            this.props.history.push("/");
        }
    }

    componentDidUpdate() {
        if (this.props.successUpload){
            alert('Add Successfully Posted!');
            this.setState({
                condition: '',
                company: '',
                title: '',
                description: '',
                price: '',
                allImageName: '',
                progressShow: false,
            })
            this.props.setUploadStatus();
        }
    }
    render(){

        const selectSubCat = (value)=> {
            this.setState({
                selectedCat: this.state.subcatagoey[value],
            })
        }
        const selectCity = (value)=> {
            this.setState({
                selectedCity: this.state.city[value],
            })
        }

        const submitPost = (e)=> {
            e.preventDefault();
            let date = new Date();
            let obj = {};
            obj['uid'] = this.props.user[0].id;
            obj['catagory'] = this.state.catagory;
            obj['subCatagory'] = this.state.subCatagory;
            obj['condition'] = this.state.condition;
            obj['company'] = this.state.company;
            obj['title'] = this.state.title;
            obj['description'] = this.state.description;
            obj['price'] = this.state.price;
            obj['state'] = this.state.state;
            obj['City'] = this.state.City;
            obj['imagesURL'] = this.state.allImageName;
            obj['postDate'] = [date.getDay(), date.getMonth(), date.getFullYear()]
            this.props.postAdd(obj)
            // console.log(this.state.allImageName)
        }

        const getURL = (storageRef)=> {
            
            const UploadImg = new Promise(function(resolve, reject) {
                storageRef.getDownloadURL().then(function(url) {
                    resolve(url)
                })
            });

            UploadImg
            .then(data=> {
                this.setState({
                    allImageName: [...this.state.allImageName, data]
                })
            })
            
        }

        const uploadImage = (file)=> {
            this.setState({progressShow: true});
            // let imagesUrl = [];
            let imageName = Math.round(Math.random()*1000000000);
            // let imageNames = [...this.state.allImageName, imageName]
            let storageRef = storage.ref('olx post/'+imageName);
            var task = storageRef.put(file[0]);
            // console.log(file[0])

            task.on('state_changed', 
            (snapshot)=> {
                this.setState({prograssValue: Math.round(( snapshot.bytesTransferred / snapshot.totalBytes ) * 100) });
            },
            (err)=> {
                alert('error')
            },
            ()=> {
                this.setState({btnDisplay: false})
                getURL(storageRef)
            })
        }
        return(
            <div>

                <header className="post__header">
                    <i className="fa fa-arrow-left" aria-hidden="true" onClick={()=> { this.props.history.goBack() }}></i>
                    <Link to="/">
                        <img src={LOGO} alt=""/>
                    </Link>
                </header>

                <section className="container post__form">
                    <h4 className="post__heading" style={{marginTop: "25px"}}>POST YOUR AD</h4>

                    <form onSubmit={(e)=> {submitPost(e)}}>
                        <div className="post__form_catagory">
                            <h5 className="post__heading" style={{textAlign: "left"}}>SELECT CATAGORY</h5>

                            <label htmlFor="catagory" className="form__label">
                                Catagory*<br/>
                                <select onChange={(e)=> {
                                        selectSubCat(e.target.value);
                                        this.setState({catagory: e.target.value})
                                    }} name="catagory" id="catagory" className="form__field">

                                    <option value="Vehicle">Vehicles</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Mobile">Mobile</option>
                                </select>
                            </label>
                            
                            <label htmlFor="sub_catagory" className="form__label">
                                subcatagory*<br/>
                                <select onChange={(e)=> { this.setState({subCatagory: e.target.value})}} name="sub_catagory" id="sub_catagory" className="form__field">
                                    
                                    {this.state.selectedCat.map( (d, i)=> {
                                        return (
                                            <option key={i} value={d}>{d}</option> 
                                        )   
                                    })}
                                    
                                </select>
                            </label>

                            <hr />
                    

                            <div className="post__form_detail">

                                {/* condition */}
                                <h5 className="post__heading" style={{textAlign: "left"}}>INCLUDE SOME DETAILS</h5>
                                
                                <label htmlFor="cond-new" className="form__label">New
                                    <input onChange={(e)=> { this.setState({condition: e.target.value})}} style={{marginLeft: "5px", marginRight: '20px'}} className="condition-radio" type="radio" name="condition" value="new" id="cond-new"/>
                                </label>

                                <label htmlFor="cond-used" className="form__label">Used
                                    <input onChange={(e)=> { this.setState({condition: e.target.value})}} style={{marginLeft: "5px"}} className="condition-radio" type="radio" name="condition" value="used" id="cond-used"/>
                                </label>
                                
                                <br/>
                                <br/>

                                {/* type */}
                                
                                {this.state.catagory === "Vehicle" &&
                                 this.state.companyList.Vehicle.map((v,i)=> {
                                    return <label key={i} htmlFor={v} className="form__label">{v}
                                                <input onChange={(e)=> { this.setState({company: e.target.value})}} style={{marginLeft: "5px", marginRight: "20px"}} className="condition-radio" type="radio" name={v} value={v} id={v}/>
                                            </label>
                                 }) }

                                {this.state.catagory === "Bike" &&
                                 this.state.companyList.Bike.map((v,i)=> {
                                    return <label key={i} htmlFor={v} className="form__label">{v}
                                                <input onChange={(e)=> { this.setState({company: e.target.value})}} style={{marginLeft: "5px", marginRight: "20px"}} className="condition-radio" type="radio" name={v} value={v} id={v}/>
                                            </label>
                                 }) }

{                               this.state.catagory === "Mobile" &&
                                 this.state.companyList.Mobile.map((v,i)=> {
                                    return <label key={i} htmlFor={v} className="form__label">{v}
                                                <input onChange={(e)=> { this.setState({company: e.target.value})}} style={{marginLeft: "5px", marginRight: "20px"}} className="condition-radio" type="radio" name={v} value={v} id={v}/>
                                            </label>
                                 }) }
                               

                                <hr/>

                                {/* Title */}
                                <label htmlFor="title" className="form__label">
                                    Title*<br/>
                                    <input value={this.state.title} onChange={(e)=> { this.setState({title: e.target.value})}} type="text" name="title" id="title" className="form__field" required/>
                                </label>
                                <br/>
                                <br/>

                                <label htmlFor="description" className="form__label">
                                    Description*<br/>
                                    <textarea value={this.state.description} onChange={(e)=> { this.setState({description: e.target.value})}} name="description" id="description" className="form__field" style={{height: "130px"}} required></textarea>
                                </label>
                                <hr/>

                                {/* price */}

                                <h5 className="post__heading" style={{textAlign: "left"}}>SET A PRICE</h5>
                                <label htmlFor="price" className="form__label">
                                    Price*<br/>
                                    <input value={this.state.price} onChange={(e)=> { this.setState({price: e.target.value})}} type="number" name="price" id="price" className="form__field" required/>
                                </label>
                                <hr/>

                                {/* images upload */}
                                <h5 className="post__heading" style={{textAlign: "left"}}>UPLOAD PICTURE</h5>
                                <label htmlFor="picture" className="form__label">
                                    Picture*<br/>
                                    <input onChange={(e)=> { 
                                            this.setState({image: e.target.files})
                                            this.setState({btnDisplay: true});
                                        }} type="file" name="picture" id="picture" className="" required/>
                                    <br/>

                                    <div className="progress" style={{marginTop: "15px", display: this.state.progressShow ? '':'none'}}>
                                        <div className="progress-bar" style={{width: this.state.prograssValue+'%'}}>{this.state.prograssValue}%</div>
                                    </div>
                                    
                                    <button type="button" style={{display: this.state.btnDisplay?'':'none'}} onClick={()=> { uploadImage(this.state.image) }} className="form__btn">Upload</button>
                                    
                                </label>
                                <hr/>

                                {/* Location */}
                                <h5 className="post__heading" style={{textAlign: "left"}}>CONFIRM YOUR LOCATION</h5>
                                <label htmlFor="state" className="form__label">
                                    State*<br/>
                                    <select onChange={(e)=> {
                                            selectCity(e.target.value);
                                            this.setState({state: e.target.value})
                                        }} name="state" id="state" className="form__field">
                                        <option value="Sindh">Sindh</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Balochistan">Balochistan</option>
                                        <option value="Islamabad">Islamabad</option>
                                    </select>
                                </label>

                                <label htmlFor="city" className="form__label">
                                    City*<br/>
                                    <select onChange={(e)=> { this.setState({City: e.target.value})}} name="city" id="city" className="form__field">
                                        {this.state.selectedCity.map( (d, i)=> {
                                            return (
                                                <option key={i} value={d}>{d}</option> 
                                            )   
                                        })}
                                            
                                    </select>
                                </label>
                                <hr/>
                                <button type="submit" className="form__btn" style={{width: '12%'}} >POST</button>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    user: state.auth.userData,
    successUpload: state.adds.successUpload,
})
    
const mapDispatchToProps = (dispatch)=> ({
    postAdd: (payload)=> { dispatch(postAdd(payload)) },
    setUploadStatus: ()=> { dispatch(setUploadStatus() )},
    setUser: (payload)=> { dispatch(setUser(payload)) },

})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
