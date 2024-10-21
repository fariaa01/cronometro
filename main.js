function getTimeSecond(segundos) {
    const data = new Date (segundos * 1000)
    return data.toLocaleTimeString ('pt-br', {

    hour12: false,
    timeZone: 'UTC'
    });
}
    const cronometro = document.querySelector ('.cronometro');
    const iniciar = document.querySelector  ('.iniciar');
    const pausar = document.querySelector ('.pausar');
    const reiniciar = document.querySelector ('.reiniciar');
    let segundos = 0;
    let timer;

    function iniciaCronometro () {
        timer = setInterval(function() {
        segundos++;
        cronometro.innerHTML = getTimeSecond(segundos);
        }, 1000);
    }

    iniciar.addEventListener('click', function(event) {
        clearInterval(timer)
        iniciaCronometro ();
    });

    pausar.addEventListener('click', function(event) {
        clearInterval(timer);
    });

    reiniciar.addEventListener('click', function(event) {
        clearInterval(timer);
        cronometro.innerHTML = '00:00:00';
        segundos = 0;
    });

