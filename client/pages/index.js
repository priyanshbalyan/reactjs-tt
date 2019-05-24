import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { TextField, Fade, LinearProgress, Slide, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TablePane from '../components/table';
import ParticleComponent from '../components/particles';
import axios from 'axios';
import './index.css';


const Home = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [url, setURL] = React.useState('http://terriblytinytales.com/test.txt');
  const [search, setSearch] = React.useState('');
  const [rows, setRows] = React.useState([]);

  function searchTerm(){
    setLoading(true); setRows([]);
    axios.post('/?url='+encodeURIComponent(url)+'&q='+search).then(resp=>{
        // console.log(resp.data)
        setLoading(false); setRows(resp.data.data);
    }).catch(err=>{
        console.log(err);
        setLoading(false);
    });

  }

  function handleKeys(e){
    if(e.key=="Enter") searchTerm();
  }

  return (
      <div>
        <ParticleComponent />
        <Head/>
        {/* <Nav/> */}
        <div>  
          <div style={{marginLeft:"auto", marginRight:"auto", marginTop:20, padding:20, maxWidth:600}}>
            <TextField type="text" placeholder="URL to fetch words from" onChange={e=>setURL(e.target.value)} value={url} /><br/>
            <TextField type="number" placeholder="Top n words" onKeyPress={e=>handleKeys(e)} onChange={e=>setSearch(e.target.value)} value={search} />
            <div className="customButton" onClick={e=>searchTerm()}><SearchIcon style={{marginLeft:15, marginTop:12}} fontSize="large"/></div>    
            <br />
            <Fade in={loading}>
              <LinearProgress />
            </Fade>
            <Divider />
            <br/>
            <Slide direction="up" in={rows.length!==0} mountOnEnter unmountOnExit>
              <TablePane rows={rows} />
            </Slide>
          </div>
        </div>
      </div>
  )
}

export default Home
