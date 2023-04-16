import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[]=[
    
    // {field: 'id', headerName: "ID", width: 90 },
    {field: 'name', headerName: 'Name', flex: 1 },
    {field: 'style', headerName: 'Style', flex: 1 },
    {field: 'flavor', headerName: 'Flavor', flex: 1 },
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const{ contactData, getData } = useGetData();
    // getData hook and then contactData
    const [ selectionModel, setSelectionModel] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }
    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
      }
    // add delete function to button

  return (
    <div>
        <Modal
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />

        {/* these are the buttons */}
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white"
                    onClick={()=>handleOpen()}
                >
                    Create New Contact
                </button>
            </div>
        <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" >Update</Button>
        <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        {/* end */}

        {/*actual data table  */}
        <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style = {{height: 400, width: '100%'}}
            >
                <h2 className='p-3 bg-blue-200 my-2 rounded'>My Contacts</h2>
                {/* rows are contactData hook */}
                <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange = {(item:any) =>{
                    setSelectionModel(item)
                }}
                />
        </div>
    </div>
  )
}

export default DataTable