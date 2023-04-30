import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../Services/PhotoService';
import { Image } from 'primereact/image';

export default function MyGalleria() {
    const icon = <i className="pi pi-check"></i>;
    const [images, setImages] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4,
        },
        {
            breakpoint: '767px',
            numVisible: 3,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
        },
    ];

    const thumbnailTemplate = (item) => {
        return (
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg" template={icon} alt="Image" preview width="200" />
        );
    };

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    return (
        <Galleria 
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            style={{}}
            template={icon}
            preview
            thumbnail={thumbnailTemplate}
            alt="Image"
        />
    );
}
