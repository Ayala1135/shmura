export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'src/Pictures-Video/logo_shmura.png',
                thumbnailImageSrc:'src/Pictures-Video/logo_shmura.png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'src/Pictures-Video/logo_shmura.png',
                thumbnailImageSrc:'src/Pictures-Video/logo_shmura.png',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'src/Pictures-Video/logo_shmura.png',
                thumbnailImageSrc: 'src/Pictures-Video/logo_shmura.png',
                alt: 'Description for Image 3',
                title: 'Title 3'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

