import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from '../../app/api'
import './App.css';


const RecordUser = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState('');
  const [nombre, setNombre] = useState('');
  const [rol, setRol] = useState('');


  const data = { email, nombre, rol, password }


  const handleRecord = async (e) => {
    e.preventDefault();
    const respuesta = await registerUser(data).then(data => { localStorage.setItem("token", data.data.token); return data.data.state })
      .catch(error => { setError(error.response.data.error); return error.response.data.state })
    if (respuesta) {
      navigate("/login");
    }
  };

  return (
    <div>

      <div className="login-conten">
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Registro de usuarios</h5>
            {error && <div class="alert alert-danger" role="alert">
              {error}
            </div>}

            <form onSubmit={handleRecord}>
              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="nombre" className="col-sm-2 col-form-label">Nomber</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="rol" className="col-sm-2 col-form-label">Rol</label>
                <div className="col-sm-10">
                  <select className="form-control" id="rol" value={rol} onChange={(e) => setRol(e.target.value)} required >
                    <option value="admin">Administrador</option>
                    <option value="user">Empleado</option>
                  </select>
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>
              <button className="btn btn-success" type="submit" >Registrar</button>

              {/* <button onClick={handleLogin}>Ingresar</button> */}

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RecordUser