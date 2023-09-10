// Data: assume we have a list of top 5 devices
let topDevices = [
    { id: 0, title: "Samsung Galaxy Tab A7 Lite 8.7 Tablet - Grey", brand: "Samsung", brand_name: "Galaxy Tab A7 Lite", image_url: "images/TABSAM22011__1.jpeg" },
    { id: 1, title: "Apple iPhone 14 256GB Starlight", brand: "Apple", brand_name: "Iphone 14", image_url: "images/MPHAPP214011__1.jpg"},
    { id: 2, title: "Motorola Moto G51 5G (2022) Dual SIM Smartphone 6GB+128GB - Indigo Blue - 6.8", brand: "Motorola", brand_name: "Moto G51 5G", image_url: "images/MPHMOT015100__2.jpg"},
    { id: 3, title: "ASUS Vivobook Go E1504FA-NJ274W 15.6 FHD Laptop", brand: "ASUS", brand_name: "ASUS Vivobook Go", image_url: "images/NBKASU1504274__6.jpg" },
    { id: 4, title: "Apple Macbook Air 13 Laptop with M1 Chip - Space Grey 8GB", brand: "Apple", brand_name: "Macbook", image_url: "images/NBKAPP213125611__1.jpeg" },
  ];
  
  //------------------------------------------------------------------------------------------------------
  // SLIDE SHOWS
  // Slideshow: Manual
  let slideIndex = 0; // Initial slide = 0
  
  function nextSlide() {
    // Change the slide_index
    if (slideIndex < topDevices.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    // Change the image source for the img
    document.getElementById("manual-slide-title").innerHTML = topDevices[slideIndex].title;
    document.getElementById("manual-slide-image").src = topDevices[slideIndex].image_url;
  }
  
  function previousSlide() {
    // Change the slide_index
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = topDevices.length - 1;
    }
    // Change the image source for the img
    document.getElementById("manual-slide-title").innerHTML = topDevices[slideIndex].title;
    document.getElementById("manual-slide-image").src = topDevices[slideIndex].image_url;
  }
  
  //------
  // Slideshow: Automatic
  let autoSlideIndex = 0; // Initial slide = 0
  
  function autoSlideShow() {
    // Change the slide_index
    if (autoSlideIndex < topDevices.length - 1) {
      autoSlideIndex++;
    } else {
      autoSlideIndex = 0;
    }
    // Change the image source for the img
    document.getElementById("auto-slide-title").innerHTML = topDevices[autoSlideIndex].title;
    document.getElementById("auto-slide-image").src = topDevices[autoSlideIndex].image_url;
    // Wait 2 seconds
    setTimeout(autoSlideShow, 2000); // Auto change slide every 2 seconds
  }
  
  autoSlideShow(); // Call to run auto slideshow
  
// DROPDOWN MENU TO SELECT DEVICE
// Populate the select "options" with all the devices in the array when the page is loaded
function loadMyDevices() {
    let deviceSelect = document.getElementById("my-deviceList");
    for (var i = 0; i < topDevices.length; i++) {
      // Create a new child HTML node/element as "<option>" (as a child node)
      let node = document.createElement("option");
      // Assign option "text content" and "value" to this new node
      node.value = topDevices[i].id.toString();
      node.textContent = topDevices[i].title.toString();
      // Append the above HTML node (option) to the parent node "deviceList"
      deviceSelect.appendChild(node);
    }
    // Set the first device as selected option in drop-down list
    deviceSelect.selectedIndex = "0";
  }
  
  // Call to execute this function when loading the webpage
  loadMyDevices();
  
  // When the user selects an option in the dropdown menu (select), display that option
  function displayMyDevice() {
    // Get the selected device "option value"
    let selectedDeviceIndex = document.getElementById("my-deviceList").value;
    document.getElementById("my-deviceTitle").innerHTML = topDevices[selectedDeviceIndex].title;
    document.getElementById("my-deviceBrand").innerHTML = topDevices[selectedDeviceIndex].brand;
    document.getElementById("my-deviceBrandName").innerHTML = topDevices[selectedDeviceIndex].brand_name;
    document.getElementById("my-deviceImageURL").src = topDevices[selectedDeviceIndex].image_url;
  }
//ADD NEW COMMENT
//Data: Assume we have a list of existing comments stored in an array "allComments"
let allComments = [{name: "Ian", comment: "Recommended, good one"},
           {name: "Aman", comment: "I don't like this movie"},
           {name: "John", comment: "Love it"},
          ];  

//----------
//Load all existing comments and display them on HTML
function loadComments() {
  //Loop through all comments in the array "allComments"
  for (var i=0; i < allComments.length; i++) {
    let name = allComments[i].name;
    let comment = allComments[i].comment;   
    //
    //Create a new HTML node/element <P> to display this comment
    let node = document.createElement("P");
    let textnode = document.createTextNode(name + ": " + comment);
    node.appendChild(textnode);//Append the content (created TextNode) to the HTML Node (child)     
    let parrent_node = document.getElementById("comment-list");//Get the id of parent node "comment-list"   
    parrent_node.appendChild(node);//Append the above child HTML node to the parent node
  }
}
//Call to run this loadComments function when the webpage is loaded.
loadComments();

//----------
//Add a new comment
function addComment() { 
  //Get entered value/data by user
  let enteredCommentName = document.getElementById("comment_name").value;
  let enteredCommentText = document.getElementById("comment_text").value; 
  
  //Add this new comment to the array
  allComments.push({name: enteredCommentName, comment: enteredCommentText});  
  alert("Thank you for your comment!");
  
  //Display this new comment on HTML page 
  //Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
  let node = document.createElement("P");
  //Create a new TextNode
  let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
  //Append the content (created TextNode) to the HTML Node (child)
  node.appendChild(textnode); 
  //Get the id of parent node "comment-list"
  let parrent_node = document.getElementById("comment-list");
  //Append the above child HTML node to the parent node
  parrent_node.appendChild(node);
  
  //Clear comment box
  document.getElementById("comment_name").value = "";
  document.getElementById("comment_text").value = "";
} 


  
  