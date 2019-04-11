import React, { Component } from 'react';
import axios from "axios";  
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import TablePane from '../components/table';
import { Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

class Home extends Component {
    state = {
        search:"",
        loading:false,
        rows:[]
    };

    componentWillMount() {
        // console.log(this.state.rows, this.state.rows.length);
    }

    handleKeys(e){
        if(e.key=="Enter")
            this.search();
    }

    search(){
        this.setState({loading:true, rows:[]});
        axios.post('/?q='+this.state.search).then(resp=>{
            // console.log(resp.data)
            this.setState({loading:false, rows:resp.data.data});
        }).catch(err=>{
            console.log(err);
            this.setState({loading:false});
        });
    }

    render() {
        return ( 
            <div>  
                <div style={{marginLeft:"auto", marginRight:"auto", marginTop:20, padding:20, maxWidth:600}}>
                <TextField type="number" placeholder="No. of words" onKeyPress={e=>this.handleKeys(e)} onChange={e=>{this.setState({search:e.target.value})}} value={this.state.search} />
                <div className="customButton" onClick={e=>this.search()}><SearchIcon style={{marginLeft:15, marginTop:12}} fontSize="large"/></div>
                
                <br />

                <Fade in={this.state.loading}>
                    <LinearProgress />
                </Fade>

                <Divider />
                <br/>

                <Slide direction="up" in={this.state.rows.length!==0} mountOnEnter unmountOnExit>
                    <TablePane rows={this.state.rows} />
                </Slide>

                </div>

            </div>
        );
    }
}

export default Home;