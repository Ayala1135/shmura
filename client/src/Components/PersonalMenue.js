
import React, { useState , useContext} from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import UserContext from './userContext';

export default function PersonalMenue() {
    const user = useContext(UserContext);
    return (
        <div className="card" >
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab header="אירועים ופרוייקטים">
                    <p className="m-0">
                    import records from project table by current user id
                    </p>
                </AccordionTab>
                <AccordionTab header="תרומות ותשלומים">
                    <p className="m-0">
                    import records from payment table by current user id
                    </p>
                </AccordionTab>
                <AccordionTab header="הפניות שלי">
                    <p className="m-0">
                    import records from task table by current user id
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        