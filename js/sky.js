/**
 * Created by hyd on 2017/9/28.
 */
function Sky(option) {
    this.ctx = option.ctx;
    this.skyImg = option.skyImg;
    this.skyX = option.skyX;
    this.skyY = option.skyY;

    this.skySpeed = 2;

}
Sky.prototype = {
    constructor: Sky,
    drawSky: function () {
        this.skyX -= this.skySpeed;
        if (this.skyX <= -this.skyImg.width) {
            this.skyX += this.skyImg.width * 2;
        }
        this.ctx.drawImage(this.skyImg, this.skyX, this.skyY);
    }
};