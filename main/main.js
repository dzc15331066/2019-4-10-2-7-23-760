module.exports = function main(inputs) {
    // write your code here...
    var d = inputs.distance;
    var df = 0;
    if(d <= 2){
        df = 6;
    }else if(d > 2 && d < 8){
        df = (d-2)*0.8 + 6;
    }else if(d >= 8){
        df = (d-8) * 1.2 + 10.8;
    }
    return Math.round(df + inputs.parkTime * 0.25);
};
