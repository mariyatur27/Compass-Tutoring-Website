var buttons  = document.getElementsByClassName('grades_buttons');
var grade = document.getElementsByClassName('grade');

function click(button) {
    let text = button.innerHTML;
    for (var i = 0; i < grade.length; i++) {
        let grade_txt = grade[i].innerHTML
        if (text !== grade_txt) {
            grade_txt.style.display = 'none';
        }else{
            grade_txt.style.display = 'block';
        }
    }
}

for (var i = 0; i < buttons.length; i++) {
    var click = buttons[i].addEventListener('click', click(buttons[i]));
    // buttons[i].addEventListener('click', function() {
    //     var text = buttons[i].innerHTML;
    //     console.log(text);
    // })
}

