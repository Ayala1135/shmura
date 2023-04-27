import React from 'react';
// import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
//import 'primeflex/primeflex.css';
import { useNavigate } from "react-router-dom"

import Toolbar from '../Toolbar'
import shmuraVideo from '../../Pictures-Video/shmuraVideo.mp4'
import Text from '../Text';
//import submit from '../../Pictures-Video/haskome.jpg'

const Home = () => {
    const handleButtonClick = () => {
        window.open("https://shmura.org/wp-content/uploads/2019/03/הסכמה-מהגאון-רבי-ישראל-גנס-שליטא-נשיא-השמורה.pdf");
    }
    // function showImage() {
    //     var img = submit
    //     img.style.display = "block";
    //   }
    return (
        <>
            <Toolbar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '70%', marginTop: '2em' }}>
                    <video autoPlay muted src={shmuraVideo} type="video/mp4"
                        style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
                    />
                    <Button label="להמלצת רבי ישראל גנס שליט''א, נשיא השמורה" onClick={handleButtonClick} className="p-button-Primary" style={{margin:"10px"}}></Button>
                </div>
                <div style={{ width: '70%', fontSize: '20px', textAlign: 'justify', position: 'relative', zIndex: '1', marginTop: '10px' }}>
                    <Text />
                </div>
            </div>


        </>

    )
}

export default Home;








