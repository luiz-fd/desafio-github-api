import { Link } from 'react-router-dom';
import './styles.css'

export default function HomeBody() {
  return (
    <>
    <div className="home-content-container">
      <h1>Desafio Github API</h1>
      <h3>DevSuperior - Escola de programação</h3>
      <Link to="/profile"><button>Começar</button></Link>
      
    </div>
    </>
  );
}
