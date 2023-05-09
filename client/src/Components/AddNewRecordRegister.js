import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import UserContext from "./userContext";
import React, { useState, useContext, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import fetchDataWithParams from "../hooks/UseGet";
import fetchData from "../hooks/UseGetData";
import { AutoComplete } from "primereact/autocomplete";

export default function AddNewRecordRegister(props) {
  const names = props.colu;
  const user = useContext(UserContext);
  const toast = useRef(null);
  const [objSignUp, setObjSignUp] = useState([]);
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState([]);
  const [options2, setOptions2] = useState([]);

  const save = () => {
    toast.current.show({
      severity: "success",
      summary: "רשומה נוספה בהצלחה!",
      detail: "הפרטים נקלטו במערכת",
    });
  };
  const handleSubmit = async () => {
    console.log(objSignUp);

    const projectId = options.find(
      (o) => o.descriptionProject === objSignUp.idProject
    )?.idProject;
    console.log("mooooooo", projectId);
    const statusRegId = options2.find(
      (o) => o.descriptionStatusRegister === objSignUp.statusRegister
    )?.idStatusRegister;
    console.log("shooooooo", statusRegId);
    const res = fetchDataWithParams("http://localhost:8000/register", {
      ...objSignUp,
      idProject: projectId,
      statusRegister: statusRegId,
    });
    console.log(res);
    if (res.status == 400) {//לבדוק את נושא השגיאות
      alert("פרטים לא חוקיים. נסי שוב");
    } else {
      save();
    }
  };
  const onChange = (key, selected) => {
    console.log(objSignUp);
    setObjSignUp((prev) => ({ ...prev, [key]: selected }));
  };
  const onChange2 = async (key, selected) => {
    console.log("000000000000", selected);
    const ans = await fetchData(
      `http://localhost:8000/user/filterEmail/${selected}`
    );
    console.log("############", ans[0].idUser);
    const currentId = ans[0].idUser;
    console.log(objSignUp);
    setObjSignUp((prev) => ({ ...prev, [key]: currentId }));
  };
  useEffect(() => {
    const getProjectsNames = async () => {
      const projectsNames = await fetchData("http://localhost:8000/project");
      console.log("$$$$$$$$$$$", projectsNames);
      const projectOptions = projectsNames.map((project) => (
        <option key={project.idProject} value={project.idProject}>
          {project.descriptionProject}
        </option>
      ));
      console.log("*************", projectOptions);
      setOptions(projectsNames);
    };
    const getStatusRegister = async () => {
      const statusRegister = await fetchData("http://localhost:8000/register/statusregister");     
      console.log("%%%%%%%%%%%", statusRegister);
      const statusOptions = statusRegister.map((project) => (
        <option key={project.idStatusRegister} value={project.idStatusRegister}>
          {project.descriptionStatusRegister}
        </option>
      ));
      console.log("########", statusOptions);
      setOptions2(statusOptions);
    };
    getProjectsNames();
    getStatusRegister();
  }, []);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="הוספת רשומה חדשה"
        icon="pi pi-plus"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="מלאי את הפרטים הבאים על מנת להוסיף רשומה חדשה"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          <div className="card mr-8 ml-8 mt-8  shadow-8  surface-card  p-7 border-round-sm h-400rem w-80rem flex justify-content-center">
            <div className="formgrid grid grid">
              <Toast ref={toast}></Toast>

              <div className="flex-auto field col col-2">
                <label htmlFor="text">{names[0].label}</label>
                <InputText
                  list="proj"
                  autoComplete="off"
                  type="text"
                  id="proj_name"
                  onChange={(e) => onChange(names[0].name, e.target.value)}
                  value={
                    options.find((o) => o.idProject === objSignUp.idProject)
                      ?.descriptionProject
                  }
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                ></InputText>
                <datalist
                  id="proj"
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                >
                  {options.map((project, index) => (
                    <option key={index} value={project.descriptionProject}>
                      {project.descriptionProject}
                    </option>
                  ))}
                </datalist>
              </div>

              <div className="flex-auto field col col-4">
                <label htmlFor="text">מייל נרשמת</label>
                <InputText
                  onChange={(e) => onChange2(names[2].name, e.target.value)}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
              {/* 
              <div className="flex-auto field col col-4">
                <label htmlFor="text">{names[5].label}</label>
                <InputText
                  onChange={(e) => onChange(names[5].name, e.target.value)}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div> */}

              <div className="flex-auto field col col-2">
                <label htmlFor="text">{names[5].label}</label>
                <InputText
                  list="regi"
                  autoComplete="off"
                  type="text"
                  id="regi_name"
                  onChange={(e) => onChange(names[5].name, e.target.value)}
                  value={
                    options2.find((o) => o.idStatusRegister === objSignUp.statusRegister)
                      ?.descriptionStatusRegister
                  }
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                ></InputText>
                <datalist
                  id="regi"
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                >
                  {options2.map((project, index) => (
                    <option key={index} value={project.descriptionStatusRegister}>
                      {project.descriptionStatusRegister}
                    </option>
                  ))}
                </datalist>
              </div>

              {/* <div className="flex-auto field col col-2">
                <label htmlFor="text">{names[6].label}</label>
                <InputText
                  list="status"
                  autoComplete="off"
                  type="text"
                  id="status_name"
                  onChange={(e) => onChange(names[6].name, e.target.value)}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                ></InputText>
                <datalist id="status">
                  <option value="1- הרשמה בתהליך"></option>
                  <option value="2- הרשמה הושלמה"></option>
                </datalist>
              </div> */}

              <div className="appearance-none outline-none focus: w-full font-bold text-gray-900 flex-auto field col col-3">
                <div>
                  <Button
                    onClick={handleSubmit}
                    label="לאישור והוספה"
                    icon="pi pi-plus"
                    className=" bg-cyan-700 w-5 p-3 mt-6 appearance-none focus:border-primary border-cyan-700"
                    style={{ fontSize: "14px" }}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </p>
      </Dialog>
    </div>
  );
}
