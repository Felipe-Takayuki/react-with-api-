import { api } from "../../lib/api";
import "../app_bar/app_bar.css";

export function AppBar() {
  async function RegisterUser() {
        const data = {
          "name" : "Zé",
          "nickname": "zé",
          "email": "ze@email.com",
          "password": "12345678"
      }

        await api.post("/create", data).then(response => {
          console.log(response.data.token);
        }).catch(error => {
          console.log(error);
        })
   
  }

  async function GetProject() {
    await api.get("/project/search").then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
   
  }

  return (
    <div className="appBar">
      <a href="#" className="btn_bar">
        <p>Projetos</p>
      </a>
      <a href="#" 
        onClick={GetProject}
        className="btn_bar">
        <p>Sobre</p>
      </a>
      <a
        href="#"
        onClick={RegisterUser}
        className="btn_bar"
      >
        <p>Contato</p>
      </a>
    </div>
  );
}
