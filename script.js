document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#btn').addEventListener('click', function () {
        let texto = document.querySelector('#texto').value;
        document.querySelector('#resultado').value = upper(texto);

    })
    function upper(texto) {
        return texto.toUpperCase();
    }
})