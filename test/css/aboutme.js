const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const style = document.getElementById('stylesheet');
    console.log(style.getAttribute('href'))

    var file = style.getAttribute('href')
    if(file == "css/aboutme.css"){
        style.setAttribute('href', "css/aboutmetheme2.css");
    } else{
        style.setAttribute('href' , "css/aboutme.css");
    }

})