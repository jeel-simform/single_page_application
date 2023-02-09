

window.onload = function () {
  const path = window.location.pathname.split("/");
  console.log(path[1]);

  switch (path[1]) {
    case "": {
      loadPage("home");
      break;
    }
    case "about": {
      loadPage("about");
      break;
    }
    case "image": {
      loadPage("image");
      break;
    }
    case "service": {
      loadPage("service");
      break;
    }
    default: {
      loadPage("404");
      break;
    }
  }

  document.querySelectorAll(".menu__item").forEach((item) => {
    item.addEventListener("click", function () {
      const path = item.getAttribute("value");
      loadPage(path);
      if (path == "home") {
        window.history.pushState("", "", "/");
        return;
      }

      window.history.pushState("", "", path);
    });
  });

  function loadPage($path) {
    if ($path == "") return;

    const container = document.getElementById("container");

    const request = new XMLHttpRequest();
    console.log("path" + $path);
    request.open("GET", "pages/" + $path + ".html");
    console.log("status" + request.status);
    request.send();
    request.onload = function () {
      console.log(request.status);
      if (request.status == 200) {
        container.innerHTML = request.responseText;
        document.title = $path;
        // }else {
        //     console.log(request.status);
        // }
      }

      if ($path === "image") {
        let script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", "./pages/image.js");
        console.log("script"+script);
        document.head.appendChild(script);
      }
    };
  }
};
