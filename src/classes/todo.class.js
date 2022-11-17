

export class Tareas {

    static fromJson ( {id, tarea, completado, creado} ){

        const tempTodo = new Tareas(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;


    }


    constructor ( tarea ) {

        this.tarea = tarea;

        // id para la tarea
        this.id = new Date ().getTime(); // voy a tener numeros ejemplos 1231698165165 va servir como id
        this.completado = false;
        this.creado = new Date();



    }


}