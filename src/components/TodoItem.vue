<template>
	<div class="todo-item">
		<div class="todo-item__task">{{ task }}</div>
		<button class="todo-item__done-button" @click="emitDone">
			<DoneIcon />
		</button>
		<button class="todo-item__delete-button" @click="emitRemove">
			<DeleteIcon />
		</button>
	</div>
</template>

<script>
	import DoneIcon from './DoneIcon.vue'
    import DeleteIcon from './DeleteIcon.vue'

	export default {
		components: {
			DoneIcon,
            DeleteIcon
		},
		props: {
			task: { type: String }
		},

		methods: {
			emitDone() {
				this.$emit('move-to-done', this.task)
			},
			emitRemove() {
				this.$emit('remove-task', this.task)
			}   
		}
	}
</script>

<style>
   .todo-item {
       width: 98%;
       margin-left: auto;
       margin-right: auto;
	   margin-bottom: 10px;
       border-radius: 5px;
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-around;
       align-items: center;
       align-content: center;  
       background-color: #ffff; 
   }

   .todo-item__task {
       width: 77%;
       height: 30px;
       margin-left: 10px;
       padding-top: 5px;
       background-color: #ffff; 
       border-radius: 5px;
   }

   .todo-item__done-button {
       height: 20px;
       width: 20px;
       background-color: #ffff;
       border: none;
   }
 
   .todo-item__delete-button {
       height: 15px;
       width: 15px;
       background-color: #ffff;
       border: none;
       border-radius: 2px;
       cursor: pointer;
   }

   .todo-item__delete-button:hover {
       background-color: white;
   }	
   
</style>


