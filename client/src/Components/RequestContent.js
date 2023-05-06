import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function RequestContent() {
    return (
        
            <Editor className="w-8 w-full justify-content-center m-auto text-right  "
                placeholder="כאן המקום לכתוב את כל מה שרצית לומר, הצעות לייעול. בקשות ופניות לצוות של שמורה. אנחנו כאן כדי לשמוע....."
                style={{ height: '320px', alignText:'right'}} />
        
    )
}
