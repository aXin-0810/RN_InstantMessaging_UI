import React, { Component } from 'react';
import {Image,Dimensions} from 'react-native';
const windthD = Dimensions.get('window').width;
const heightD = Dimensions.get('window').height;

export default class adaptiveImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width_:0,
            height_:0,
        }
    }
    componentWillMount(){

        var this_ = this,
            widthBenchmark = heightD*this.props.proportion || this.props.constantVal,
            heightBenchmark = windthD*this.props.proportion || this.props.constantVal

        Image.getSize(this.props.uri,(w,h)=>{
            var width_ = w/(h/widthBenchmark)
            var height_ = h/(w/heightBenchmark)
            if(height_>(windthD*0.6))height_=(windthD*0.6)
            this_.setState({ width_, height_ })
        },(err)=>{
            console.log(err)
        });

    }
    render() {
      return (
        <Image
            style={{
                width:(this.props.type == 'width' ? this.state.width_:'100%'),
                height:(this.props.type == 'height' ? this.state.height_:'100%')
            }}
            source={{uri:this.props.uri}}
        />
      )
    }
}