import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import ContentSideBarStaff from './ContentSideBarStaff';
import stuff_sidebar from '../Pictures-Video/stuff_sidebar.png'
//import User from './User';

function SideBar(props) {
    const content = props.content
    const [visibleRight, setVisibleRight] = useState(false);

    const handleMouseOver = () => {
        setVisibleRight(true);
    }

    const handleMouseOut = () => {
        setVisibleRight(false);
    }

    return (
        <div style={{ direction: 'rtl' }}>
            <div onMouseMove={handleMouseOver} onMouseLeave={handleMouseOut}>
                <Button className='h-100% w-3rem 100100'
                    style={{
                        position: 'absolute',
                        minHeight: '100%',
                        right: '0px',
                        top: '0px',
                        backgroundImage: 'linear-gradient(to right, teal , white)',
                        borderRadius: '0px',
                        borderColor: 'transparent'
                    }}
                    icon="pi pi-arrows-h,pi pi-bars"
                />
                <Sidebar style={{ height: '100%', backgroundImage: `url(${stuff_sidebar})`,  backgroundSize: 'contain' }}
                    visible={visibleRight}
                    position="right"
                    onHide={() => setVisibleRight(false)}
                    className='w-13rem'
                >
                    {content}
                </Sidebar>
            </div>
        </div>
    );

}

export default SideBar;