/**
 * Created by hyd on 2017/9/28.
 */
function Pipe(option) {
    this.ctx = option.ctx;
    this.topPipe = option.topPipe;
    this.bottomPipe = option.bottomPipe;
    this.cX = option.cX;

    this.topY = 0;
    this.bottomY = 0;
    this.space = 150;
    this.speed = 2;
    this.getY();

}
Pipe.prototype = {
    constructor: Pipe,
    drawPipe: function () {
        this.cX -= this.speed;
        if (this.cX < -this.topPipe.width * 3) {
            this.cX += 6 * this.topPipe.width * 3;
            this.getY();
        }
        this.ctx.drawImage(this.topPipe, this.cX, this.topY);
        this.ctx.rect(this.cX,this.topY,this.topPipe.width,this.topPipe.height);

        this.ctx.drawImage(this.bottomPipe, this.cX, this.bottomY);
        this.ctx.rect(this.cX,this.bottomY,this.bottomPipe.width,this.bottomPipe.height);
    },
    getY: function () {
        this.topY = -(Math.random() * 260 + 130);
        this.bottomY = this.topY + this.topPipe.height + this.space;
    }
};