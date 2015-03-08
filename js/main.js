var rautePalette = ["#004D7B", "#C60D18", "#EF9A31", "#007160", "#ACACAC"];
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var gaugeConfs = {
    value: 0,
    subvalues: [0],

    scale: {
        startValue: 0,
        endValue: 100,
        majorTick: {
            visible: false
        },
        label: {
            visible: false
        }
    },
    rangeContainer: {
        width: 40,
        ranges: [
            { startValue: 0, endValue: 33, color: rautePalette[1] },
            { startValue: 33, endValue: 66, color: rautePalette[2] },
            { startValue: 66, endValue: 100, color: rautePalette[3] }
        ]
    },
    valueIndicator: {
        type: 'triangleNeedle',
        width: 12
    },
    size:{height: 400},
    subvalueIndicator: {
        type: 'textcloud',
        palette: rautePalette,
        text: {
            format: 'fixedPoint',
            precision: 0
        }
    },
    
};


$(function () {

    $('.js-main-gauge').dxCircularGauge(gaugeConfs);
    window.MainGaugeInterval = setInterval(function () {
        var gauge = $('.js-main-gauge').dxCircularGauge('instance');
        var rand = randomIntFromInterval(20, 25);
        gauge.option('value', rand);
        gauge.option('subvalues', [rand]);
    }, 500);
});

$(document).on('click', '.js-update-main-gauge', function () {

    clearInterval(window.MainGaugeInterval);
    window.MainGaugeInterval = setInterval(function () {
        var gauge = $('.js-main-gauge').dxCircularGauge('instance');
        var rand  = randomIntFromInterval(70, 80);
        gauge.option('value', rand);
        gauge.option('subvalues', [rand])
    }, 500);
});