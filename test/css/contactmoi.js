const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const style = document.getElementById('stylesheet');
    console.log(style.getAttribute('href'))

    var file = style.getAttribute('href')
    if(file == "css/contactmoi.css"){
        style.setAttribute('href', "css/contactmoitheme2.css");
    } else{
        style.setAttribute('href' , "css/contactmoi.css");
    }

})