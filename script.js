window.onload = function()
{
    const path = window.location.pathname.split("/");
    console.log(path[1]);

    switch(path[1])
    {
        case "":
        {
            loadPage("home");
            break;
        }
        case "about":
        {
            loadPage("about");
            break;
        }
        case "image":
        {
            loadPage("image");
            break;
        }
        case "service":
        {
            loadPage("service");
            break;
        }
        default:
        {
            loadPage("404");
            break;
        }
    }

    document.querySelectorAll(".menu__item").forEach((item) =>
    {
        item.addEventListener("click", function()
        {
            const path = item.getAttribute("value");
            loadPage(path);
            if(path == "home")
            {
                window.history.pushState("", "", "/");
                return;
            }

            window.history.pushState("", "", path);
        });
    });

    function loadPage($path)
    {
        console.log(path[1]);
        if($path == "") return;

        const container = document.getElementById("container");

        const request = new XMLHttpRequest();
        request.open("GET", "pages/" + $path + ".html");
        request.send();
        request.onload = function()
        {
            console.log(request.status);
            if(request.status == 200)
            {
                container.innerHTML = request.responseText;
                document.title = $path;
            }else {
                console.log(request.status);
            }
        }
    }
}



let slides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("dot");
let currentSlide = 0;


document.getElementById("button-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("button-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {    
  console.log("c",currentSlide);
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("activeDot");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("activeDot");
  currentSlide = moveTo; 
}
