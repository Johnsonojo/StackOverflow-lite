// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//         this.classList.toggle("active");

//         /* Toggle between hiding and showing the active panel */
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }

let myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
    label.addEventListener('keydown', e => {
        // 32 === spacebar
        // 13 === enter
        if (e.which === 32 || e.which === 13) {
            e.preventDefault();
            label.click();
        };
    });
});

// let myLabelz = document.querySelectorAll('.lbl-toggle1');

// Array.from(myLabelz).forEach(labels => {
// labels.addEventListener('keydown', e => {
// 32 === spacebar
// 13 === enter
// if (e.which === 32 || e.which === 13) {
// e.preventDefault();
// labels.click();
// };
// });
// });


// lbl-toggle1
// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//     dropdown[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var dropdownContent = this.nextElementSibling;
//         if (dropdownContent.style.display === "block") {
//             dropdownContent.style.display = "none";
//         } else {
//             dropdownContent.style.display = "block";
//         }
//     });
// }