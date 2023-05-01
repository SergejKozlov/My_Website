// --------- //
// Slideshow //
// --------- //

// Variables
const images = document.querySelectorAll("img"); // This is an array of the images
let index = 0; // This is the index of the image array that I want to show
const prev = document.querySelector("#prev"); // This is a reference to the [<] button
const next = document.querySelector("#next"); // This is a reference to the [>] button
const active = "active" // This is just the word "active" as a variable. When I set the class of an element to "active" I might misspell the word (as "Active" or "atcive"). The script won't tell me I've misspelled it. By making a variable the script will tell me "atcive is not defined". This technique of defining strings and values can be very useful if the string would be used in multiple places.

// Functions
function showImg(i){
  // Function to show an image
  // For each image element in the images array, remove the class active
  // If the element doesn't have the active class then nothing happens, and nothing breaks
  images.forEach(image => image.classList.remove(active))
  // give the image at the current index (i) the active class
  images[i].classList.add(active)
}

// Event handlers
next.addEventListener("click", function(){
  // When the user clicks next I want to add 1 to the index 
  // and use modulo to loop the value, so an index of 4 becomes an index of 0
  index = (index + 1) % images.length
  // and then call my function to update the active image
  showImg(index);
  // and then pause my timer that I've defined below in the auto slideshow section
  pause(); // this is defined below
})

prev.addEventListener("click", function(){
  // When the user clicks prev I want to subtract 1 to the index
  // I do this by adding the length - 1 and then using modulo like above
  // This works because saying an index of 2 - 1 = 1 % 4 is the same saying an index of 2 + 3 = 5 % 4
  // both 1 % 4 and 5 % 4 give the value of 1
  // It's not immediately intuitive, but it's very effective
  index = (index + images.length - 1) % images.length
  // and then call my function to update the active image
  showImg(index);
  // and then pause my timer that I've defined below in the auto slideshow section
  pause(); // this is defined below
})

// I call this function immediately so the first image becomes active
showImg(index);

// ---------------------- //
// Auto-slideshow feature //
// ---------------------- //

// Variables
// The buffer is the time, in miliseconds, I will stay on a frame for
const buffer = 5000; // 5000 = 5 seconds
// Date.now() gets the current time in miliseconds
let current = Date.now();
// the target is some time in the future, in this case 5 seconds from now
let target = current + buffer;

// Functions
function timeLoop(){
  // this loop updates the current time
  // and checks if it's after the target time
  current = Date.now();
  if(current > target){
    // if it's after the target
    // then increment the index,
    // show the image
    // and set a new future target
    index = (index + 1) % images.length
    showImg(index);
    target = current + buffer;
  }
}

function pause(){
  // update current and target
  // this is like a reset on the current timer
  current = Date.now();
  target = current + buffer;
}


// setInterval is a function that is called constantly with a delay
// in this case it will call my timeLoop function every 100 miliseconds
// this is often enough that a user won't notice the delay, but infrequent enough to not cause the application to get stuck just doing this
setInterval(timeLoop, 100);

const quotes = [{
  quote: `"You only live once, but if you do it right, once is enough."`,
  writer: `– Mae West`
}, {
  quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
  writer: `– Albert Einstein`
}, {
  quote: `"Never let the fear of striking out keep you from playing the game."`,
  writer: `– Babe Ruth`
}, {
  quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
  writer: `– Steve Jobs`
}, {
  quote: `"In order to write about life first you must live it."`,
  writer: `– Ernest Hemingway`
}, {
  quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
  writer: `– Soren Kierkegaard`
}, {
  quote: `"The unexamined life is not worth living."`,
  writer: `– Socrates`
}, {
  quote: `"Turn your wounds into wisdom."`,
  writer: `– Oprah Winfrey`
}, {
  quote: `"The purpose of our lives is to be happy."`,
  writer: `- Dalai Lama`
}, {
  quote: `"Live for each second without hesitation."`,
  writer: `- Elton John`
}, ]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * quotes.length);
  
  
  quote.innerHTML = quotes[random].quote;

  
  writer.innerHTML = quotes[random].writer;
})
