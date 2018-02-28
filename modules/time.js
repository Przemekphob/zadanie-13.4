function time(time)
{   
    var hrs = ~~(time / (60*60));
    var mins = ~~((time % (60*60)) / 60);
    var secs = time % 60;

    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs.toFixed(0);
    return ret;
}



exports.print = time;