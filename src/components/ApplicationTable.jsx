import { useState, useEffect } from "react";
import { getApplications, deleteApplication } from "../app/api";

const ApplicationTable = ({ rol, setApplicationToEdit, refresh, stateUpdate, setStateUpdate }) => {
  const [applications, setApplications] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    fetch();
  }, [refresh]);

  const fetch = async () => {
    try {
      const response = await getApplications();
      setApplications(response.data.data);
    } catch (error) {
      console.error("Error obteniendo las solicitudes :", error);
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta solicitud ?")) {
      await deleteApplication(id);
      fetch();
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buscar..." value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>codigo</th>
            <th>descripcion</th>
            <th>resumen</th>
            <th>Empleado</th>
          </tr>
        </thead>
        <tbody>
          {applications
            .filter(appli => appli.codigo.toLowerCase().includes(filtro.toLowerCase()))
            .map((application) => (
              <tr key={application.id}>
                <td>{application.codigo}</td>
                <td>{application.descripcion}</td>
                <td>{application.resumen}</td>
                <td>{application.id_employee}</td>
                {rol == "admin" && <td>
                  <button onClick={() => { setApplicationToEdit(application); setStateUpdate(!stateUpdate) }}>✏️ Editar</button>
                  <button onClick={() => handleDelete(application.id)}>🗑️ Eliminar</button>
                </td>}

              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
