import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable'
import React, { useEffect, useState } from 'react';
import './App.css';

const Employee = () => {
    const [employeeToEdit, setEmployeeToEdit] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const rol = localStorage.getItem('rol')
    return (
        <div >
            <h2>Gestión de Empleados</h2>

            <div className="container">
                {
                    rol == "admin" && <EmployeeForm
                        employeeToEdit={employeeToEdit}
                        refreshEmployees={() => setRefresh(!refresh)}
                        clearEdit={() => setEmployeeToEdit(null)}
                    />
                }

                <EmployeeTable
                    rol={rol}
                    setEmployeeToEdit={setEmployeeToEdit}
                    refresh={refresh}
                />
            </div>

        </div>
    )
}


export default Employee