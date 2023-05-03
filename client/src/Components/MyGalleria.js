import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../Services/PhotoService';
import { Image } from 'primereact/image';
import logoShmura from '../Pictures-Video/logoShmura.png'
import a from '../Pictures-Video/a.jpg'
// import logoShmura from '../Pictures-Video/logoShmura.png'
// import logoShmura from '../Pictures-Video/logoShmura.png'
// import logoShmura from '../Pictures-Video/logoShmura.png'



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
    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);
    console.log("!!!!!!!!!!", images);
    const thumbnailTemplate = (item) => {
        return (
            <Image src={item[0].itemImageSrc} template={icon} alt="Image" preview width="200" />
        );
    };



    return (
        <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            style={{}}
            template={icon}
            preview
            thumbnail={thumbnailTemplate(images)}
            alt="Image"
        />
    );
}
