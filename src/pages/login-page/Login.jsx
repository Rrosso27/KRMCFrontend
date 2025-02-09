import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser, getUserByEmail } from '../../app/api'
import './App.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState('');


  const data = { email, password }


  const handleLogin = async (e) => {
    e.preventDefault();
    const respuesta = await loginUser(data).then(data => { localStorage.setItem("token", data.data.token); return data.data.state })
      .catch(error => { setError(error.response.data.error); return error.response.data.state })

    if (respuesta) {
      getUserByEmail(email).then(data => {
        console.log(data.data.data)
        localStorage.setItem('empleado',data.data.data.nombre )
        login(localStorage.getItem('empleado'))
        localStorage.setItem('rol', data.data.data.rol)
        navigate("/employee");
      })


    }
  };





  return (
    <div>
      <div className="login-conten">
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            {error && <div class="alert alert-danger" role="alert">
              {error}
            </div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>
              <button type="submit" >Ingresar</button>

              {/* <button onClick={handleLogin}>Ingresar</button> */}

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
