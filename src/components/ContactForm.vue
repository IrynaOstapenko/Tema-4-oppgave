<template>
	<RouterLink v-for="page in pagesFromStore" :to="{ name: 'page', params: { page_id: page.id } }">{{ page.title }}</RouterLink>

	<div class="contact-form">
		<input class="contact-form__input" type="name" placeholder="Name" v-model="form.name" />

		<input class="contact-form__input" type="email" placeholder="E-mail" v-model="form.email" />

		<input class="contact-form__input" type="text" placeholder="Phonenumber" v-model="form.phonenumber">

		<input class="contact-form__input" type="textarea" placeholder="..." v-model="form.message" />

		<div class="contact-form__button" @click="submit_form">SUBMIT</div>
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
				alert(`Thank you for contacting us, ${this.form.name}!`);
			},
		},
	};
</script>

<style>
    .contact-form {
		display: flex;
		align-items: center;
		flex-flow: column nowrap;
		margin: 5px;
	}

	.contact-form__input + .contact-form__input {
		margin-top: 0.5em;
	}

	.contact-form__input {
		border: 1px solid black;
		padding: 1em;
		width: 50vw;
	}

	.contact-form__button {
		display: flex;
		justify-content: center;
		background: black;
		color: white;
		text-align: center;
		margin: 5px auto 10px auto;
		padding: 1em;
		border-radius: 50px;
		font-family: 'Quicksand', sans-serif;
		font-size: 1em;
		transition-duration: 0.8s;
	}

	.contact-form__button:hover {
		letter-spacing: 3px;
	}
</style>
