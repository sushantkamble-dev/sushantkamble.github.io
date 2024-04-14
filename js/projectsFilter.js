const buttonContents = [
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
    title: "Sandbox",
    stateTag: "sandbox",
  },
];

const projects = [
  {
    title: "No Code Editor for data transformation",
    tags: ["Web App","React JS","Bootstrap","Figma","Notion"],
    link: "./no-code-editor.html",
    imageURL: "images/thumbnails/no-code-editor.png",
    disabled:false,
    newTab:false
  },
  {
    title: "Paw Finder",
    tags: ["Web App","Figma","Next.js","Bootstrap","MongoDB"],
    link: "https://github.com/sushantkamble-dev/paw-finder",
    imageURL: "images/thumbnails/paw-finder.png",
    disabled:false,
    newTab:true
  },
  {
    title: "Cozy Craft",
    tags: ["Web App","Html","Css","javascript","WebXR"],
    link: "https://github.com/sushantkamble-dev/cozy-craft-ar",
    imageURL: "images/thumbnails/cozy-craft.png",
    disabled:false,
    newTab:true
  },
  {
    title: "Kanban Board",
    tags: ["Web App","React.js","Bootstrap","Firebase"],
    link: "https://github.com/sushantkamble-dev/kanban-board",
    imageURL: "images/thumbnails/kanban-board.png",
    disabled:false,
    newTab:true
  },
  {
    title: "Blending Realities",
    tags: ["Mixed Reality","Bezi","Figma","Notion"],
    link: "/workshop-blending-realities.html",
    imageURL: "images/thumbnails/blending-realities.png",
    disabled:false,
    newTab:false
  },
  {
    title: "Elixir Expedition",
    tags: ["Virtual Reality", "Unity", "Blender", "C#"],
    link: "/elixir-expedition.html",
    imageURL: "images/thumbnails/elixir-expedition.png",
    disabled:false,
    newTab:false
  },

];

function toggleState(stateTag) {
/*   const urlParams = new URLSearchParams(window.location.search);
  const currentState = urlParams.get("projectsFilter");
  if (currentState !== stateTag.toString()) {
    urlParams.set("projectsFilter", stateTag.toString());
    const newUrl = window.location.pathname + "?" + urlParams.toString();
    history.pushState(null, "", newUrl);
  } */
  //populateProjectFilters(stateTag);
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
    .map(({ title, tags, link, imageURL,disabled,newTab }) => {

      let tagsList =""
      tags.forEach((item)=>{
        tagsList = tagsList + (`
        <p style="background-color: #CDE7FF; font-size: 14px; border-radius: 8px;padding: 5px 10px 5px 10px; margin-right: 10px;">
                  ${item}
                </p>
        `)
      })
        return `
        <div class="col-md-6 order-2 order-md-1">
        <div class="custom-block" data-aos="fade-up">
        <a href="${link}" ${newTab?"target='_blank'":null} style="color:black;${disabled?"pointer-events:none":""}">
          <div class="card custom-card">
            <span class="icon-service">
            <img src="${imageURL}" alt="Image"
                class="img-fluid" /></span>
            <div class="card-body" style="text-align: left; padding-bottom: 4px;">
              <h5 class="section-title" style="font-size: 20px;margin-bottom:20px;">${title}</h5>
                
              <div style="display: flex; flex-direction: row; flex-wrap: wrap; color:#0389ff;">
              ${tagsList}
            </div>
            </div>
          </div>
          </a>
        </div>
      </div>`;
      }
    )
    .join("");

  projectContainer.style.height = "fit-content";
}

document.addEventListener("DOMContentLoaded", toggleState("web-app"));
