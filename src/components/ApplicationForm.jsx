import { useState, useEffect } from "react";
import { createApplication, updateAapplication, getEmployees } from "../app/api";
const ApplicationForm = ({ applicationToEdit, refreshApplication, clearEdit }) => {
    const [codigo, setCodigo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [resumen, setResumen] = useState("");
    const [idEmployee, setidEmployee] = useState("");
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


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
                await updateAapplication(applicationToEdit.id, application)
                    .then((data) => { setSuccess(data.data.message) })
                    .catch(error => { setError(error.response.data.error); });
                clearEdit();
            } else {
                await createApplication(application).then((data) => { setSuccess(data.data.message) })
                    .catch(error => { console.log(error.response.data.error); setError(error.response.data.error); });;
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
        <>




            <div className="card">
                <div className="card-body">
                    {success && <div className="alert alert-success" role="alert">
                        {success}
                    </div>}

                    {error && <div className="alert alert-danger" role="alert">
                        {error}
                    </div>}

                    <form onSubmit={handleSubmit}>

                        <div className="mb-2">
                            <label for="codigo" className="form-label">Codigo</label>
                            <input type="text" id="codigo" className="form-control" placeholder="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
                        </div>
                        <div className="mb-2">
                            <label for="descripcion" className="form-label">Descripcion</label>
                            <input type="text" id="descripcion" className="form-control" placeholder="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                        </div>
                        <div className="mb-2">
                            <label for="resumen" className="form-label">Resumen</label>
                            <input type="text" id="resumen" className="form-control" placeholder="resumen" value={resumen} onChange={(e) => setResumen(e.target.value)} required />

                        </div>

                        {applicationToEdit == null &&
                            <div className="mb-2">
                                <label for="empleado" className="form-label">Empleado</label>
                                <select id="empleado" className="form-control" value={idEmployee} onChange={(e) => setidEmployee(e.target.value)} required>
                                    <option value="" defaultValue>Open this select menu</option>
                                    {empleados.length > 0 ?
                                        empleados.map((empleado) => (
                                            <option key={empleado.id} value={empleado.id}>{empleado.nombre}</option>
                                        )) : <option value="">No hay datos</option>}
                                </select>
                            </div>

                        }
                        <div className="mb-3">
                            <button class="btn btn-primary" type="submit">{applicationToEdit ? "Actualizar" : "Agregar"}</button>
                            {applicationToEdit && <button onClick={clearEdit}>Cancelar</button>}
                        </div>

                    </form>
                </div>
            </div>

        </>

    );
};

export default ApplicationForm;
