const buttonContents = [
  {
    title: "All",
    stateTag: "all",
  },
  {
    title: "Web App",
    stateTag: "web-app",
  },
  {
    title: "AR/VR",
    stateTag: "ar-vr",
  },
  {
    title: "UX/UI",
    stateTag: "ux-ui",
  },
  {
    title: "3D Model",
    stateTag: "3d-model",
  },
];

const projects = [
  {
    title: "Elixir Expedition",
    tags: "Virtual Reality, Unity",
    link: "/elixir-expedition.html",
    imageURL: "images/thumbnails/treasure-hunt.png",
    projectType: "ar-vr",
  },
  {
    title: "Paw Finder",
    tags: "Web Application, Next.js, MongoDB",
    link: "/paw-finder.html",
    imageURL: "images/thumbnails/paw-finder.png",
    projectType: "web-app",
  },
  
  {
    title: "Cozy Craft",
    tags: "Augmented Reality, WebXR",
    link: "/cozy-craft.html",
    imageURL: "images/thumbnails/ar-app.png",
    projectType: "ar-vr",
  },

  {
    title: "Kanban Board - Trello Clone",
    tags: "Web Application, React JS, Firebase",
    link: "",
    imageURL: "images/thumbnails/kanban-board.png",
    projectType: "web-app",
  },
  {
    title: "Art Spark Texas Dance",
    tags: "UX Case Study, Figma",
    link: "",
    imageURL: "images/thumbnails/art-spark-dance.png",
    projectType: "ux-ui",
  },
  {
    title: "News Bites",
    tags: "UX Case Study, Figma",
    link: "",
    imageURL: "images/thumbnails/news-bites.png",
    projectType: "ux-ui",
  },
  {
    title: "Stray Clone",
    tags: "PC Game, Unity, Blender",
    link: "",
    imageURL: "images/thumbnails/cat.png",
    projectType: "3d-model",
  },
  {
    title: "M1911 Pistol",
    tags: "3D Model, Blender",
    link: "",
    imageURL: "images/thumbnails/pistol.png",
    projectType: "3d-model",
  },
  {
    title: "Donut & Coffee",
    tags: "3D Model, Blender",
    link: "",
    imageURL: "images/thumbnails/donut-coffee.png",
    projectType: "3d-model",
  },
];

function toggleState(stateTag) {
  const urlParams = new URLSearchParams(window.location.search);
  const currentState = urlParams.get("projectsFilter");
  if (currentState !== stateTag.toString()) {
    urlParams.set("projectsFilter", stateTag.toString());
    const newUrl = window.location.pathname + "?" + urlParams.toString();
    history.pushState(null, "", newUrl);
  }
  populateProjectFilters(stateTag);
  populateProjects(stateTag);
}

function populateProjectFilters(currentState) {
  const buttonContainer = document.getElementById("projectsFilterContainer");

  buttonContainer.innerHTML = buttonContents
    .map(
      ({ title, stateTag }) => `<p class="px-3">
    <a
      onclick="toggleState('${stateTag}')"
      target="_blank"
      class="btn ${
        currentState === stateTag ? "btn-outline-active" : "btn-outline-black"
      } "
      >${title}</a
    >
  </p>`
    )
    .join("");
}

function populateProjects(currentState) {
  const projectContainer = document.getElementById("posts");
  projectContainer.innerHTML = "";
  projectContainer.innerHTML = projects
    .map(({ title, tags, link, imageURL, projectType }) => {
      if (currentState === "all" || currentState === projectType) {
        return `<div
            class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a
              href="${link}"
              class="portfolio-item isotope-item"
              data-id="1">
              <div class="overlay">
                <span class="wrap-icon icon-link2"></span>
                <div class="portfolio-item-content">
                  <h3 style="font-family:'Montserrat', sans-serif;margin-bottom: 10px;font-size: 16px;font-weight: bold;">${title}</h3>
                  <p>${tags}</p>
                </div>
              </div>
              <img
                src="${imageURL}"
                class="lazyload img-fluid"
                alt="Images"
              />
            </a>
          </div>`;
      }
    })
    .join("");

    projectContainer.style.height = "fit-content";
}

document.addEventListener("DOMContentLoaded", toggleState("all"));
