class Rectangle{
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(){
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height, this.color);
    }
}

let rec = new Rectangle(10, 10, 200, 100, '#000000');

rec.render();