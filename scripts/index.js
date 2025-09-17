class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 1;
  }

  getActivities() {
    return this.activities;
  }

  createActivity(title, description, imgUrl) {
    const activity = new Activity(this.id, title, description, imgUrl);
    this.id = this.id + 1;
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const repository = new Repository();

function createCard({ id, title, description, imgUrl }) {
  const cardBox = document.createElement("div");
  const contentWrapper = document.createElement("div");
  const imageContainer = document.createElement("div");
  const titleElement = document.createElement("h3");
  const descriptionElement = document.createElement("p");
  const imgElement = document.createElement("img");

  // Power level badge
  const powerLevelBadge = document.createElement("div");
  powerLevelBadge.classList.add("power-level");
  powerLevelBadge.textContent = "20000";

  titleElement.textContent = title;
  descriptionElement.textContent = description;
  imgElement.src = imgUrl;
  imgElement.alt = title;

  cardBox.classList.add("activity-card");
  contentWrapper.classList.add("card-content");
  imageContainer.classList.add("image-container");
  titleElement.classList.add("activity-title");
  descriptionElement.classList.add("activity-description");
  imgElement.classList.add("activity-image");

  imgElement.onerror = function () {
    console.error(`Failed to load image: ${imgUrl}`);
  };

  imageContainer.appendChild(imgElement);
  contentWrapper.appendChild(titleElement);
  contentWrapper.appendChild(descriptionElement);

  cardBox.appendChild(powerLevelBadge);
  cardBox.appendChild(imageContainer);
  cardBox.appendChild(contentWrapper);

  cardBox.addEventListener("click", () => {
    repository.deleteActivity(id);
    renderActivities();
  });

  return cardBox;
}

function renderActivities() {
  const activitiesContainer = document.querySelector("#activities");
  activitiesContainer.innerHTML = "";
  const activities = repository.getActivities();
  const activityElements = activities.map((activity) => createCard(activity));
  activityElements.forEach((activityElement) =>
    activitiesContainer.appendChild(activityElement)
  );
}

function handler(event) {
  event.preventDefault();
  const title = document.querySelector('input[type="text"]').value;
  const description = document.querySelector("textarea").value;
  const imgUrl = document.querySelector(
    'input[type="text"]:nth-of-type(2)'
  ).value;

  if (!title || !description || !imgUrl) {
    alert("Please fill in all the fields!");
    return;
  }

  repository.createActivity(title, description, imgUrl);
  document.querySelector('input[type="text"]').value = "";
  document.querySelector("textarea").value = "";
  document.querySelector('input[type="text"]:nth-of-type(2)').value = "";
  renderActivities();
}

document.querySelector(".btn-3").addEventListener("click", handler);
