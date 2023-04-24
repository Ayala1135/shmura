import { Divider } from 'primereact/divider';
import React, { useState, useEffect } from 'react';
//import {useNavigate} from "react-router-dom"
//  import { ProductService } from './service/ProductService';

export default function MainTitle(props) {
    const text = props.title;
    const icon2 = props.icon;
    return (
        <div style={{ background: 'var(--surface-ground)', padding:'0' }}>
            <Divider align="center" style={{ fontSize: '20px', direction: 'ltr' }}>
                <div className="inline-flex align-items-center" style={{ fontSize: '20px', direction: 'rtl', background: 'var(--surface-ground)' }} >
                    <i className={icon2} style={{ fontSize: '20px', direction: 'rtl', background: 'var(--surface-ground)' }}></i>
                    <b style={{ fontSize: '20px', direction: 'ltr', background: 'var(--surface-ground)' }}>{text}</b>
                </div>
            </Divider>
        </div>
    )
}