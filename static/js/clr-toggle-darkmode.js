function toggleThemeMode() {
    var lightModeCss = document.getElementById("light-mode-css");
    var darkModeCss = document.getElementById("dark-mode-css");
    var toggleIcon = document.getElementById("icon-theme-mode");

    if(lightModeCss.disabled) {
        darkModeCss.disabled = true;
        lightModeCss.disabled = false;
        toggleIcon.setAttribute("shape", "moon");
    } else {
        darkModeCss.disabled = false;
        lightModeCss.disabled = true;
        toggleIcon.setAttribute("shape", "sun");
    }
  }


// const darkIconClass = 'moon'
// const lightIconClass = 'sun'
// var darkCSS = $("#dark-mode-css");
// var darkToggleIcon = $("#icon-theme-mode");

// // Set theme with the given mode and toggle the theme icon button
// function setThemeMode(mode) {
//   if (mode === "dark") {
//     darkCSS.prop('disabled', false)
//     //$("#dark-toggle i").attr('class', lightIconClass)
//   } else if (mode === "light") {
//     darkCSS.prop('disabled', true)
//     //darkToggleIcon.attr('class', darkIconClass)
//   }
// }

// // Toggle dark mode when user click on the icon button
// $("#toggle1").click(function () {
//   if (darkToggleIcon.attr("shape") == darkIconClass) {
//     setThemeMode("dark")
//   } else if (darkToggleIcon.attr("shape") == lightIconClass) {
//     setThemeMode("light")
//   }
// });