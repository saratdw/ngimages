import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
})

export class HomeComponent {
    value = '';
    items: string[] = [];
    activeColor: string = 'green';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';
    
    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    images: string [];
    imageSrc: string = '';
    constructor (private imageService: ImageService){}

    onStore(value: string) {
        this.imageService.addData(value);
    }
    onGet() {
        this.images = this.imageService.getData();
       // console.log(this.images);
    }
    
    handleDragEnter() {
        this.dragging = true;
    }
    
    handleDragLeave() {
        this.dragging = false;
    }
    
    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }
    
    handleImageLoad() {
        this.imageLoaded = true;
        this.overlayColor = this.overlayColor;
    }

    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
         this.onStore(this.imageSrc);
         this.onGet();
        this.loaded = true;
    }
    
    _setActive() {
        this.activeColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.activeColor = this.activeColor;
        }
    }
    
    _setInactive() {
        this.baseColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            this.baseColor = this.baseColor;
        }

}
   

}
