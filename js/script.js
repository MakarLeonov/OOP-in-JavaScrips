let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    let input_x1 = document.querySelector('#x1');
    let input_y1 = document.querySelector('#y1');
    let input_x2 = document.querySelector('#x2');
    let input_y2 = document.querySelector('#y2');

    let triangle_1 = new Triangle(input_x1, input_y1, input_x2, input_y2);
    triangle_1.findeTheDistance();
})

class Triangle {
    constructor(input_x1, input_y1, input_x2, input_y2) {
        this.x1 = input_x1.value;
        this.y1 = input_y1.value;
        this.x2 = input_x2.value;
        this.y2 = input_y2.value;
    }
    findeTheDistance(){

        console.log(this.x1);
        console.log(this.x2);
        let katet1;
        if ((this.x1 > 0 & this.x2 < 0) || (this.x2 > 0 & this.x1 < 0)) {
            katet1 = Math.abs(this.x1) + Math.abs(this.x2);
        } else {
            if (this.x1 > this.x2){
                katet1 = Math.abs(this.x1 - this.x2)
            } else {
                katet1 = Math.abs(this.x2 - this.x1);
            }
        }
        
        let katet2;
        if ((this.y1 > 0 & this.y2 < 0) || (this.y2 > 0 & this.y1 < 0)) {
            katet2 = Math.abs(this.y1) + Math.abs(this.y2);
        } else {
            if (this.y1 > this.y2)
                katet2 = Math.abs(this.y1 - this.y2);
            else 
                katet2 = Math.abs(this.y2 - this.y1);
        }

        // console.log(Math.sqrt(Math.pow(katet1, 2) + Math.pow(katet2, 2)).toFixed(2)); - для вывода в консоль

        document.querySelector('.result').innerText = Math.sqrt(Math.pow(katet1, 2) + Math.pow(katet2, 2)).toFixed(2);
    }
}