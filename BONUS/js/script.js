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
        currentIndex: 0,
        intervalId: "",
        flag: false
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
        },
        automaticChanger: function(){
            let time = this;
            time.flag = false;
            time.intervalId = setInterval(function(){
                time.currentIndex ++;
                if(time.currentIndex >= time.images.length){
                    time.currentIndex = 0;
                }
            },3000)
        },
        stopSlider: function(){

                clearInterval(this.intervalId);  
                this.flag = true;
        }
       
    },
    mounted(){
        this.automaticChanger()
    }

});