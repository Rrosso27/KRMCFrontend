import React from "react";

import { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../app/api";

const EmployeeForm = ({ employeeToEdit, refreshEmployees, clearEdit }) => {
    const [nombre, setNombre] = useState("");
    const [salario, setSalario] = useState("");
    const [fechaIngreso, setFechaIngreso] = useState("");

    useEffect(() => {
        if (employeeToEdit) {
            setNombre(employeeToEdit.nombre);
            setSalario(Number(employeeToEdit.salario));
            setFechaIngreso(employeeToEdit.fechaIngreso);
        }
    }, [employeeToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fechaFormateada = new Date(fechaIngreso).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }).replace(/\//g, "-");

        const empleado = { nombre, salario, fechaIngreso: fechaFormateada };
        try {
            if (employeeToEdit) {
                await updateEmployee(employeeToEdit.id, empleado);
                clearEdit();
            } else {
                await createEmployee(empleado);
            }
            refreshEmployees();
            setNombre("");
            setSalario("");
            setFechaIngreso("");
        } catch (error) {
            console.error("Error guardando empleado:", error);
        }
    };

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className="mb-2">
                            <label for="salario" class="form-label">Salario</label>
                            <input type="number" className="form-control" id="salario" placeholder="Salario" value={salario} onChange={(e) => setSalario(e.target.value)} required />
                        </div>
                        <div className="mb-2">
                            <label for="date" class="form-label">Fecha De Ingreso</label>

                            <input type="date" id="date" className="form-control" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} required />

                        </div>
                        <div className="mb-3">
                            <button  className="btn btn-primary" type="submit">{employeeToEdit ? "Actualizar" : "Agregar"}</button>
                            {employeeToEdit && <button className="btn btn-danger" onClick={clearEdit}>Cancelar</button>}
                        </div>

                    </form>
                </div>
            </div>
        </>

    );
};

export default EmployeeForm;
