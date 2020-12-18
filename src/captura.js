let nome = document.getElementById('input-name')
let email = document.getElementById('input-email')
let button = document.getElementById('input-button')

nome.onfocus = () => {
    nome.style.borderColor =  '#83FD04';
}

nome.onblur = () => {
    nome.style.borderColor =  '#191C1E';
}


email.onfocus = () => {
    email.style.borderColor =  '#83FD04';
}

email.onblur = () => {
    email.style.borderColor =  '#191C1E';
}


button.onclick = () => {
    let name = nome.value;
    let email = email.value;
    fetch('https://cantosdeelite.herokuapp.com/api/pessoa/')
      .then((response)=> {
        alert(response);
    })
}