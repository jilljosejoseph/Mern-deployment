console.log("exam.routes.js");

const Pets = require("../controllers/exam.controller");

module.exports = app => {
    app.get("/api/pet", Pets.getAll);
    app.post("/api/pet", Pets.create);
    app.get("/api/pet/:_id", Pets.getOne);
    app.get("/api/pet/view/:_id", Pets.getOne);
    app.put("/api/pet/:_id", Pets.update);
    app.delete("/api/pet/:_id", Pets.remove);

}