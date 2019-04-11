import React, { Component } from 'react';
import Home from './pages/home';
import './App.css';
import ParticleComponent from './components/particles';


class App extends Component {

    render(){

        return (
            <div>
                <ParticleComponent />                
                <Home />
            </div>
        );
    }
}

export default App;