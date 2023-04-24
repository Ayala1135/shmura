import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import ContentSideBarStaff from './ContentSideBarStaff';
//import User from './User';

function SideBar() {
    const [visibleRight, setVisibleRight] = useState(false);
    const handleMouseOver = () => {
        setVisibleRight(true);
      }
    const handleMousedown = () => {
        setVisibleRight(false);
      } 
    return (
        <div >
            <div style={{ direction: 'rtl' }}>
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
                    onMouseEnter={handleMouseOver}
                    // onMouseOut={handleMousedown}
                />
            </div >
            <Sidebar
                style={{ textAlign: 'center', width: 'fit-content', width: '-moz-fit-content' }}
                visible={visibleRight}
                position="right"
                onHide={() => setVisibleRight(false)}

            >
                  <ContentSideBarStaff></ContentSideBarStaff>
            </Sidebar>
          
        </div>
    );
}

export default SideBar;