import { useState, useEffect } from "react";
import { getEmployees, deleteEmployee } from "../app/api";

const EmployeeTable = ({ rol, setEmployeeToEdit, refresh }) => {
  const [empleados, setEmpleados] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, [refresh]);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmpleados(response.data.data);
    } catch (error) {
      console.error("Error obteniendo empleados:", error);
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este empleado?")) {
      await deleteEmployee(id);
      fetchEmployees();
    }
  };

  return (
    <div>
      <div className="card list">
        <div className="card-body ">
          <input type="text" placeholder="Buscar..." value={filtro} onChange={(e) => setFiltro(e.target.value)} />
          <table className="table table-light">
            <thead>
              <tr>
                <th>Fecha Ingreso</th>
                <th>Nombre</th>
                <th>Salario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleados
                .filter(emp => emp.nombre.toLowerCase().includes(filtro.toLowerCase()))
                .map((empleado) => (
                  <tr key={empleado.id}>
                    <td>{empleado.fecha_ingreso}</td>
                    <td>{empleado.nombre}</td>
                    <td>${empleado.salario}</td>
                    {
                      rol == "admin" && <td>
                        <button className="btn btn-primary" onClick={() => setEmployeeToEdit(empleado)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                        </svg> Editar</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(empleado.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-folder-minus" viewBox="0 0 16 16">
                          <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                          <path d="M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                        </svg> Eliminar</button>
                      </td>
                    }

                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
