<template>
	<div class="todo-container">        

    	<div class="add-task">
			<!-- Input and button cannot be inside of the <form> because the app reloads and list becomes empty immediately after a task is added             -->
            <input class="add-task__input" type="text" placeholder="Add task" v-model="addedTask" @keyup.enter="addTask()">
			<!-- Added keyup.enter so that pressing Enter would do the same as the + button -->
            <button class="add-task__button" @click="addTask()">+</button>             
        </div>

        <h3 class="header-to-do">To do:</h3>

        <ul class="list-of-tasks">
            <!-- Used props to separate list of tasks -->
            <TodoItem @move-to-done="moveToDone(index)" @remove-task="removeTask(index)" v-for="(task, index) in tasks"  :task="task" />
        </ul>

        <h3 class="header-done">Done:</h3>

        <ul class="list-of-done">
            <!-- Used props to separate list of done tasks -->
            <DoneItem @remove-from-done="removeFromDone(index)" v-for="(doneTask, index) in doneTasks" :doneTask="doneTask" />
        </ul>

    </div>
</template>
 
<script>
    import DoneIcon from './DoneIcon.vue'
    import DeleteIcon from './DeleteIcon.vue'
    import TodoItem from './TodoItem.vue'
    import DoneItem from './DoneItem.vue'
	
	export default {
        components: {
            DoneIcon,
            DeleteIcon,
            TodoItem,
            DoneItem
        },
		data() {
			return {
				addedTask: '',
				tasks: [],
				doneTasks: [],
			}
		},
	
		methods: {
			addTask() {
                if (this.addedTask != '') {
                    this.tasks.unshift(this.addedTask),
				    this.addedTask = '';
                }				
			},
			// In addTask function I used unshift() instead of push() so that the newly added task would appear on top of the list

			moveToDone(index) {
				this.doneTasks.unshift(this.tasks[index])
				this.tasks.splice(index, 1);
			},

			removeTask(index) {
				this.tasks.splice(index, 1)
			},

			removeFromDone(index) {
				this.doneTasks.splice(index, 1)
			},
		}
	}	
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet');

	.todo-container {
        position: relative;
        width: 50vw;
        margin: auto;
        background-color: #D2D1D1;
        border-radius: 5px;
        padding-top: 1px;
		padding-bottom: 5px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
    }

   .add-task {
       position: relative;
       width: 98%;
       padding-left: 20px;
       padding-top: 5px;
       padding-bottom: 7px;
       margin-top: 5px;
       margin-left: auto;
       margin-right: auto;
       border-radius: 5px;
       background-color: #000000;
	   display: flex;
       flex-flow: row nowrap;
       justify-content: space-between;
       align-items: center;
   }

   .add-task__input {
       width: 80%; 
       height: 30px;
       border: none;
       border-radius: 5px;
       padding-left: 5px;
       background-color: white;
       font-family: 'Quicksand', sans-serif;
   }

   .add-task__input:focus {
       outline: none;
   }

   .add-task__button {
       width: 35px;
       margin-right: 25px;
       background-color: #000000;
       border: none;
       border-radius: 2px;
       cursor: pointer;   
       font-size: 1.5em; 
       color: white;    
   }

   .add-task__button:hover {
       background-color: white;
       color: black;
   }

   .header-to-do, .header-done {
       text-align: center;
       margin-top: 0.5em;
       font-size: 1.2em;
       font-weight: bold;
   }
</style>
