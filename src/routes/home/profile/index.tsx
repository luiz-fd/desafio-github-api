/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { useEffect, useState } from "react";
import { ProfileDTO } from "../../../models/profile";
import * as profileService from '../../../services/profile-service'

type FormData = {
  loginName: string;
};

export default function Profile() {
  const [userName, setUserName] = useState(String);
  const [formData, setFormData] = useState<FormData>({
    loginName: "",
  });

  const [profile, setProfile] = useState<ProfileDTO>()

  useEffect(() => {
    profileService.findByLogin("acenelio")
    .then(response => {
      setProfile(response.data);
      console.log(response.data);

    })
  },[]);

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
      {profile && 
      <div className="profile-result-container">
        <div className="profile-result-card">
          <img src={profile.avatar_url} alt="FOTO"></img>
          <div className="profile-info">
            <h4>Informações</h4>
            <input
              type="text"
              placeholder="Perfil: "
              name="Perfil: "
              value={profile.login}
            ></input>
            <input type="text" placeholder="Seguidores: " value={profile.followers}></input>
            <input type="text" placeholder="Localidade: " value={profile.location}></input>
            <input type="text" placeholder="Nome: " value={profile.name}></input>
          </div>
        </div>
      </div>}

      <div className="profile-error-container">
        <h1>Erro ao buscar usuário</h1>
      </div>
    </>
  );
}
