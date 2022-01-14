new Vue({
    el: '#app',
    data: {
        images: [
            'img/colosseum.jpg',
            'img/glasses.jpg',
            'img/ireland.jpg',
            'img/tiger.jpg',
            'img/toure-eiffel.jpg',
            'img/snow.jpg'
        ],
        currentIndex: 0
    },
    methods: {
        prevPhoto: function(){
            
            this.currentIndex --;
            if(this.currentIndex < 0){
                this.currentIndex = this.images.length -1;
            }
        },
        nextPhoto: function(){
          
            this.currentIndex ++;
            if(this.currentIndex >= this.images.length){
                this.currentIndex = 0;
            }
        }
    }
});