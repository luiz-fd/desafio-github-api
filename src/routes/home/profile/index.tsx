import "./styles.css";
import TestImg from "../../../assets/image1.png";
import { useState } from "react";

type FormData = {
  loginName: string;
};

export default function Profile() {
  const teste = "oi";
  const [userName, setUserName] = useState(String);
  const [formData, setFormData] = useState<FormData>({
    loginName: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setUserName(formData.loginName);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="profile-search-container">
          <h1>Encontre um perfil Github</h1>
          <input 
          name="loginName"
          value={formData.loginName}
          type="text"
          onChange={handleInputChange}
          ></input>
          <div>
            <button type="submit">Encontrar</button>
          </div>
        </div>
      </form>
      <h2>{userName }</h2>
      <div className="profile-result-container">
        <div className="profile-result-card">
          <img src={TestImg} alt="FOTO"></img>
          <div className="profile-info">
            <h4>Informações</h4>
            <input
              type="text"
              placeholder="Perfil: "
              name="Perfil: "
              value={teste}
            ></input>
            <input type="text" placeholder="Seguidores: "></input>
            <input type="text" placeholder="Localidade: "></input>
            <input type="text" placeholder="Nome: "></input>
          </div>
        </div>
      </div>

      <div className="profile-error-container">
        <h1>Erro ao buscar usuário</h1>
      </div>
    </>
  );
}
