'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv(){
        let body = document.querySelector('body');
        let div = document.createElement('div');
        div.textContent = 'one element';
        body.appendChild(div);
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: #${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
    }
}

let div1 = new Options('200', '400', 'ff345f', '19', 'center');
div1.newDiv();