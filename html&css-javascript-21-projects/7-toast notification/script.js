const box = document.querySelector(".notification");
const successBtn = document.querySelector("button");

const removeToast = (li) => {
  if (box.contains(li)) {
    li.classList.remove("active");
    setTimeout(() => (box.contains(li) ? box.removeChild(li) : ""), 50);
  }
};

const toastNotification = () => {
  let li = document.createElement("li");
  li.className = `toast`;

  //bu kısım her gelen bir toast li elemanına farklı id atanır o yüzden eklenmese de olur!
  const toastId = Date.now(); // Benzersiz bir kimlik oluştur
  li.setAttribute("id", `toast_${toastId}`); // ID atanıyor
  console.log("ID:", li.getAttribute("id")); // ID değeri kontrol ediliyor

  li.innerHTML = `
     <i class="fa-solid fa-circle-check icon"></i>
     <span>this is a succes notification</span>
     <i class="fa-solid fa-circle-xmark remove" onclick="removeToast(parentElement)"></i>
  `;
  li.classList.add("active");

  setTimeout(() => li.classList.remove("active"), 5000);
  setTimeout(() => (box.contains(li) ? box.removeChild(li) : ""), 5200);
  box.appendChild(li);
};

successBtn.addEventListener("click", toastNotification);

//Not => eğer ki [Uncaught TypeError: Cannot read properties of undefined (reading 'add')] hatası alırsan
//string bir değere class ataması yapmaya çalıştığın için hata almış olabilirsin unutma!
