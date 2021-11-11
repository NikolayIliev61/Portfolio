let Projects =
  window.location.protocol +
  "//" +
  window.location.host +
  "/" +
  "index.html#projects";

let aboutMe =
  window.location.protocol +
  "//" +
  window.location.host +
  "/" +
  "index.html#aboutme";

let contactMe =
  window.location.protocol +
  "//" +
  window.location.host +
  "/" +
  "index.html#contact";
let Portfolio =
  window.location.protocol +
  "//" +
  window.location.host +
  "/" +
  "index.html#portfolio";

const header = document.getElementById("header");
header.innerHTML = `
<section class="header-wrapper wrapper" id="navBar">
       
        <div class="logo">
          <h1>N.I.</h1>
        </div>
        <div class="nav-links">
          <ul>
            <li><a href="${Portfolio}" class="list">Portfolio</a></li>
            <li><a href='${Projects}' class="list">Project</a></li>
            <li><a href="${aboutMe}" class="list">About me</a></li>
            <li><a href="${contactMe}" class="list">Contacts</a></li>
          </ul>
        </div>
        <div class="social-links">
          <ul>
            <li>
              <a href="https://github.com/NikolayIliev61?tab=repositories"><i class="fab fa-github"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nikolay-iliev-002047209/"><i class="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="mailto: nikolayiliev552@gmail.com"><i class="fas fa-envelope-square"></i></a>
            </li>
          </ul>
        </div>
      </div>
</section>
`;
