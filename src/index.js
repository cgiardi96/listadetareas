
// importar modulo
import './styles.css';
// se importa el index.js para importar todos juntos
import { Tareas, TareasLista } from './classes';
import { crearTareaHtml } from './js/componentes';


export const tareasLista = new TareasLista();

console.log(tareasLista.todos);

// vamos a llamar a todos los que allá
tareasLista.todos.forEach (todo => crearTareaHtml(todo));



/*const tarea = new Tareas('Aprender JS');
tarea.completado = true;


tareasLista.nuevoTodo(tarea);*/
//console.log(tareasLista);

//crearTareaHtml(tarea);



// localstorage session storage para guardar

//localStorage.setItem('mi-llave', 'guardado');
/*
setTimeout( () => {
    localStorage.removeItem('mi-llave');

},1500);*/