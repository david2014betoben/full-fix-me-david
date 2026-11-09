1. en el index.ts, el login se registra antes de express.json, por lo que no recibe el body procesado.

2. en el index.ts, cors permite el puerto 5137, pero el frontend utiliza 5173.

3. en auth.routes.ts: el login no utiliza el middlewere de validacion.

4. en validate-login.ts: Imprime el resultado de validacion, incluida la contraseña, en consola.

5. en el validate-book.ts, despues de responder 400 continua al controlador y puede guardar libros invalidos. Tampoco utiliza los datos normalizados por Zod.

6. en book.model.ts interpola la busqueda directamente en sql los apostrofes rompen la consulta y permiten inyeccion sql.

7. en el loan.routes.ts :id captura /me, por lo que mis prestamos intenta consultar un id invalido.

8. en axios.ts lee API_URL, lo correcto es VITE_API_URL.

9. axios.ts busca el token en una clave distinta a la utilizada por Zustand y no envía el JWT.

10. frontend/src/components/RutaProtegida.tsx: No renderiza Outlet; las pantallas protegidas anidadas quedan vacías.

11. frontend/src/App.tsx: /sin-acceso queda pública aunque todas las pantallas salvo login requieren sesión.

12. frontend/src/pages/PaginaCatalogo.tsx: El efecto no depende de page: cambia la URL pero no carga la página solicitada.

13. frontend/src/pages/PaginaDetalleLibro.tsx: El input entrega días como texto, pero Zod exige un número.
