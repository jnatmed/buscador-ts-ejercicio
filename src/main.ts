import './style.css';
import productos from './productos/productos.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Formulario de búsqueda</h1>
<form>
  <label for="search-input">Buscar:</label>
  <input type="text" id="buscar-input">
  <button type="submit" id="buscar-btn">Buscar</button>
</form>
`;

function $(id: any) : any {
	return document.querySelector<HTMLDivElement>(id);
}

function $create(id : any) : any {
	return document.createElement(id);
}

const btnBuscar = $('#buscar-btn')!;
const msjerror = $('#msjerror')!;
const table = $('table');
btnBuscar.addEventListener('click', (e : Event) => {
	const nombre_producto : any = document.querySelector<HTMLInputElement>('#buscar-input')?.value!;
	e.preventDefault();

	//TODO: llamar a la funcion de buscarPorNombre(inpurtValue) con el valor que el usuario ingresio
	// e imprimir en consola el resultado
	let p : any = productos(nombre_producto);
	if (p){
		// resultado.innerHTML = `id : ${p.id}, name : ${p.nombre}, precio : ${p.precio}`;	
		let celdaId = $create('td');
		celdaId.innerHTML = p.id;
		let celdaNombre = $create('td');
		celdaNombre.innerHTML = p.nombre;
		let celdaPrecio = $create('td');
		celdaPrecio.innerHTML = p.precio; 
		let filaDatos = $create('tr');
		filaDatos.appendChild(celdaId);
		filaDatos.appendChild(celdaNombre);
		filaDatos.appendChild(celdaPrecio);
		const res : any = $create('tbody');
		res.appendChild(filaDatos);
		table.appendChild(res);
	}else{
		msjerror.className = 'caja rebote';
		msjerror.innerHTML = `el elemento ${nombre_producto}, no existe en la base de Datos`;
	}
});
