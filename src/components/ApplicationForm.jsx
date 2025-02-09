import { useState, useEffect } from "react";
import { createApplication, updateAapplication, getEmployees } from "../app/api";
const ApplicationForm = ({ applicationToEdit, refreshApplication, clearEdit }) => {
    const [codigo, setCodigo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [resumen, setResumen] = useState("");
    const [idEmployee, setidEmployee] = useState("");


    useEffect(() => {
        if (applicationToEdit) {
            setCodigo(applicationToEdit.codigo);
            setDescripcion(applicationToEdit.descripcion);
            setResumen(applicationToEdit.resumen);
            setidEmployee(applicationToEdit.idEmployee);
        }
    }, [applicationToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();



        const application = { codigo, descripcion, resumen, idEmployee };
        try {
            if (applicationToEdit) {
                await updateAapplication(applicationToEdit.id, application);
                clearEdit();
            } else {
                await createApplication(application);
            }
            refreshApplication();
            setCodigo("");
            setDescripcion("");
            setResumen("");
            setidEmployee("");

        } catch (error) {
            console.error("Error guardando application:", error);
        }
    };

    const [empleados, setEmpleados] = useState([]);
    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await getEmployees();
            setEmpleados(response.data.data);
            console.log(response.data.data)
        } catch (error) {
            console.error("Error obteniendo empleados:", error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
            <input type="text" placeholder="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            <input type="text" placeholder="resumen" value={resumen} onChange={(e) => setResumen(e.target.value)} required />
            {applicationToEdit == null && <select value={idEmployee} onChange={(e) => setidEmployee(e.target.value)} required>
                <option value="" defaultValue>Open this select menu</option>
                {empleados.length > 0 ?
                    empleados.map((empleado) => (
                        <option key={empleado.id} value={empleado.id}>{empleado.nombre}</option>
                    )) : <option value="">No hay datos</option>}
            </select>}

            <button type="submit">{applicationToEdit ? "Actualizar" : "Agregar"}</button>
            {applicationToEdit && <button onClick={clearEdit}>Cancelar</button>}
        </form>
    );
};

export default ApplicationForm;
