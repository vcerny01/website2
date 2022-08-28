var docEl = document.documentElement;
var themeButton = document.getElementById("theme-toggle");
var temp = themeButton.className; 

if (localStorage.getItem("isDarkMode") == null)
{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        docEl.className = "dark"; //change after testing
        localStorage.setItem("isDarkMode", "1");
        themeButton.className = temp.replace("fa-sun", "fa-moon");
    }
    else {
        // localStorage.setItem("isDarkMode", "0"); changed until I fix the light color scheme
        // FOR NOW
        docEl.className = "dark"; //change after testing
        localStorage.setItem("isDarkMode", "1");
        themeButton.className = temp.replace("fa-sun", "fa-moon");
        // END
    }
}
else {
    val = localStorage.getItem("isDarkMode");
    if (val === "1")
    {
        changeTheme();
    }
}
function changeTheme() {
    var theme = docEl.classList[0];
    temp = themeButton.className; 
    docEl.classList = [];
    if (theme === "dark"){
        docEl.classList.add("light");
        themeButton.className = temp.replace("fa-moon", "fa-sun");
        localStorage.setItem("isDarkMode", "0");
    }
    else {
        docEl.classList.add("dark");
        themeButton.className = temp.replace("fa-sun", "fa-moon");
        localStorage.setItem("isDarkMode", "1");
    }
}