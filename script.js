function myHeader() {
    document.getElementById("myH1").style.color = "brown";
}


var myDemo = document.getElementById("demoparent");
console.log (myDemo.childNodes.length);
var myDemoTags = document.getElementsByTagName ("li");
console.log ("Number of li links: "+ myDemoTags.length);
var linksInMenu = myDemo.getElementsByTagName("li");
console.log ("Number of Li items in Menu: "+linksInMenu);



function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Matcha");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}


function myAbout() {
    var para = document.createElement("P");
    var t = document.createTextNode("This is an online cafe made by Nadia Corona for the Digital Media Programming Class. Here you can enjoy a hot cup of joe, eat pastries, have any tea your heart desires, and even induldge in matcha. An iced matcha latte with soy milk is my personal favorite drink to have in the morning.");
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
  }


  function userDrink() {
    let text;
    let drink = prompt("What is your favorite morning beverage?", "Your answer");
    if (drink == null || drink == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Wow, " + drink + "! Sounds delicious!";
    }
    document.getElementById("drink").innerHTML = text;
  }



  function myGallary() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


function myFooter() {
alert("Thank you for visiting Cafe Nadia! Please come again.");
}