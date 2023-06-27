// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLdaxeo5X98dyMslfFoTl2yZ_ezxXZa28",
  authDomain: "chat-app-security-project.firebaseapp.com",
  projectId: "chat-app-security-project",
  storageBucket: "chat-app-security-project.appspot.com",
  messagingSenderId: "386228277363",
  appId: "1:386228277363:web:ed6a4be33dce8bf16d5a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const photoInput = document.getElementById("photo-url");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const chatApp = document.getElementById("chatApp");
  
function sanitizeInput(input) {
  
  return input
      .replace(/</g, ".")
      .replace(/>/g, ".")
      .replace(/['"]/g, "-");
}
const imgSanitize = () =>{
  let url = sanitizeInput(photoInput.value);
  const index = url.indexOf("?");
  if (index !== -1) {
    url = url.substring(0, index);
  }
  return url;
}
const submitCheep = () =>{    
    
    alert   ("Primeira parte");
    let title = sanitizeInput(titleInput.value);
    let img = imgSanitize()
    let desc = sanitizeInput(descInput.value);

    let DOM = `
    <div class="container-msg d-flex justify-content-center align-items-center flex-column w-100 p-2 mt-2">
        <div class="h3 mb-3">${title}</div>
        <img class="img-chat" class="mb-2" src="${img}">
        <p class="p-2">${desc}</p>
    </div>
    `;
    chatApp.innerHTML += DOM;
    console.log("Rodou");
    loadInMyDatabase();
}


const submitButton = document.getElementById("submit-btn").addEventListener('click', submitCheep);  

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.DATABASE,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_DB,
});

const loadInMyDatabase = async () =>{
  alert("Salvadondo no Banco de Dados...");
  let title = sanitizeInput(titleInput.value);
  let img = imgSanitize()
  let desc = sanitizeInput(descInput.value);

  const query = 'INSERT INTO chatapp (title, img, description ) VALUES ($1, $2, $3)';
  const values = [title, img, desc];

  try {
    await pool.query(query, values);
    console.log('Dados inseridos com sucesso!');
    alert("Erro: "+e);
  } catch (e) {
    console.error('Erro ao inserir dados: '+e);
    alert("Insert feito com sucesso!");
  }
}


/*
CREATE TABLE chatapp (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  img VARCHAR(255),
  description VARCHAR(255)
);*/