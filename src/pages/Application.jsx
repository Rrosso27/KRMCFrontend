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
        <div>
            <h2>Gestión de Solicitudes</h2>

            <div className="container">
                <ApplicationForm
                    applicationToEdit={applicationToEdit}
                    refreshApplication={() => setRefresh(!refresh)}
                    clearEdit={() => setApplicationToEdit(null)}
                />

                <div className='mb-4'>
                    <ApplicationTable
                        rol={rol}
                        stateUpdate={stateUpdate}
                        setStateUpdate={setStateUpdate}
                        setApplicationToEdit={setApplicationToEdit}
                        refresh={refresh}
                    />
                </div>

            </div>
        </div>

    )
}


export default Application