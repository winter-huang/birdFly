/**
 * Created by hyd on 2017/9/28.
 */
function Land(option) {
    this.ctx = option.ctx;
    this.landImg = option.landImg;
    this.cX = option.cX;
    this.cY = option.cY;

    this.speed = 2;
}
Land.prototype = {
    constructor: Land,
    drawLand: function () {
        this.cX -= this.speed;
        if (this.cX <= -this.landImg.width) {
            this.cX += 4 * this.landImg.width;
        }
        this.ctx.drawImage(this.landImg, this.cX, this.cY);
    }
};