import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import ContentSideBarStaff from './ContentSideBarStaff';
import member_sidebar from '../Pictures-Video/member_sidebar.png'
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
        <div>
            <div style={{ direction: 'rtl' }}>
                <div onMouseMove={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Button
                        style={{
                            position: 'absolute',
                            width: '50px',
                            minHeight: '1024px',
                            right: '0px',
                            top: '0px',
                            background: '#002249',
                            borderRadius: '0px'
                        }}
                        icon="pi pi-arrows-h,pi pi-bars"
                    />
                    <Sidebar
                        style={{
                            textAlign: 'center',
                            height:'100%',
                            backgroundImage: `url(${member_sidebar})`,
                            backgroundSize: 'contain',
                            
                        }}
                        visible={visibleRight}
                        position="right"
                        onHide={() => setVisibleRight(false)}
                    >
                        {content}
                    </Sidebar>
                </div>
            </div>
        </div>
    );

}

export default SideBar;