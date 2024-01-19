const http = require("http");
const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));
let homeContent = "";
let projectContent = "";
fs.readFile("home.html", (err, home) => {
    if (err) {
      throw err;
    }
    homeContent = home;
  });
  fs.readFile("project.html", (err, project) => {
    if (err) {
      throw err;
    }
    projectContent = project;
  });
  fs.readFile("registration.html", (err, reg) => {
    if (err) {
      throw err;
    }
    registrationContent = reg;
  });
  http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
        case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args.port);
