import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
// import { ProductService } from './service/ProductService';

export default function LoadTableww({ data, col }) {
    //הגדרת רשומה ריקה למילוי
    let emptyRow = '';
    //    col.map((item, index)=>{ item: null })

    const [customers, setCustomers] = useState(null);
    //; setCustomers(data)

    const [submitted, setSubmitted] = useState(false);
    const [myData, setMyData] = useState(data);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);

    const [globalFilter, setGlobalFilter] = useState(null);
    const [row, setRow] = useState(emptyRow);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState();
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);
    const toast = useRef(null);
    const dt = useRef(null);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };
    var keys = [];

    useEffect(() => { if (col) initFilters() }, [col])
    useEffect(() => { console.log('filters:', filters); }, [filters])

    useEffect(() => {

        if (data?.length > 0) {
            keys = Object.keys(data[0]);
            // console.log(customers, "h)))))))))))))))))))hhh");
        }
        //     // CustomerService.getCustkeysomersMedium().then((data) => {
        //     setCustomers(data);

        // setLoading(false);
        // });
        // initFilters();
        }, [data]);

        // const getCustomers = (data) => {
        //     return [...(data || [])].map((d) => {
        //         d.date = new Date(d.date);
        //         return d;
        //     });
        // };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < myData.length; i++) {
            if (myData[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        console.log('in initFilters');
        let filtersObj = {}
        col.map((c) => {
            if (c.includes('date')) { filtersObj[c] = { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] } }
            else filtersObj[c] = { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }
        })
        console.log(filtersObj, "filtersObj");
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            ...filtersObj
        });
        setGlobalFilterValue('');
    }

    // const onCategoryChange = (e) => {
    //     let _product = { ...myData };

    //     _product['category'] = e.value;
    //     setMyData(_product);
    // };

    // const onInputChange = (e, name) => {
    //     const val = (e.target && e.target.value) || '';
    //     let ro = { ...row };
    //     ro[`${name}`] = val;

    //     setMyData(ro);
    // };

    // const onInputNumberChange = (e, name) => {
    //     const val = e.value || 0;
    //     let ro = { ...row };

    //     ro[`${name}`] = val;
    //     setRow(ro);
    // };

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
    };

    const representativeBodyTemplate = (rowData, item) => {
        // const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <h4>{rowData[item]}</h4>
                {/* <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" /> */}
                {/* <span>{representative.name}</span> */}
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                {/* <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
                <span>{option.name}</span> */}
            </div>
        );
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        );
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedFilterTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2">
                <label htmlFor="verified-filter" className="font-bold">
                    Verified
                </label>
                <TriStateCheckbox inputId="verified-filter" value={options.value} onChange={(e) => options.filterCallback(e.value)} />
            </div>
        );
    };


//just searching
    const headerw = (
        <div className="flex flex-wrap gap-2  justify-content-between" style={{ mergin: 'right', direction: 'rtl' }}>
            <span className="p-input-icon-left" style={{ direction: 'rtl' }}>
                <i className="pi pi-search" style={{ direction: 'rtl' }} />
                <InputText style={{ merginRight: 'right', direction: 'rtl', right: '$' }} type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

//also clear buuton
    const header = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };


    return (
        <div className="card">
            <Toast ref={toast} />
            
            <DataTable value={data} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} paginator showGridlines rows={10} loading={loading} dataKey="idUser"
                filters={filters} globalFilterFields={['userFirstName', 'country.name', 'representative.name', 'balance', 'status']} header={header}>
                <Column selectionMode="multiple" exportable={false}></Column>
                {col.length > 0 && col.map((item, index) => {

                    return (

                        <Column key={index} field="name" header={item} filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} bodyStyle={{ minWidth: '8rem', fontSize: '12' }}
                            body={(rowData) => representativeBodyTemplate(rowData, item)} filter filterElement={representativeFilterTemplate} />
                    )
                })}

            </DataTable>
        </div>
    );
}
