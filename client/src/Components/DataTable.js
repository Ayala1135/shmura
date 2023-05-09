import React from "react";
import MUIDataTable from "mui-datatables";
import { Toolbar } from 'primereact/toolbar';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const yuseDataTable = (data, columns, options, tableName, exportData) => {
  const deletedRows = new Set();
  data.forEach((item, index) => {
    if (
      (typeof item[item.length - 1] !== "string" &&
        item[item.length - 1]?.props["aria-label"]) === "IS_DELETED"
    ) {
      deletedRows.add(index);
    }
  });

  options = {
    ...options,
    onDownload: (buildHead, buildBody, columns, dataa) => {
      if (exportData) {
        dataa = [...exportData];
      }
      return `\uFEFF${buildHead(columns)}${buildBody(dataa)}`;
    },
    setRowProps: (row, index) => {
      return {
        style: {
          textDecoration: deletedRows.has(index) ? "line-through" : "none",
          cursor: "pointer",
        },
      };
    },

    textLabels: {
      body: {
        noMatch: "לא נמצאו תוצאות",
        toolTip: "מיון",
      },
      pagination: {
        next: "דף הבא",
        previous: "דף קודם",
        rowsPerPage: "מס' שורות בעמוד:",
        displayRows: "מתוך",
        jumpToPage: "עבור לדף:",
      },
      toolbar: {
        search: "חיפוש",
        downloadCsv: "הורד CSV",
        print: "הדפס",
        viewColumns: "הצג עמודות",
        filterTable: "סינון טבלה",
      },
      filter: {
        all: "הכל",
        title: "מסנני טבלה",
        reset: "מחק",
      },
      viewColumns: {
        title: "הצג עמודות",
        titleAria: "הצג/הסתדר עמודות בטבלה",
      },
      selectedRows: {
        text: "שורות נבחרו",
        delete: "מחק",
        deleteAria: "מחק שורות שנבחרו",
      },
    },
  };
  return (<>
    <Toolbar style={{ direction: 'rtl', marginRight:'4rem' ,marginLeft:'1rem' }} className="h-100%"></Toolbar>
    <MUIDataTable style={{ direction: 'rtl', marginRight:'4rem' ,marginLeft:'1rem' }} className="h-100% mr-12px"
      title={tableName}
      data={data}
      columns={columns}
      options={options}
    />
  </>);
};

export default yuseDataTable;
