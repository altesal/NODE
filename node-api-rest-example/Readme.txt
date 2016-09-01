

- https://github.com/mjpl2012/NODE 
-https://carlosazaustre.es/blog/como-crear-una-api-rest-usando-node-js/
https://www.youtube.com/user/azaman1984  (canal youtube)

- Ejecutar en línea de comandos node app.js
- En un navegador: http://localhost:3000




-En línea de comandos, ejecutar mongod
-En otra terminal, ejecutar mongo

La bbdd se llama tvshows

Probando nuestro API REST en el navegador
==========================================
Para probar operaciones CRUD, usamos la extensión de Chrome restconsole.com 

Ejemplo de insertar una peli:
Reques URI:  http://localhost:3000/api/tvshows
Request Method: POST
Accept-Content-Type: application/json
Content Headers-Content-Type: application/json
Request Payload (ejemplo de petición):
{
  "title": "Gone with the wind",
  "year": 1939,
  "country": "USA",
  "poster": "http://ia.media-imdb.com/images/M/MV5BMjA3NzMyMzU1MV5BMl5BanBnXkFtZTcwNjc1ODUwMg@@._V1_SY317_CR17,0,214,317_.jpg",
  "seasons": 6,
  "genre": "Sci-Fi",
  "summary": "This classic film narrates the love between Scarlett O'Hara and Rhett Butler during the American civil war. It's the history of a selfish woman who doesn't want to admit her feelings about the man she loves, and finally loses him."
}
