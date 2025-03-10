document.addEventListener("DOMContentLoaded", async function () {
    let data = [];
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (res.ok) {
      data = await res.json();
    }
    console.log(data);

  });
  
