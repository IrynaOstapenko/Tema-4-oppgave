/* Used tutorial as inspiration https://www.youtube.com/watch?v=6-JEiEfkluc */

<template>
    <div class="slideshow-header">
        <div class="slideshow-header__text">Merry Christmas!</div>
    </div>
    <div class="slideshow">
        <div class="slideshow-slide" v-for="(slide, index) in slides" 
		    :key="slide" 
		    :index="index"
		    :visibleSlide="visibleSlide"
            v-show="visibleSlide === index"
	>
		    <img :src="slide" />

            <button @click="next" class="next">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 22.8571V17.1429H30L20 5.71428L22.5 -9.53674e-07L40 20L22.5 40L20 34.2857L30 22.8571H0Z" fill="black"/></svg>    
            </button>
            <button @click="prev" class="prev">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 17.1429V22.8571H10L20 34.2857L17.5 40L0 20L17.5 0L20 5.71429L10 17.1429H40Z" fill="black"/></svg>  
            </button>
	    </div>    
    </div>
	
</template>

<script>
	export default {
		data() {
			return {
                slides: [
                    '../assets/christmas_candies.jpg',
                    '../assets/christmas_cocoa.jpg',
                    '../assets/christmas_tree.jpg',
                    '../assets/dogs_christmas.jpg',
                    '../assets/stockings.jpg',
                    '../assets/winter_street.jpg'
                ],
                visibleSlide: 0,
			}
		},
        computed: {
			slideLength() {
				return this.slides.length;
			}
        },
        methods: {
			next() {
				if(this.visibleSlide === this.slideLength - 1) {
					this.visibleSlide = 0;
                    console.log('clicked');
				} else {
					this.visibleSlide++;
                    console.log('clicked');
				}
			},
			prev() {
				if(this.visibleSlide === 0) {
					this.visibleSlide = this.slideLength - 1;
                    console.log('clicked');
				} else {
					this.visibleSlide--;
                    console.log('clicked');
				}
			}
		},
	}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

    .slideshow-header {
        position: relative;
        margin: 2px auto 10px auto;
        width: 500px;
        height: 50px;
        border-radius: 15px;
        background-color: #E5E5E5; 
    }
    .slideshow-header__text {
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 10px;
        font-size: 2em;
        font-family: 'Great Vibes', cursive;
        font-weight: 500;
        color: #E80808;
    }
	.slideshow-slide {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: 500px;
        height: 540px;
        overflow: hidden;
    }
    .slideshow-slide img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    button {
        position: absolute;
        height: 40px;
        width: 50px;
        top: calc(50% - 20px);
        background-color: #E5E5E5;
        border: none;
    }
    button:hover {
        cursor: pointer;
    }

    button svg {
        width: 25px;
        height: 25px;
    }
    .next {
        right: 0;
    }
    .prev {
        left: 0;
    }
</style>
