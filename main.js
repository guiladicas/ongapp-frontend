
const apiUrl = "https://ongapp-api-1.onrender.com/associados";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log("Dados da API:", data);
    const list = document.getElementById("associados-list");
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.nome;
      list.appendChild(li);
    });
  })
  .catch(error => console.error("Erro ao acessar a API:", error));
