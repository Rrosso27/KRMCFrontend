import ApplicationForm from '../components/ApplicationForm';
import ApplicationTable from '../components/ApplicationTable';
import React, { useEffect, useState } from 'react';
import './App.css';

const Application = () => {
    const [applicationToEdit, setApplicationToEdit] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [stateUpdate, setStateUpdate] = useState(false)
    const rol = localStorage.getItem('rol')
    return (
        <div className="container">
            <h2>Gestión de Empleados</h2>
            {rol == "admin" && <ApplicationForm
                applicationToEdit={applicationToEdit}
                refreshApplication={() => setRefresh(!refresh)}
                clearEdit={() => setApplicationToEdit(null)}
            />}

            <ApplicationTable
                rol = {rol}
                stateUpdate={stateUpdate}
                setStateUpdate={setStateUpdate}
                setApplicationToEdit={setApplicationToEdit}
                refresh={refresh}
            />
        </div>
    )
}


export default Application