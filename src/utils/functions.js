export function toggleMenu() {
  var element = document.getElementById("navbarMenuHeroA")

  if (element.classList) {
    element.classList.toggle("is-active")
  } else {
    // For IE9
    var classes = element.className.split(" ")
    var i = classes.indexOf("is-active")

    if (i >= 0) classes.splice(i, 1)
    else classes.push("is-active")
    element.className = classes.join(" ")
  }
}
