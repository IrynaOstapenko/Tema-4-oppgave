// Used tutorial as inspiration https://www.youtube.com/watch?v=6-JEiEfkluc

<template>
    <div class="slideshow">
        <div class="slideshow-slide" v-for="(slide, index) in slides" v-show="visibleSlide === index">
            <img :src="slide" />
            <button class="slideshow-slide__button next" @click="next">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 22.8571V17.1429H30L20 5.71428L22.5 -9.53674e-07L40 20L22.5 40L20 34.2857L30 22.8571H0Z" fill="black"/></svg>    
            </button>
            <button @click="prev" class="slideshow-slide__button prev">
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
	.slideshow-slide {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: 45vw;
        height: 65vh;
        overflow: hidden;
    }

    .slideshow-slide img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .slideshow-slide__button {
        height: 40px;
        width: 40px;
        top: calc(94% - 20px);
        position: absolute;
        background-color: #e5e5e585;
        border: none;
        border-radius: 50px;
    }

    .slideshow-slide__button:hover {
        cursor: pointer;
        background: #fff;
    }

    .slideshow-slide__button svg {
        width: 25px;
        height: 25px;
        opacity: 80%;
    }

    .next {
        right: 5;
    }

    .prev {
        left: 5;
    }
</style>
