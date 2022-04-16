class Triangle {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    findeTheDistance(){
        let katet1;
        if ((this.x1 > 0 & this.x2 < 0) || (this.x2 > 0 & this.x1 < 0)) {
            katet1 = Math.abs(this.x1) + Math.abs(this.x2);
        } else {
            if (this.x1 > this.x2)
                katet1 = this.x1 - this.x2;
            else 
                katet1 = this.x2 - this.x1;
        }
        console.log(katet1);

        let katet2;
        if ((this.y1 > 0 & this.y2 < 0) || (this.y2 > 0 & this.y1 < 0)) {
            katet2 = Math.abs(this.y1) + Math.abs(this.y2);
        } else {
            if (this.y1 > this.y2)
                katet2 = this.y1 - this.y2;
            else 
                katet2 = this.y2 - this.y1;
        }
        console.log(katet2);

        console.log(Math.sqrt(Math.pow(katet1, 2) + Math.pow(katet2, 2)).toFixed(2));
    }
}

let triangle_1 = new Triangle(-2, -7, -7, 1);
triangle_1.findeTheDistance();