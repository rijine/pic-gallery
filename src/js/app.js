let images = ['lorempixel'];


let Gallery = function(images, target) {
    this.container = target ? document.getElementById(target) : document.getElementsByTagName('body')[0];
    this.images = images;

    this.init = function(){
        let self = this;
        //self.container.
        self.createButtons();
        


    }

    this.createButtons = function(){
        let self = this;
        let nextBtn = document.createElement('button');
        let prevBtn = document.createElement('button');

        //Events
        nextBtn.addEventListener("click", self.nextImage);
        prevBtn.addEventListener("click", self.prevImage);

        self.container.appendChild(prevBtn);
        self.container.appendChild(nextBtn);
        

    }

    this.getImages = function(){

    };

    this.getImage = function() {

    };

    this.nextImage = function(){
        console.log('next');
    }

    this.prevImage = function(){
        console.log('prev');
    }

}

let gallery = new Gallery(images);
gallery.init();