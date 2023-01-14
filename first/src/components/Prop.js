import React, {Component} from 'react';

class Prop extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='box'>
                <h1>{this.props.lastName} {this.props.firstName}</h1>
                <h3>Age: {this.props.age}</h3>
                <h3>Hair Color: {this.props.color}</h3>
            </div>
        )
    }
}

export default Prop;
