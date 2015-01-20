var args = arguments[0] || {};
console.log('args', args);
var status, duration;

/**
 * All initialization code goes here
 * @return {[type]} [description]
 */
function init(params) {
    //init params
    console.log('front', $.frontImage.image);
    $.frontImage.image = params.frontImage;
    $.backImage.image = params.backImage;
    status = params.flipped || 0; //0->back, 1->front
    duration = params.duration || 500;

    if (status === 0) {
        cover($.frontImage, function() {});
    } else {
        cover($.backImage, function() {});
    }

}


/**
 * Animation for covering the card
 * @param  {Ti.View}   view view to be covered
 * @param  {Function} cb   callback
 */
function cover(view, cb) {
    var a = Ti.UI.createAnimation({
        transform: Ti.UI.create2DMatrix().scale(1, 0.005),
        duration: duration / 2
    });
    view.animate(a, cb);
}


/**
 * Animation for revealing the card
 * @param  {Ti.View}   view view to be revealed
 * @param  {Function} cb   callback
 */
function reveal(view, cb) {
    var a = Ti.UI.createAnimation({
        transform: Ti.UI.create2DMatrix().scale(1, 1),
        duration: duration / 2
    });
    view.animate(a, cb);
}





/**
 * Public property that indicated if the card is flipped
 */
Object.defineProperty($, 'isFlipped', {
    get: function() {
        return status === 1;
    }
});

/**
 * If the card is not flipped, it reveals
 * Otherwise, does nothing
 */
$.reveal = function() {
    if (status != 1) {
        status = 0;
        $.flip();
    }
}



/**
 * If the card is flipped, it covers
 * Otherwise, does nothing
 */
$.cover = function() {
    if (status != 0) {
        status = 1;
        $.flip();
    }
}


/**
 * Flips the card in the opposit state in which is now
 * (works as a toggle function)
 */
$.flip = function() {

    var front = status == 1 ? $.frontImage : $.backImage;
    var back = status == 1 ? $.backImage : $.frontImage;

    console.log('front', front.id);
    console.log('back', back.id);

    cover(front, function() {
        front.visible = false;
        back.visible = true;

        reveal(back, function() {
            status = (status + 1) % 2;
        });
    })

}

$.init = function(params) {
    init(params);
}



init(args);