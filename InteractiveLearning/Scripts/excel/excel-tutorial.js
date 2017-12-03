
var step = 1; // initialize the step the user is on
var prevStep = step--;
var nextStep = step++;
var lastStep = 8;
goToStep(step);
$('#steps-count').text(1 + ' of ' + lastStep);

function goToStep(step) {
    switch (step) {
        case 1:
            intro();
            break;
        case 2:
            stepOne();
            break;
        case 3:
            stepTwo();
            break;
        case 4:
            stepThree();
            break;
        case 5:
            stepFour();
            break;
        case 6:
            stepFive();
            break;
        case 7:
            stepSix();
            break;
        case 8:
            showCongratulations();
            break;
    }
}

function intro() {
    $('#step-zero').show();
    $('#step-one').hide();
    $('#prevBtn').hide();
    fadeInImage('image1', 4000);
    fadeInImage('image2', 9000);
    fadeInImage('image3', 6000);
}

function stepOne() {
    $('#step-zero').hide();
    $('#step-two').hide();
    $('#step-one').removeClass('hidden');
    $('#step-one').show();
    $('#prevBtn').removeClass('hidden');
    $('#prevBtn').show();
    $('#prevBtn').removeClass('disabled');
}

function stepTwo() {
    $('#step-one').hide();
    $('#step-three').hide();
    $('#step-two').removeClass('hidden');
    $('#step-two').show();
}

function stepThree() {
    $('#step-two').hide();
    $('#step-four').hide();
    $('#step-three').removeClass('hidden');
    $('#step-three').show();
}

function stepFour() {
    $('#step-three').hide();
    $('#step-five').hide();
    $('#step-four').removeClass('hidden');
    $('#step-four').show();
}

function stepFive() {
    $('#step-four').hide();
    $('#step-six').hide();
    $('#step-five').removeClass('hidden');
    $('#step-five').show();
}

function stepSix() {
    $('#step-five').hide();
    $('#congrats').hide();
    $('#step-six').removeClass('hidden');
    $('#step-six').show();
}

function showCongratulations() {
    $('#step-six').hide();
    $('#step-eight').hide();
    $('#congrats').removeClass('hidden');
    $('#congrats').show();
    $('#nextBtn').hide();
    $('#next-text').hide();
}


$("#nextBtn").click(function () {
    $('#steps-count').text((step + 1) + ' of ' + lastStep);
    if (step != lastStep) {
        step += 1;
    }

    goToStep(step);
});
$("#prevBtn").click(function () {
    $('#steps-count').text((step-1) + ' of ' + lastStep);
    $('#nextBtn').show();
    $('#next-text').show();
    if (step > 1) { step -= 1; }
    
    if (step == 0 || step < 0) {
        $('#prevBtn').addClass('hidden');
        $('#prevBtn').addClass('disabled');
    }
    goToStep(step);
});

$("#interface-1").click(function () {
    $('#descr-title').text('1. Quick Access Toolbar');
    $('#descr-text').text('The Quick Access toolbar lets you access common commands no matter which tab you are on. By default, it shows the Save, Undo, and Repeat commands. You can add other commands to make it more convenient for you.');
});
$("#interface-2").click(function () {
    $('#descr-title').text('2. Name Box');
    $('#descr-text').text('The name box tells you the location or the name of a selected cell. For example, arrow 6 points at cell A8.');
});
$("#interface-3").click(function () {
    $('#descr-title').text('3. Formula Bar');
    $('#descr-text').text('In the formula bar, you can enter or edit data, a formula, or a function that will appear in a specific cell. ');
});
$("#interface-4").click(function () {
    $('#descr-title').text('4. Column');
    $('#descr-text').text('A column is a group of cells that runs from the top of the page to the bottom. In Excel, columns are identified by letters. Column L is selected here. ');
});
$("#interface-5").click(function () {
    $('#descr-title').text('5. Ribbon');
    $('#descr-text').text('The Ribbon contains all of the commands you will need in order to perform common tasks. It has multiple tabs, each with several groups of commands, and you can add your own tabs that contain your favorite commands. Some groups have an arrow in the bottom-right corner that you can click to see even more options.');
});
$("#interface-6").click(function () {
    $('#descr-title').text('6. Row');
    $('#descr-text').text('A row is a group of cells that runs from the left of the page to the right. In Excel, rows are identified by numbers. Row 8 is selected here.');
});
$("#interface-7").click(function () {
    $('#descr-title').text('7. Worksheets');
    $('#descr-text').text('Excel files are called workbooks. Each workbook holds one or more worksheets (also known as spreadsheets). Three worksheets appear by default when you open an Excel workbook. You can rename, add, and delete worksheets.');
});
$("#interface-8").click(function () {
    $('#descr-title').text('8. Horizontal Scroll Bar');
    $('#descr-text').text('You may have more data than you can see on the screen all at once. Click and hold the horizontal scroll bar and slide it to the left or right depending on which part of the page you want to see.');
});
$("#interface-9").click(function () {
    $('#descr-title').text('9. Page View');
    $('#descr-text').text('There are three ways to view a spreadsheet. Click a page view button to select it. Normal view is selected by default and shows you an unlimited number of cells and columns. It is highlighted in this image. Page Layout view divides your spreadsheet into pages. Page Break view lets you see an overview of your spreadsheet, which is helpful when you\'re adding page breaks.');
});
$("#interface-10").click(function () {
    $('#descr-title').text('10. Zoom Control');
    $('#descr-text').text('Click and drag the slider to use the zoom control. The number to the left of the slider bar reflects the zoom percentage.');
});


function fadeInImage(id, duration) {
    $('#' + id).fadeIn(duration);
}
function fadeOutImage(id, duration) {
    $('#' + id).fadeOut(duration);
}