let images = ['lorempixel'];


let Gallery = function(images, target) {
    this.container = target ? document.getElementById(target) : document.getElementsByTagName('body')[0];
    this.images = images;
    this.currentImageIndex = 0;

    this.init = function(){
        let self = this;
        //self.container.
        //self.createButtons();
        self.createView();

    }

    this.createButtonsView = function(){
        let self = this;
        let buttonContainer = document.createElement('div');
        let nextBtn = document.createElement('button');
        let prevBtn = document.createElement('button');
        nextBtn.className = 'btn';
        nextBtn.innerHTML = 'Next >';
        prevBtn.className = 'btn';
        prevBtn.innerHTML = '< Previous';

        //Events
        nextBtn.addEventListener("click", self.nextImage);
        prevBtn.addEventListener("click", self.prevImage);
        buttonContainer.appendChild(prevBtn);
        buttonContainer.appendChild(nextBtn);
        return buttonContainer;
    }

    this.createImageView = function() {
        let imageContainer = document.createElement('div');
        let imgTag = document.createElement('img');
        imgTag.className = 'image-container'; 
        imageContainer.appendChild(imgTag);

        return imageContainer;
    }

    this.createView = function(){
        let self = this;
        let galleryContainer = document.createElement('div');
        galleryContainer.className = 'container';
        galleryContainer.appendChild( self.createImageView() );
        galleryContainer.appendChild( self.createButtonsView() );

        self.container.appendChild(galleryContainer);
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