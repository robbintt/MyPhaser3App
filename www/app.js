
var startEvent = "DOMContentLoaded";
if(window.cordova){
    startEvent = "deviceready";
}
document.addEventListener(startEvent,function() {
    
    var config = {
      type: Phaser.AUTO,
      width: 375,
      height: 812,
      scene: {
        preload: preload,
        create: create
        //update: update
      }
    };
    
    var game = new Phaser.Game(config);

    function preload () {
        this.load.image('logo', 'phaser.png');
    }

    // i got rid of the phaser2 dynamic sprite location etc.
    // i am sure i will eventually learn how to do that though
    function create () {
        var logo = this.add.sprite(100, 75, 'logo');
    }

});
