import { Tareas } from "./todo.class";




export class TareasLista{

    constructor() {

        this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){

        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo( id ){

        // esto va buscar los todo y verificar si el que recibe es diferente o no
        // va regresar un nuevo arreglo pero va sobrescribir y va sacar al todo que es igual
        this.todos = this.todos.filter ( todo => todo.id != id );

        this.guardarLocalStorage();



    }

    marcarCompletado( id ){

        for (const todo of this.todos){

            console.log(id, todo.id);

            if (todo.id == id){

                // que haga lo contrario
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
                
            }


        }


    }


    eliminarCompletados(){

        // todos los que no esten completados va regresar y se van a guardar eso
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

        

    }

    guardarLocalStorage(){

        localStorage.setItem('misTodos', JSON.stringify(this.todos));





    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('misTodos') ) 
                        ? this.todos = JSON.parse(localStorage.getItem('misTodos')) 
                        : this.todos = [];

                        // es para barrer los elementos del arreglo y retornar con los objetos mutados
        this.todos = this.todos.map( obj => Tareas.fromJson(obj) );


    }



}