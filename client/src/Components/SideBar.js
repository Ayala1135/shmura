import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import User from './User';

function SideBar() {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div >
            <div style={{direction:'rtl'}}>
                <Button style={{
                    position: 'absolute',
                    width: '50px',
                    // height: '1024px',
                    minHeight: '1024px',
                    right: '0px',
                    top: '0px',
                    background: '#002249',
                    borderRadius: '0px'
                }}
                    icon="pi pi-arrows-h,pi pi-bars"
                    // iconPos='left'
                    onClick={() => setVisibleRight(true)}
                />
            </div>
            <Sidebar
            
                visible={visibleRight}
                position="right"
                 onHide={() => setVisibleRight(false)}
            >
                <User></User>
            </Sidebar>


        </div>
    );
}

export default SideBar;