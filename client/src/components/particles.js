import React from 'react';
import Particles from 'react-particles-js';

class ParticleComponent extends React.Component{
    render(){
        return(
            <div>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
            </div>
        )
    }
}

export default ParticleComponent;