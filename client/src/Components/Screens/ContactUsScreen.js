import { Divider } from 'primereact/divider';
import Toolbar from '../Toolbar';
import RequestContent from '../RequestContent';
import map from '../../Pictures-Video/map.png'
export default function ContactUsScreen() {
    return (
        <>
            <Toolbar />
            <div className='direction-rtl'>
                <h1 style={{ textAlign: 'right' }}>צרי קשר</h1><br/>

                <div className='grid text-center direction-rtl'>
                    <div className='col-4 p-0 justify-content-center'>
                        <b>משרדי השמורה</b>
                        <p>רחוב תחכמוני 26, ירושלים<br /> ת.ד. 9466826</p>
                        <img src={map} className='w-5 pl-1 pt-2 pb-2 '></img>
                    </div>

                    <Divider layout='vertical' className='p-divider-vertical  col p-0 mr-0 ml-0'  />

                    <div className='col-4 p-0 justify-content-center' >
                        <b>שעות פעילות המשרד:<br /> א'-ה' בין השעות 10.00-19.00</b>
                        <p>מזכירות 0527661519<br /> הנהלת חשבונות 07772548445<br /> קו השמועה 025422286</p>
                    </div>
                </div><br/>

             
                <div>
                    <h2 className='text-center'>ניתן לפנות אלינו לכל בקשה, הערה או ייעוץ מתוך האיזורים האישיים שלכן</h2>

                </div>


            </div>
        </>
    )
}