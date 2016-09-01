var http = require("http");
var url = require("url");

<!--
Hacer que algún código sea un Módulo, significa que necesitamos exportar las partes de su funcionalidad que queremos proveer a otros scripts que requieran nuestro módulo.
Por ahora, la funcionalidad que nuestro servidor HTTP necesita exportar es simple: Permitir a los scripts que utilicen este módulo arrancar el servidor.
Para hacer esto posible, dotaremos al código de nuestro servidor de una función llamada inicio, y exportaremos esta función:
-->

<!-- Cuando iniciemos el servidor, le pasaremos una función ROUTE como parámetro -->
function iniciar(){
    <!--función callback onRequest()-->
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Petición para " + pathname + " recibida.");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola Mundo");
        response.end();
    }
          
    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;





<!-- MÓDULOS DE  Node.js
    - http
    - url        (provee métodos que nos permite extraer las diferentes partes de una URL (como por ejemplo la ruta requerida y el string de consulta)
    - querystring  (puede usarse para parsear el string de consulta para los parámetros requeridos:)
    

    
-->



