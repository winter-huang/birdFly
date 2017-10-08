/**
 * Created by hyd on 2017/9/28.
 */
function Bird(option) {
    this.ctx = option.ctx;
    this.birdImg = option.birdImg;
    this.cX = option.cX;
    this.cY = option.cY;

    this.bW = this.birdImg.width / 3;
    this.bH = this.birdImg.height;
    this.bX = 0;
    this.bY = 0;
    this.bIndex = 0;
    this.bSpeed = 0;
    this.maxSpeed = 0.5;
    this.maxAngle = 45;
    this.g = 0.0003;
}
Bird.prototype = {
    constructor: Bird,
    drawBird: function (offsetTime) {
        this.bX = this.bIndex * this.bW;
        var bMoveY = this.bSpeed * offsetTime + this.g * offsetTime * offsetTime / 2;
        this.bSpeed = this.bSpeed + this.g * offsetTime;
        this.cY += bMoveY;
        var currentAngle = this.bSpeed / this.maxSpeed * this.maxAngle;
        if (currentAngle > this.maxAngle) {
            currentAngle = this.maxAngle;
        }
        this.ctx.save();
        this.ctx.translate(this.cX + this.bW / 2, this.cY + this.bH / 2);
        this.ctx.rotate(currentAngle / 180 * Math.PI);
        this.ctx.drawImage(this.birdImg, this.bX, 0, this.bW, this.bH, -this.bW / 2, -this.bH / 2, this.bW, this.bH);
        this.ctx.restore();
        this.bIndex++;
        if (this.bIndex > 2) {
            this.bIndex = 0;
        }
    }
};