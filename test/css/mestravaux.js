const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const style = document.getElementById('stylesheet');
    console.log(style.getAttribute('href'))

    var file = style.getAttribute('href')
    if(file == "css/mestravaux.css"){
        style.setAttribute('href', "css/mestravauxtheme2.css");
    } else{
        style.setAttribute('href' , "css/mestravaux.css");
    }

})