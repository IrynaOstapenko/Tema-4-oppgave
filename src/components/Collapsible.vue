<template>

    <div class="collapsible">
        <button @click="toggleDetails" class="collapsible__summary">
				<div class="collapsible__title">{{ title }}</div>
		</button>	 
    </div>
    <slot v-if="!collapsed" />

</template>

<script>
    import CollapsibleTitle from './CollapsibleTitle.vue';

    export default {
       /*  props: {
			title: {
				type: String,
				default: 'To-Do List',
                id: 1
			},
            title: {
				type: String,
				default: 'Slideshow',
                id: 2
			}
		},
 */
		data() {
			return {
				collapsed: true
			};
		},

		methods: {
			toggleDetails() {
				this.collapsed = !this.collapsed
			}
		}
	};
</script>

<style>
    .collapsible {
        display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(0, 0, 0);
		width: 50vw;
		border-radius: 50px;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5em;
		margin: 5px;
		padding: 15px;
	}

	.collapsible__title {
		color: #fff;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5em;
	}

	.collapsible__summary {
		width: 100%;
		background: rgb(0, 0, 0);
		border-radius: 50px;
		border: none;
	}

	.collapsible__summary,
	.collapsible__component {
		padding: 0em;
	}
	
	.collapsible__component {
		padding-top: 0;
		background: rgb(202, 133, 133);
		width: 50vw;
	}

	.collapsible__arrow {
		width: 0.7em;
		height: 1px;
		padding-left: 15px;
		margin-right: 0.5em;
	}

	.collapsible__arrow--rotated {
		transform: rotate(90deg);
	}
</style>