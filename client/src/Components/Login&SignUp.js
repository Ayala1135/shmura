import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Login_SignUp() {
    return (
        <div className="card align-items-center" style={{marginLeft:'700px', width:'500px'}}>
            <div className="flex flex-column md:flex-row"><br/>
                <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5"><br/>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2"><br/>
                        <label htmlFor="username" className="w-6rem">
                            מייל
                        </label><br/>
                        <InputText id="username" type="text" placeholder='חשבון המייל איתו נרשמת' /><br/>
                    </div><br/>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">
                            סיסמא
                        </label><br/>
                        <InputText id="password" type="password" placeholder='הסיסמה שלך' /><br/>
                    </div><br/>
                    <Button label="כניסה" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="הרשמה" icon="pi pi-user-plus" className="p-button-success"></Button>
                </div>
            </div>
        </div>
    )
}