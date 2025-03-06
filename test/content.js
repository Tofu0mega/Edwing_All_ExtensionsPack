 document.addEventListener("mouseup", function() {
        var selectedText = window.getSelection().toString().trim();
        // document.getElementById("selected-text").innerHTML = "You selected: " + selectedText;
        if (selectedText.length>0)
        {
        window.open("https://www.google.com/search?q=" + selectedText, "_blank", "width=800,height=600");
        }
        else 
        {
          //alert("Please select some text to perform a Google search.");
        }
      });