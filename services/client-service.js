//?resive dos parametros: (metodo,url)
/* CRUD     -  Metodos
Create      POST
Read        GET
Update      PUT/PATCH
Delete      DELETE
*/

//!comunicarse con el servidor con una sola linea
/* const listaCliente = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json()); */

const listaCliente = () => {
 //!Método para conectarce con la api usando Fetch
 //?El método fetch regresa una promice, por eso se hace uso de then, y toma a GET por defecto

 return fetch("http://localhost:3000/perfil").then(respuesta => {
  return respuesta.json();
 });


 //!Método para conectarce con la api usando Promisse
 /*  const promice = new Promise((resolve, reject) => {
   const http = new XMLHttpRequest();
   console.log(http);
   http.open("GET", "http://localhost:3000/perfil");
   http.send();
   http.onload = () => {
    const response = JSON.parse(http.response);
    if (http.status>=400) {
     reject(response);
     console.log("error");
    }else{
     resolve(response);
     console.log("bien");
     
    };
   };
  });
  return promice; */
};

const crearCLiente = (nombre, email) => {
 return fetch("http://localhost:3000/perfil", {
  method: "POST",
  headers: {
   "Content-Type": "application/json"
  },
  //?se formatea el texto para poderlo enviar por http
  body: JSON.stringify({
   nombre,
   email,
   id: uuid.v4(),
  })
 });
};

const eliminarCliente = (id) => {
 return fetch(`http://localhost:3000/perfil/${id}`, {
  method: "DELETE"
 })
};
const detalleCliente = (id) => {
 return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
  respuesta.json()
 );
};

const actualizarCliente = (nombre, email, id) => {
 return fetch(`http://localhost:3000/perfil/${id}`, {
  method: "PUT",
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify({
   nombre,
   email
  })
 }).then((respuesta) => respuesta).catch((err) => console.log(err))
}

export const clientServices = {
 listaCliente,
 crearCLiente,
 eliminarCliente,
 detalleCliente,
 actualizarCliente,
};