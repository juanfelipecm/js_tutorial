
function arrayemail (string) {
    let emailprocesado = string.toLowerCase();
    let array = Array.from(emailprocesado);
    let username = array.slice(0,(array.indexOf('@'))).join('');
    let dominio = array.slice((array.indexOf('@')+1),array.length).join('');
    return {
        usuario: username,
        dominio: dominio
    }
}