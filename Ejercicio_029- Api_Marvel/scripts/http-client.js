//Esta funcion callback pide como parametro un data string
/*function doGetHTTPRequest(url, port, resource, callbackFunction, callbackErrorFunction) {
    fetch(`${url}:${port}/${resource}`)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error(`Ha ocurrido un error ${response.status}`);
            }
        })
        .then(data => {
            callbackFunction(data)
        })
        .catch(error => {
            callbackErrorFunction(error);
        });
}*/

/*API MARVEL*/
/*codigo del script para obtener la informacion, primero creo unas constantes de la llave publica y privada que nos da la api*/
const privatekey = '0';
const publickey = 'dbd73178ca0246c3ab867696c9e6dd49';
//const hash = '14ec410d0283c66063126463cebe6e71';
const ts = Date.now();
const hash = md5(ts + privatekey + publickey);

/*creando el metodo que nos haga la conexión y nos traiga los elementos*/
    /*la url donde vamos hacer la peticion de los personajes de la api de marvel*/
    //https://gateway.marvel.com:443/v1/public/characters?name=deadpool&apikey=dbd73178ca0246c3ab867696c9e6dd49
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`;
    /*verificar la petición y que la promesa sea correcta*/
    console.log(url);
    function doGetHTTPRequest(url, port, resource, callbackFunction, callbackErrorFunction) {
        fetch(`${url}:${port}/${resource}`)
        /*json es un metodo del objeto response que me va a traer la data y la va a formatear en json */
            .then(response => {
                if (response.ok) {
                    //return response.text();
                    return response.json();
                }
                else {
                    throw new Error(`Ha ocurrido un error ${response.status}`);
                }
            })
            .then(response => {
                callbackFunction(response);
                response.data.results.forEach(e => {
                    crearFila(e);
                    
                })
            })
            .catch(error => {
                callbackErrorFunction(error);
            });
    };
