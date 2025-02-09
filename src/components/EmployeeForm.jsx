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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <input type="number" placeholder="Salario" value={salario} onChange={(e) => setSalario(e.target.value)} required />
            <input type="date" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} required />
            <button type="submit">{employeeToEdit ? "Actualizar" : "Agregar"}</button>
            {employeeToEdit && <button onClick={clearEdit}>Cancelar</button>}
        </form>
    );
};

export default EmployeeForm;
