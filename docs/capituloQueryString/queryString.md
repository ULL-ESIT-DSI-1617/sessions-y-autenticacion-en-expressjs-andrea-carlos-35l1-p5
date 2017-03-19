# Query String. (Cadena de consulta).

Las cadenas de consulta forman parte de la URL y contiene información que no corresponde con las rutas clasicas de la estructura, pudiendo contener por ejemplo, datos recogidos de un formulario html.

Un ejemplo de query string puede ser:
~~~
http://ejemplo.com/over/there?nombre=carlos&apellido=ojeda
~~~
El símbolo de interrogación simplemente funciona como separador, y a continuación se encuentra la cadena de consulta. El valor y el nombre de cada par va separado por el símbolo **'='**, y cada par va separado de los demás con el símbolo **'&'** o **';'**.
Puede ocurrir que existan campo del query string que no sean visibles para el usuario, que serán añadidos tras el envío.

Existen símbolos que no pueden ser incluidos en la url, y por tanto es necesario codificarlos. Por ejemplo el espacio se codifica como **'\+'** o **%20**. Los caracteres que no pueden ser usados son sustituidos por una referencia numérica (NCR), o codificados en hexadecimal.

#Tracking

Parte de la query string puede ser ignorada al realizar una petición. Esto nos permite atribuirle funciones similares a cookies, al poder añadir al usuario como query string de la URL.
Las principales diferencias entre usar cookies y el tracking con query string son:
* Un cookie no viene integrado en la URL y por tanto no se puede compartir, mientras que de esta manera, al compartir la URL se comparte la identificación.
* Al acceder desde distintos path, habran URL distintas, pero los cookies siempre deberían ser los mismos.
* Los cookies pueden ser deshabilitados, el tracking con query string no.
