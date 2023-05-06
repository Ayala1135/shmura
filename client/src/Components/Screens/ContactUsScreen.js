import Toolbar from '../Toolbar';
import RequestContent from '../RequestContent';
import map from '../../Pictures-Video/map.png'
export default function ContactUsScreen() {
    return (
        <>
            <Toolbar />
            <div>
                <h1 >צרי קשר</h1>

                <div>
                    <p>רחוב שמורה 4 פינת הסמינר החדש<br /> ת.ד. 9772305</p>
                    <img src={map} className='w-5 pl-1 pt-2 pb-2 '></img>
                </div>

                <b>שעות פעילות המשרד:<br /> א'-ה' בין השעות 10.00-19.00</b>
                
                <div>
                    <h2>ניתן לפנות אלינו באמצעות הטופס שלהלן</h2>
                    <p>לתשומת ליבך - תמיד עדיף לפנות מתוך האיזור האישי שלך.</p>
                    <RequestContent />
                </div>


            </div>
        </>
    )
}