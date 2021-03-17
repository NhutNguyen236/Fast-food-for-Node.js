// My stupid module to return current date and time
module.exports.myDateTime = function() {
    return Date();
};

/*
// My another one but to return area and perimeter of a square
module.exports.squareArea = function(width){
    return width * width;
}

module.exports.squarePerimeter = function(width){
    return 4 * width;
}
*/

// This is module shortcut which will help you shorten the format of your module
module.exports.squarePlay = {
    area: function(width) {
        return width * width;
    },

    perimeter: function(width) {
        return 4 * width;
    }
};


