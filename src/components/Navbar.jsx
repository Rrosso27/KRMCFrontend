import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
    const { user, logout } = useAuth();

    return (

        <nav style={styles.nav}>
            <h2 style={styles.logo}>MiApp</h2>
            <ul style={styles.ul}>

                {user ? (
                    <>
                        <li><Link to="/employee" style={styles.link}>Administrar Empleados  </Link></li>
                        <li><Link to="/application" style={styles.link}>Administra Solicitudes </Link></li>
                        <span>Bienvenido, {user.name}!</span>
                        <button onClick={logout}>Cerrar Sesión</button>
                    </>
                ) : (
                    <>
                    <Link style={styles.link} to="/login">Login</Link>
                    <Link style={styles.link} to="/record">Registro de usuarios</Link>
                    </>
                )}
            </ul>
        </nav>
    );
};
const styles = {
    nav: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "#fff" },
    logo: { margin: "0" },
    ul: { listStyle: "none", display: "flex", gap: "15px", margin: "0", padding: "0" },
    link: { color: "white", textDecoration: "none", fontSize: "18px" }
};
export default Navbar;
