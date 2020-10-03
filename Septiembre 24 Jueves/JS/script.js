window.onload = () => {
    let form = document.getElementsByTagName('form')[0];
  
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      let resultado = document.getElementById('resultado');
  
      let valor = document.getElementById('movie').value;
  
      fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then( res => res.json())
        .then( (pokemon) => {
                // Crear Element html
              let caja = document.createElement('div');
              caja.classList.add('panel');
              caja.innerText = 
  pokemon.name
  ;
              let close = document.createElement('p');
              close.innerText = 'x';
              close.style.cursor = 'pointer';
              caja.appendChild(close);
              resultado.appendChild(caja);
  
              close.addEventListener('click', () => {
                resultado.removeChild(caja);
              });
        })
  
    });
  
    // Open modal
    document.querySelectorAll('.modal-btn').forEach((modal) => {
      modal.addEventListener('click', function () {
        let id = 
  this.dataset.open
  ;
        let display = document.querySelector(id).style.display ;
        document.querySelector(id).style.display = display == 'block'? 'none': 'block';
      });
    });
    // Close modal
    document.querySelectorAll('.modal .modal-close').forEach((modal) => {
      modal.addEventListener('click',function() {
        this.parentElement.style.display = 'none';
      });
    });
  };