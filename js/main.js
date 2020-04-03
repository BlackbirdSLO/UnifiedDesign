function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "menu") {
      x.className += " extended";
    } else {
      x.className = "menu";
    }
  }