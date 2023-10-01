import "./styles.css";
import TestImg from '../../../assets/image1.png'

export default function Profile() {
const teste = "oi";

  return (
    <>
      <div className="profile-search-container">
        <h1>Encontre um perfil Github</h1>
        <input type="text"></input>
        <div>
          <button>Encontrar</button>
        </div>
      </div>

      <div className="profile-result-container">
        <div className="profile-result-card">
            <img src={TestImg} alt="FOTO"></img>
            <div className="profile-info">
                <h4>Informações</h4>
                <input type="text" placeholder="Perfil: " name="Perfil: " value={teste} ></input>
                <input type="text" placeholder="Seguidores: " ></input>
                <input type="text" placeholder="Localidade: " ></input>
                <input type="text" placeholder="Nome: " ></input>
            </div>
        </div>
      </div>

      <div className="profile-error-container">
        <h1>Erro ao buscar usuário</h1>
      </div>
    </>
  );
}
