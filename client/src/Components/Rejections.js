
import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function Rejections() {
        
    return (
        <div className="card">
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} 
            chooseLabel="בחרי את הקובץ החודשי" uploadLabel="העלאה" cancelLabel="ביטול"
            emptyTemplate={<p className="m-0">בעת העלאת הקובץ יישלח מייל המיידע על הבעיה לכל אחת מהרשומות בו.</p>} />
        </div>
    )
}
        