const reviews = [
  {
      id:1,
      img:"images/bil gates.jpg",
      author:"bill gates",
      job:"- founder,microsoft",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse, consectetur assumenda itaque doloribus perferendis libero et autem cupiditate exercitationem nobis omnis molestiae animi minima beatae ducimus hic quos recusandae!",
      
  },
  {
      id:2,
      img:"images/elon musk.jpg",
      author:"elon musk",
      job:"- founder spaceX",
      description:"Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet."

  },
  {
      id:3,
      img:"images/mark zukerberg.jpg",
      author:"mark zukerberg",
      job:"- founder facebook",
      description:"Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam."

  },
  {
      id:4,
      img:"images/steve jobs.jpg",
      author:"steve jobs",
      job:"- founder apple",
      description:"Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa."
    
  }

];

const img = document.getElementById("per-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const description = document.getElementById("description");

// selcet button
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


// bydefault review when page is load
window.addEventListener("DOMContentLoaded",function() {
    showperson();
});

let currItem = 0;
function showperson(){
    const item = reviews[currItem];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    description.textContent = item.description;
}

//when user clicks prev and next button
nextBtn.addEventListener("click",function() {
    currItem++;
    if(currItem == reviews.length){
        currItem = 0;
    }
    showperson();
})
prevBtn.addEventListener("click",function() {
    currItem--;
    if(currItem < 0) {
        currItem = 3;
    }
    showperson();
})