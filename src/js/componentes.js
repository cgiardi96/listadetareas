

// Referencias html

import { Tareas, TareasLista } from "../classes";

import { tareasLista } from "../index";


// 
const divTodoList = document.querySelector('.todo-list');

const inputNuevaTarea = document.querySelector('.new-todo');
const limpiarCompletados = document.querySelector('.clear-completed');

const ulFiltros = document.querySelector('.filters');
const filtros = document.querySelectorAll('.filtro');

export const crearTareaHtml = ( tarea ) => {
    
    
    // si tarea.completado que esta en todo.class es verdadero lo pone class completed si no vacio
    const htmlTodo = `<li class="${(tarea.completado) ? 'completed' : ''}" data-id="${tarea.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(tarea.completado) ? 'checked' : ''}>
        <label>${tarea.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Rule the web">
</li>`;


    // creamos un div para poder asignarle todo
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    // No va insertar el div si no el primer hijo en este caso el <li> es decir evita el div
    divTodoList.append(div.firstElementChild);

    return div;



}

// Evento

inputNuevaTarea.addEventListener('keyup', ( event ) => {

    // keycode = 13
    if ( event.keyCode === 13 && inputNuevaTarea.value.length > 0){

        const nuevaTarea = new Tareas ( inputNuevaTarea.value );
        tareasLista.nuevoTodo(nuevaTarea);
        crearTareaHtml(nuevaTarea);
        inputNuevaTarea.value = "";

//    console.log(tareasLista);
}

});


divTodoList.addEventListener('click', (event) => {

    // es para ir al evento al target y al nombre ejemplo input label button etc
    const nombreElemento = event.target.localName;
    // con esto obtenemos del evento click el target y 2 elementos hacia arriba todo ese codigo sería el <li>......
    const tareaElemento = event.target.parentElement.parentElement;

    // obtenemos el id de data-id del html con getattribute
    const tareaId = tareaElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) {// hizo click en el check

        tareasLista.marcarCompletado(tareaId);
        tareaElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')){ //borramos el todo
        tareasLista.eliminarTodo(tareaId);
        // eliminamos del html con el divtodolist buscamos el elemento y eliminamos el hijo que seria el li con el tareaelemento
        divTodoList.removeChild(tareaElemento);
    }

    console.log(tareaId);
    console.log(tareasLista);
});

limpiarCompletados.addEventListener('click', (event) => { 

    

    tareasLista.eliminarCompletados();

    // con esto empezamos al final para ir barriendo
    for (let i = divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }


    }





});

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro) { return; }

        filtros.forEach(elem => elem.classList.remove('selected'));
        event.target.classList.add('selected');




    for (const elemento of divTodoList.children){
        //console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

//        console.log(filtro);

        switch ( filtro ){
            case 'Pendientes':
            if (completado){
                elemento.classList.add('hidden');
            }

            
            break; 
            
            case 'Completados':
            if (!completado){
                

                elemento.classList.add('hidden');
            }
            break; 
        }
    }







});