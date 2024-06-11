const tableBody = document.querySelector(".table__body");

function deleteData(id) {
  fetch(`http://localhost:8080/data/${id}`, {
    method: "DELETE",
  });
}

fetch("http://localhost:8080/data")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      tableBody.innerHTML += `
      <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.status}</td>
          <td>${item.date}</td>
          <td><button class="btn">Delete</button></td>
      </tr>
        `;

      let btn = document.querySelector(".btn");
      btn.addEventListener("click", () => {
        if (window.confirm("Are your sure delete item?")) {
          deleteData(item.id);
        }
      });

      console.log(btn);
    });
  });
