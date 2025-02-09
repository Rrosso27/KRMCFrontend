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
      <input type="text" placeholder="Buscar..." value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      <table>
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
                    <button onClick={() => setEmployeeToEdit(empleado)}>✏️ Editar</button>
                    <button onClick={() => handleDelete(empleado.id)}>🗑️ Eliminar</button>
                  </td>
                }

              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
