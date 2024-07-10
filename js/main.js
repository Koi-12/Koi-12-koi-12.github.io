// Portfolio Section

const filterList = document.querySelector(".filter1");
  const filterButtons = filterList.querySelectorAll(".btn1");
  const conferences = document.querySelectorAll(".column1");
  
  let conferenceIndex = 0;
  
  conferences.forEach((conference) => {
    conference.style.viewTransitionName = `conf-${++conferenceIndex}`;
  });
  
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let confCategory = e.target.getAttribute("data-filter");
  
      if (!document.startViewTransition) {
        updateActiveButton(e.target);
        filterEvents(confCategory);
      }
  
      document.startViewTransition(() => {
        updateActiveButton(e.target);
        filterEvents(confCategory);
      });
    });
  });
  
  function updateActiveButton(newButton) {
    filterList.querySelector(".active").classList.remove("active");
    newButton.classList.add("active");
  }
  
  function filterEvents(filter) {
    conferences.forEach((conference) => {
      // get each conferences category
      let eventCategory = conference.getAttribute("data-category");
  
      // check if that category matches with the filter
      if (filter === "all" || filter === eventCategory) {
        conference.removeAttribute("hidden");
      } else {
        conference.setAttribute("hidden", "");
      }
    });
  }




//Porfolio section test 2


  filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column1");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter2");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}