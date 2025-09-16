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

//Activity class tests

describe("Activity", () => {
  it("debe crear una instancia de Activity correctamente", () => {
    const activity = new Activity(
      1,
      "Titulo",
      "Descripcion",
      "http://img.com/imagen.jpg"
    );
    expect(activity.id).toBe(1);
    expect(activity.title).toBe("Titulo");
    expect(activity.description).toBe("Descripcion");
    expect(activity.imgUrl).toBe("http://img.com/imagen.jpg");
  });
});

describe("Repository", () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it("debe crear una actividad y agregarla a la lista", () => {
    repository.createActivity(
      "Titulo 1",
      "Descripcion 1",
      "http://img.com/imagen1.jpg"
    );
    const activities = repository.getActivities();
    expect(activities.length).toBe(1);
    expect(activities[0].title).toBe("Titulo 1");
  });

  it("debe eliminar una actividad correctamente", () => {
    repository.createActivity(
      "Titulo 1",
      "Descripcion 1",
      "http://img.com/imagen1.jpg"
    );
    repository.createActivity(
      "Titulo 2",
      "Descripcion 2",
      "http://img.com/imagen2.jpg"
    );
    repository.deleteActivity(1);
    const activities = repository.getActivities();
    expect(activities.length).toBe(1);
    expect(activities[0].title).toBe("Titulo 2");
  });

  it("debe retornar todas las actividades", () => {
    repository.createActivity(
      "Titulo 1",
      "Descripcion 1",
      "http://img.com/imagen1.jpg"
    );
    repository.createActivity(
      "Titulo 2",
      "Descripcion 2",
      "http://img.com/imagen2.jpg"
    );
    const activities = repository.getActivities();
    expect(activities.length).toBe(2);
    expect(activities[0].title).toBe("Titulo 1");
    expect(activities[1].title).toBe("Titulo 2");
  });
});

describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});
