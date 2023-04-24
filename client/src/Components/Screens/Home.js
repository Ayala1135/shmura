import React from 'react';
// import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
//import 'primeflex/primeflex.css';
import { useNavigate } from "react-router-dom"
//import LoadTable from './Components/LoadTable';
import Toolbar from '../Toolbar'
import shmuraVideo from '../../Pictures-Video/shmuraVideo.mp4'
import Text from '../Text';

const Home = () => {

    //const navigate = useNavigate();

    return (
        <>
            <Toolbar></Toolbar>           
            <video autoPlay muted src={shmuraVideo} type="video/mp4" 
            style={{top:'20', right:'0', width: '70%',  height: '70%', overflow:'hidden', padding:'0%',position:'absolute'}}/>
            <Text style={{top:'20', left:'20' ,width: '70%',  height: '70%' ,position:'absolute', fontSize:"20px", textAlign:'justify'}} />
        </>
    )
}

export default Home;

/*
import Toolbar from '../Toolbar'
import shmuraVideo from '../../Pictures-Video/shmuraVideo.mp4'
import Text from '../Text';

const Home = () => {

    //const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Toolbar />
            <video autoPlay muted src={shmuraVideo} type="video/mp4" 
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    width: '60%',
                    height: '60%',
                    objectFit: 'cover'
                }}
            />
            <Text style={{
                position: 'absolute',
                top: '20%',
                right: '20%',
                width: '40%',
                height: '60%',
                fontSize: '20px',
                textAlign: 'justify',
                overflow: 'auto'
            }} />
        </div>
    )
}

export default Home;

*/