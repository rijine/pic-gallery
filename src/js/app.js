let images = ['lorempixel.jpg', 'lorempixel-1.jpg'];


let GalleryComponent = function(images, target) {
    this.container = target ? document.getElementById(target) : document.getElementsByTagName('body')[0];
    this.images = images;
    this.currentImageIndex = 0;
    this.imgTagRef = null;
    this.counterRef = null;

    //defaults
    const path = 'images/';

    this.init = function(){
        let self = this;
        self.createView();
        self.setImage();
        self.updateCounter();

    }

    this.createButtonsView = function(){
        let self = this;
        let buttonContainer = document.createElement('div');
        let nextBtn = document.createElement('button');
        let prevBtn = document.createElement('button');
        nextBtn.className = 'btn';
        nextBtn.innerHTML = 'Next >>';
        prevBtn.className = 'btn';
        prevBtn.innerHTML = '<< Previous';

        //Events
        nextBtn.addEventListener("click", function(){
            self.nextImage();
            self.setImage();
        }, false);
        prevBtn.addEventListener("click", function(){
            self.prevImage();
            self.setImage();
        });
        buttonContainer.appendChild(prevBtn);
        buttonContainer.appendChild(nextBtn);
        return buttonContainer;
    }

    this.createImageView = function() {
        let self = this;
        let imageContainer = document.createElement('div');
        self.imgTagRef = document.createElement('img');
        self.imgTagRef.className = 'image-container'; 
        //imageContainer.className = 'image-container'; 
        imageContainer.appendChild(self.imgTagRef);

        return imageContainer;
    }

    this.createCounterView = function(){
        let self = this;
        let counterContainer = document.createElement('div');
        self.counterRef = document.createElement('span');
        self.counterRef.className = 'counter';

        counterContainer.appendChild(self.counterRef);
        return counterContainer;
    }

    this.updateCounter = function() {
        let self = this;
        self.counterRef.innerHTML =  (self.currentImageIndex + 1) + ' / ' + self.images.length ;
    }

    this.createView = function(){
        let self = this;
        let galleryContainer = document.createElement('div');
        galleryContainer.className = 'container';
        galleryContainer.appendChild( self.createImageView() );
        galleryContainer.appendChild( self.createCounterView() );
        galleryContainer.appendChild( self.createButtonsView() );

        self.container.appendChild(galleryContainer);
    }

    // this.getImages = function(){
    // };

    this.setImage = function() {
        let self = this;
        self.imgTagRef.src = path + self.images[self.currentImageIndex];
        self.updateCounter();
    };

    this.nextImage = function(){
        let self = this;
        console.log('next');
        if( (self.images.length - 1) > self.currentImageIndex){
            self.currentImageIndex++;
        }else{
            self.currentImageIndex = 0;
        }
    }

    this.prevImage = function(){
        let self = this;
        console.log('prev');
        if(self.currentImageIndex > 0 ){
            self.currentImageIndex--;
        }else{
            self.currentImageIndex = self.images.length - 1; 
        }
    }

}

let gallery = new GalleryComponent(images);
gallery.init();