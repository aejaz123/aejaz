// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
     
       var message = "<h3> math is 90</h3>";
      
       function sayHelloo (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
     
       var message = "<h3> sci is 90</h3>";
      
      
      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
          
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);
      
            if (name === "s") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
          
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHelloo);


  }
);



// document.querySelector("button")
//   .onclick = sayHello;

