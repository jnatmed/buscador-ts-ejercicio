import './style.css';
import productos from './productos/productos.ts';
import producto from './productos/productos.interfaces.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Formulario de búsqueda</h1>
<form>
  <label for="search-input">Buscar:</label>
  <input type="text" id="buscar-input">
  <button type="submit" id="buscar-btn">Buscar</button>
</form>
`;

const btnBuscar = document.querySelector<HTMLInputElement>('#buscar-btn')!;
const resultado = document.querySelector<HTMLDivElement>('#resultado')!;
btnBuscar.addEventListener('click', (e) => {
	const nombre_producto : any = document.querySelector<HTMLInputElement>('#buscar-input')?.value!;
	e.preventDefault();

	//TODO: llamar a la funcion de buscarPorNombre(inpurtValue) con el valor que el usuario ingresio
	// e imprimir en consola el resultado
	let p : producto = productos(nombre_producto);
	resultado.innerHTML = `id : ${p.id}, name : ${p.nombre}, producto : ${p.precio}`;	
});
