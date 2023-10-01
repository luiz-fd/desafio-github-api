/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { useEffect, useState } from "react";
import { ProfileDTO } from "../../../models/profile";
import * as profileService from "../../../services/profile-service";

type FormData = {
  loginName: string;
};

export default function Profile() {
  const [controlError, setControlError] = useState(String);
  const [userName, setUserName] = useState(String);
  const [formData, setFormData] = useState<FormData>({
    loginName: "",
  });

  const [profile, setProfile] = useState<ProfileDTO>();

  useEffect(() => {
    profileService
      .findByLogin(userName)
      .then((response) => {
        setProfile(response.data);
        setControlError("");
        console.log(response.data);
      })
      .catch(() => {
        setUserName("");
        setControlError("ERROR");
      });
  }, [userName]);

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
      {profile && !controlError && (
        <div className="profile-result-container">
          <div className="profile-result-card">
            <img src={profile.avatar_url} alt="FOTO"></img>
            <div className="profile-info">
              <h4>Informações</h4>
              <div className="profile-info-item">
                <h1>Perfil: </h1>
                <a href={profile.url} target="_blanck" >{profile.url}</a>
              </div>
              <div className="profile-info-item">
                <h1>Seguidores: </h1>
                <h2>{profile.followers}</h2>
              </div>
              <div className="profile-info-item">
                <h1>Localidade: </h1>
                <h2>{profile.location}</h2>
              </div>
              <div className="profile-info-item">
                <h1>Nome: </h1>
                <h2>{profile.name}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      {profile && controlError && (
        <div className="profile-error-container">
          <h1>Erro ao buscar usuário</h1>
        </div>
      )}
    </>
  );
}
