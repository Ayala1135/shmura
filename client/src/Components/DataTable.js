import React from "react";
import MUIDataTable from "mui-datatables";
import { Toolbar } from 'primereact/toolbar';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const yuseDataTable = (data, columns, options, tableName, exportData) => {
  let index = 0
  let arr = []
  columns.forEach((obj) => { arr.push(obj.label) })
  console.log("++++++++++", arr);
  let emptyProduct = {}
  arr.forEach((key) => { emptyProduct[key] = null })
  console.log("---------", emptyProduct);

  const leftToolbarTemplate = () => {
    return (
    <>
        <Button label="הוספת רשומה חדשה" icon="pi pi-plus" onClick={openNew} style={{ direction: 'rtl', marginRight:'0rem' ,marginLeft:'1rem' }}/>
        {/* <Button label="מחיקת רשומה" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} /> */}
      </>
    );
  };
  // const [products, setProducts] = useState(null);
  // const [product, setProduct] = useState(emptyProduct);
  // const [submitted, setSubmitted] = useState(false);
  // const [productDialog, setProductDialog] = useState(false);

  //   useEffect(() => {
  //     ProductService.getProducts().then((data) => setProducts(data));
  // }, []);


  const openNew = () => {
    // setProduct(emptyProduct);
    // setSubmitted(false);
    // setProductDialog(true);
  };
  
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
    <Toolbar style={{ direction: 'rtl', marginRight:'4rem' ,marginLeft:'1rem' }} className="h-100%" left={leftToolbarTemplate}></Toolbar>
    <MUIDataTable style={{ direction: 'rtl', marginRight:'4rem' ,marginLeft:'1rem' }} className="h-100% mr-12px"
      title={tableName}
      data={data}
      columns={columns}
      options={options}
    />
  </>);
};

export default yuseDataTable;
