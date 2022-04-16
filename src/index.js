import React, { Component } from 'react';
import  ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props){                         //
        super(props);

        this.state = {lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }                                           //

    componentDidMount(){
        console.log('Component logged.')

    }

    componentDidUpdate(){
        console.log('Component updated')
    }

    // componentWillUnmount(){

    // }


    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>;
        }
        return<div>Loading!</div>;


    //     return(
    // <div>
    //     Latitude:{this.state.lat}
    //     <br/>
    //     Error:{this.state.errorMessage} 
    //     </div>
    //     ); 

    }
}

ReactDOM.render(
    <App/>,document.querySelector('#root')
)

