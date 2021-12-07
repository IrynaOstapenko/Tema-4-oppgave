<template>
	<table>
		<thead>
			<tr>
				<td>Name</td>
				<td>Email</td>
				<td>Department</td>
			</tr>
		</thead>

		<tbody>
			<tr v-for="row in contentSortedByName">
				<td v-for="value in row">{{ value }}</td>
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
				content: JSON.parse(mockData)
			}
		},

		computed: {
			contentSortedByName() {
				return this.content.sort((a, b) => {
					if (a.name > b.name) {
						return 1;
					} else if (a.name < b.name) {
						return -1;
					} else {
						return 0;
					}
				})
			}
		}
	}
</script>

<style>
	table {
		width: 50vw;
		border: solid black 1px;
		margin: auto;
		padding: 15px;
		border-radius: 25px;
	}

	table thead {
		font-weight: 400;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5em;
	}

	table tr {
		font-family: 'Quicksand', sans-serif;
		font-size: 0.8em;
	}

	tr:nth-child(even) {background-color: #f1eaea;}

	table td {
		padding: 0.4em;
	}

</style>