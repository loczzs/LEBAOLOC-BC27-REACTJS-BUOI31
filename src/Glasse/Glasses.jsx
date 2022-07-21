import React, { Component } from 'react'
import "./Glasses.css"
// import data from "./data.json";
import data from "./data.json"

console.log(data[0].id)

export default class Glasses extends Component {
   
    constructor(){
        super()
        this.state= {
            imgUrl:  "/img/glassesImage/v1.png",
            name: data[0].name,
            desc: data[0].desc
        }
    }
    changeGlasse = (img ,datas) =>{
        const imgUrl = `/img/glassesImage/v${img}.png`
        const name = data[img-1].name
        const desc = data[img-1].desc
        this.setState({
            imgUrl: imgUrl,
            name : name,
            desc: desc
        })
    }
    
  render() {
    return (
       <div className='container bcd'>
            <div className='row abc'>
                <div className='col-sm-6 text-center model'>
                    <img width={"50%"} height = {"500px"} src="./img/glassesImage/model.jpg" alt="" />
                    <div className='gla'>
                        <img width={"200px"} src={this.state.imgUrl} alt="" />
                    </div>
                    <div className='text'>
                        <h3 className='text-primary'>{this.state.name}</h3>
                        <span>{this.state.desc}</span>
                    </div>
                </div>
                <div className='col-sm-6 text-center'>
                    <img width={"50%"} height = {"500px"} src="./img/glassesImage/model.jpg" alt="" />
                </div>
            </div>
            
            <div className='con-glass bg-white'>
                <div className='row pdglass '>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(1)}>
                        <img width={"100%"} src="./img/glassesImage/g1.jpg" alt="" />
                    </div>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(2)}>
                        <img width={"100%"} src="./img/glassesImage/g2.jpg" alt="" />
                    </div>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(3)}>
                        <img width={"100%"} src="./img/glassesImage/g3.jpg" alt="" />
                    </div>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(4)}>
                        <img width={"100%"} src="./img/glassesImage/g4.jpg" alt="" />
                    </div>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(5)}>
                        <img width={"100%"} src="./img/glassesImage/g5.jpg" alt="" />
                    </div>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(6)}>
                        <img width={"100%"} src="./img/glassesImage/g6.jpg" alt="" />
                    </div>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(7)}>
                        <img width={"100%"} src="./img/glassesImage/g7.jpg" alt="" />
                    </div>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(8)}>
                        <img width={"100%"} src="./img/glassesImage/g8.jpg" alt="" />
                    </div>
                    <div className='col-sm-2 bdglass' onClick={()=> this.changeGlasse(9)}>
                        <img width={"100%"} src="./img/glassesImage/g9.jpg" alt="" />
                    </div>
                </div>
            </div>
       </div>
    )
  }
}
