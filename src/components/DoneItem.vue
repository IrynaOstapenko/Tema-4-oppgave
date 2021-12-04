<template>
	<div class="done-item">
		<div class="done-item__task">{{ doneTask }}</div>
        <button class="done-item__delete-button" @click="emitRemoveFromDone">
            <DeleteIcon />
        </button>
	</div>
</template>

<script>
    import DeleteIcon from './DeleteIcon.vue'

	export default {
		components: {
            DeleteIcon
		},
		props: {
			doneTask: { type: String }
		},

		methods: {
			emitRemoveFromDone() {
				this.$emit('remove-from-done', this.doneTask)
			}   
		}
	}
</script>

<style>
    .done-item {
	   width: 98%;
       margin-left: auto;
       margin-right: auto;
       border-radius: 5px;
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-between;
	   padding-left: 0.5em;
	   padding-right: 0.5em;
       align-items: center;
       align-content: center;  
       background-color: #ffff;
	   text-decoration: line-through;
   }

   .done-item__task {
      width: 77%;
       height: 30px;
       margin-left: 10px;
       padding-top: 5px;
       background-color: #ffff; 
       border-radius: 5px; 
   }

   .done-item__delete-button {
       height: 15px;
       width: 15px;
       margin-right: 7px;
       border: none;
       background-color: white;
   }

</style>