import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function RequestContent() {
    return (
        <div className="card">
            <Editor
                placeholder="כאן המקום לכתוב את כל מה שרצית לומר, הצעות לייעול. בקשות ופניות לצוות של שמורה. אנחנו כאן כדי לשמוע....."
                style={{ height: '320px', direction: 'rtl', right: '0px' }} />
        </div>
    )
}
