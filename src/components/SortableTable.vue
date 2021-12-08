<template>
	<table class="sortable">
		<thead class="sortable__thead">
			<tr class="sortable__tr">
				<td><button class="sortable__button" @click="sortBy('name')">Name</button></td>
				<td><button class="sortable__button" @click="sortBy('email')">Email</button></td>
				<td><button class="sortable__button" @click="sortBy('department')">Department</button></td>
			</tr>
		</thead>

		<tbody>
			<tr class="sortable__tr" v-for="row in alphabeticalSort">
				<td class="sortable__tr__td" v-for="value in row">{{ value }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	// random data from Mockaroo with some detail changes
	const mockData = `[	{"name":"Debora Robelet","email":"drobelet0@theme.com","department":"Sales"},
						{"name":"Bren Greenfield","email":"bgreenfield1@theme.com","department":"Legal"},
						{"name":"Irv Leupoldt","email":"ileupoldt2@theme.com","department":"Accounting"},
						{"name":"Patten Clipsham","email":"pclipsham3@theme.org","department":"Services"},
						{"name":"Lauraine Puve","email":"lpuve4@theme.com","department":"Product Managment"},
						{"name":"Ripley Cockayne","email":"rcockayne5@theme.edu","department":"CEO"}]`;

	export default {
		data() {
			return {
				sort: {
					key: 'name',
					order: 'asc',
				},
				content: JSON.parse(mockData)
			}
		},

		created() {
			const query = this.$route.query;

			if (query.sort) {
				this.sort.key = query.sort;
			}

			if (query.order) {
				this.sort.order = query.order;
			}
		},

		computed: {
			alphabeticalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === 'asc' ? 1 : -1;

				function compareFunction(a, b) {			
					if (a[key] > b[key]) {
						return 1;
					} else if (a[key] < b[key]) {
						return -1;
					} else {
						return 0
					}
				}

				return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
			},
		},
		methods: {
			sortBy(key) {
				this.sort.key = key;
				this.$router.push({ query: { ...this.$route.query, sort: this.sort.key } })
			}
		},
	}
</script>

<style>
	.sortable {
		width: 50vw;
		border: solid black 1px;
		margin: auto;
		padding: 15px;
		border-radius: 25px;
	}

	.sortable__thead {
		font-weight: 400;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5em;
	}

	.sortable__tr {
		font-family: 'Quicksand', sans-serif;
		font-size: 0.8em;
	}

	.sortable__button {
		width: 98%;
		height: 30px;
		margin: auto;
	}

	.sortable__tr:nth-child(even) {background-color: #f1eaea;}
	tr:nth-child(even) {background-color: rgb(238, 232, 229);}

	.sortable__tr__td {
		padding: 0.4em;
	}

</style>