<template>
    <div class="container">

        <div class="container__add-task">
            <form action="">
                <input type="text" placeholder="Add task">
                <button class="container__add-task__button">+</button>
            </form> 
        </div>

        <h3 class="container__header-to-do">To do:</h3>

        <div class="container__list-of-tasks">
                <div class="container__list-of-tasks__task">
                    <div class="container__list-of-tasks__task__item">Go shopping</div>
                    <button class="container__list-of-tasks__task__done-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.77 5.03001L21.17 6.43001L8.43 19.17L2.83 13.57L4.23 12.17L8.43 16.37L19.77 5.03001ZM19.77 2.20001L8.43 13.54L4.23 9.34001L0 13.57L8.43 22L24 6.43001L19.77 2.20001Z" fill="#1A9117"/>
                        </svg>
                    </button>
                    <button class="container__list-of-tasks__task__delete-button">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_44_2)">
                        <path d="M13.4385 0.608564L8.50001 5.54733C6.85393 3.90178 5.20732 2.25464 3.56098 0.608564C1.65644 -1.29597 -1.29571 1.65725 0.607226 3.56231C2.25384 5.20733 3.90098 6.85474 5.54573 8.50081C3.90022 10.1476 2.25406 11.7938 0.607226 13.4393C-1.29571 15.3433 1.65671 18.2957 3.56098 16.3931C5.20705 14.7465 6.85366 13.0996 8.49974 11.454L13.4382 16.3931C15.3428 18.2971 18.2957 15.3436 16.392 13.4393C14.7454 11.7927 13.0993 10.1466 11.4522 8.50028C13.099 6.85367 14.7451 5.20706 16.392 3.56072C18.296 1.65725 15.343 -1.29597 13.4382 0.609626" fill="#EC1C24"/></g><defs>
                        <clipPath id="clip0_44_2"><rect width="17" height="17" fill="white"/></clipPath></defs></svg>   
                    </button>
                </div>
        </div>

        <h3 class="container__header-done">Done:</h3>

        <div class="container__list-of-done">
                <div class="container__list-of-done__task">
                    <div class="container__list-of-done__task__item"></div>
                    <button class="container__list-of-done__task__delete-button">delete</button>
                </div>
        </div>

    </div>
</template>

<script>

export default {

}
</script>

<style>
    .container {
        position: relative;
        width: 600px;
        margin: 1em auto auto auto;
        background-color: #f5cdf5;
        border-radius: 5px;
        padding-top: 1px;
    }

   .container__add-task {
       position: relative;
       width: 98%;
       padding-left: 20px;
       padding-top: 5px;
       padding-bottom: 7px;
       margin-top: 5px;
       margin-left: auto;
       margin-right: auto;
       border-radius: 5px;
       background-color: #f76ff7;
   }

   .container__add-task form {
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-between;
       align-items: center;
   }

   .container__add-task input {
       width: 80%; 
       height: 30px;
       border: none;
       border-radius: 5px;
       padding-left: 5px;
       background-color: white;
   }

   .container__add-task input:focus {
       outline: none;
   }

   .container__add-task__button {
       width: 35px;
       margin-right: 25px;
       background-color: #f76ff7;
       border: none;
       border-radius: 2px;
       cursor: pointer;   
       font-size: 1.5em; 
       color: white;    
   }

   .container__add-task__button:hover {
       background-color: white;
       color: black;
   }

   .container__header-to-do, .container__header-done {
       text-align: center;
       margin-top: 0.5em;
   }

   .container__list-of-tasks__task {
       width: 98%;
       margin-left: auto;
       margin-right: auto;
       border-radius: 5px;
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-around;
       align-items: center;
       align-content: center;
       
       
       background-color: #f7ecf7; 
   }

   .container__list-of-tasks__task__item {
       width: 77%;
       height: 30px;
       margin-left: 10px;
       padding-top: 5px;
       background-color: #f7ecf7; 
       border-radius: 5px;
   }

   .container__list-of-tasks__task__done-button, 
   .container__list-of-tasks__task__delete-button {
       height: 28px;
       padding: 2px;
       background-color: #f7ecf7;
       border: 1px solid black;
       border-radius: 2px;
       cursor: pointer;
   }

   .container__list-of-tasks__task__done-button:hover,
   .container__list-of-tasks__task__delete-button:hover {
       background-color: white;
   }

</style>
