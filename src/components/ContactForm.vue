<template>
	<div class="contact-form">
		<div class="cf-title" alt="Contact Form Title">
		CONTACT FORM
		</div>
		<input class="cf-input" type="name" placeholder="Name" v-model="form.name" />
		<input class="cf-input" type="email" placeholder="E-mail" v-model="form.email" />

		<input class="cf-input" type="textarea" placeholder="..." v-model="form.message" />

		<div class="cf-button" @click="submit_form">SUBMIT</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: null,
					email: null,
					message: null,
				},
			};
		},

		methods: {
			submit_form() {
				alert(`Thank you for contacting us, ${this.name}!`);
			},
		},
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

	.cf-title {
		text-align: center;
		margin-bottom: 5px;
		padding: 10px;
		width: 50vw;
        font-size: 1.5em;
        font-family: 'Quicksand', sans-serif;
		background: #000;
		border-radius: 50px;
        color: #fff;
	}
    .contact-form {
		display: flex;
		align-items: center;
		flex-flow: column nowrap;
		margin: 5px;
	}

	.cf-input + .cf-input {
		margin-top: 0.5em;
	}

	.cf-input {
		border: 1px solid black;
		padding: 1em;
		width: 50vw;
	}

	.cf-button {
		background: black;
		color: white;
		text-align: center;
		width: 10vw;
		margin: 5px auto 10px auto;
		padding: 1em;
		border-radius: 50px;
		font-family: 'Quicksand', sans-serif;
		transition-duration: 0.8s;
	}

	.cf-button:hover {
		letter-spacing: 3px;
	}
</style>
