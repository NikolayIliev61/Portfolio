//Landing - Typing effect
let i = 0;
let title = `Nikolay Iliev`;
let text = `I am a Multimedia Design student and future web developer. I
discover ways to improve products through design and technology.`;

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);

    i++;
    setTimeout(typing, 25);
  }
}

typing();

let a = 0;
function typing1() {
  if (a < text.length) {
    document.getElementById("title").innerHTML += title.charAt(a);

    a++;
    setTimeout(typing1, 50);
  }
}
typing1();
//Reveal sections fucntion
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 80;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
//Landing - Typing effect
//Show navigation Function

window.addEventListener("scroll", showNav);
let lastScrollTop = 0;
const navBar = document.getElementById("header");
function showNav() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navBar.style.top = "-60px";
  } else {
    navBar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
}
const overViewProjectOne = document.getElementById("overViewProjectOne");
const btnProjectOne = document.getElementById("projectOneView");
const overViewProjectTwo = document.getElementById("overViewProjectTwo");
const btnProjectTwo = document.getElementById("projectTwoView");
const overViewProjectThree = document.getElementById("overViewProjectThree");
const btnProjectThree = document.getElementById("projectThreeView");
const background = document.getElementById("background");
btnProjectOne.addEventListener("click", () => {
  overViewProjectOne.classList.add("show");
  // background.classList.add("show");
});
overViewProjectOne.addEventListener("click", () => {
  overViewProjectOne.classList.remove("show");
  // background.classList.remove("show");
});
btnProjectTwo.addEventListener("click", () => {
  overViewProjectTwo.classList.add("show");
});
btnProjectThree.addEventListener("click", () => {
  overViewProjectThree.classList.add("show");
});
overViewProjectTwo.addEventListener("click", () => {
  overViewProjectTwo.classList.remove("show");
});

overViewProjectThree.addEventListener("click", () => {
  overViewProjectThree.classList.remove("show");
});

overViewProjectOne.innerHTML = `

<div class="view-wrapper">
  <div class="view-title title">
    <h2>Aalborg 89ers</h2>
    <p><.Research.><.Prototype.><.SEO.><.JavaScript.><.CSS.><.HTML.><.Testing.></p>
  </div>
  <div class="view-role title">
    <h2>Role</h2>
    <p class="paragraph">   I was part of a team of four and we worked on organizing the content, creating a user-centered design to provide better user experiences. My role in the project included everything from project planning, user research, design, testing, and frontend.</p>
  </div>
  <div class="view-client title">
    <h2>Client</h2>
    <p class="paragraph">Local American Football Club <br />- Aalborg 89ers.</p>
  </div>
  <div class="view-time title">
    <h2>Time</h2>
  <p class="paragraph">4 weeks</p>
  </div>
  <div class="view-reflection title">
    <h2>Reflection</h2>
    <p class="paragraph">   I really enjoyed working on this project. What I learned the hard
    way was that I had to take the content into consideration. Because
    it's time-wasting to change the layout a few days before the
    deadline.</p>
  </div>
  <a href="projectOne.html" class="view-btn"><input type="submit"  value="Full CaseStudy" /></a>
</div>
<div id="background"></div
`;
overViewProjectTwo.innerHTML = `
<div class="view-wrapper">
  <div class="view-title title">
    <h2>Svalegarden Mest</h2>
    <p><.Research.><.Prototype.><.SEO.><.JavaScript.><.CSS.><.HTML.><.Testing.></p>
  </div>
  <div class="view-role title">
    <h2>Role</h2>
    <p class="paragraph">      I was part of a team of four and we worked on organizing the
    content, creating a user-centered design to provide better user
    experiences. My role in the project included everything from
    project planning, user research, design, testing, and frontend.</p>
  </div>
  <div class="view-client title">
    <h2>Client</h2>
    <p class="paragraph">Svalegarden Mest</p>
  </div>
  <div class="view-time title">
    <h2>Time</h2>
  <p class="paragraph">4 weeks</p>
  </div>
  <div class="view-reflection title">
    <h2>Reflection</h2>
    <p class="paragraph"> Reflecting back on the project, we have learned a lot about
    utilizing different theories and methods to make us find solution
    to problems that are relevant to specific target audience. What I
    learned the hard way was that I had to take the content into
    consideration. Because it's time-wasting to change the layout a
    few days before the deadline..</p>
  </div>
  <a href="projectTwo.html" class="view-btn"><input type="submit"  value="Full CaseStudy" /></a>
</div>
<div id="background2"></div
`;
overViewProjectThree.innerHTML = `
<div class="view-wrapper">
  <div class="view-title title">
    <h2>Refood</h2>
    <p><.Research.><.Prototype.><.Testing.><.Analysis.></p>
  </div>
  <div class="view-role title">
    <h2>Role</h2>
    <p class="paragraph">        I was part of a team of three and we were trying to solve the food
    waste problem, applying a user-centered approach focusing on user
    values. My role in the project included research, project
    planning, testing, and designing.</p>
  </div>
  <div class="view-client title">
    <h2>Client</h2>
    <p class="paragraph">none</p>
  </div>
  <div class="view-time title">
    <h2>Time</h2>
  <p class="paragraph">3 weeks</p>
  </div>
  <div class="view-reflection title">
    <h2>Reflection</h2>
    <p class="paragraph">    What I have learned during this project is how to prioritize the customer's needs above all else. Also, how to apply the Design thinking(user-centered approach).</p>
  </div>
  <a href="projectThree.html" class="view-btn"><input type="submit"  value="Full CaseStudy" /></a>
</div>
<div id="background3"></div
`;
