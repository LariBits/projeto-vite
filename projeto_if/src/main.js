import './style.css'

  fetch('https://run.mocky.io/v3/9a55f81d-d4e5-48ad-9c09-d037a7ba0b0c')
      .then(response => response.json())
      .then(data => {
        console.log(data.numeros);

        let index = 0; 
        const interval = setInterval(() => {
          if (index < data.numeros.length) {
          document.body.innerHTML = `<p class="numero">${data.numeros[index].id}</p>`;
            index++;
            
          } else {
            clearInterval(interval);
            location.reload();
          }
        }, 1000);
      });