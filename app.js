document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("sidebar");
  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
      bar.classList.add("movingbar");
    }
  });
  document.addEventListener("click", function () {
    bar.classList.remove("movingbar");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let thing87638 = setInterval(() => {
    let theme = localStorage.getItem("theme");
    console.log(theme);
    if (theme === "light") {
      const root = document.documentElement;
      root.style.setProperty("--link", "rgb(225, 139, 9)");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--shadow-color", "0px 0px 5px rgb(84, 84, 84)");
      root.style.setProperty("--black-color", "rgb(235, 235, 235)");
      root.style.setProperty("--bg-color", "rgb(235, 235, 235)");
      root.style.setProperty("--bg-color-2", "rgb(30, 30, 30)");
      root.style.setProperty("--group-bg-color", "rgb(140, 140, 140, 0.7)");
      root.style.setProperty("--bar-color", "rgb(200, 200, 200)");
    } else if (theme === "deep") {
      const root = document.documentElement;
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--link", "rgb(225, 139, 9)");
      root.style.setProperty("--shadow-color", "0px 5px 5px rgb(25,25,25)");
      root.style.setProperty("--black-color", "black");
      root.style.setProperty("--bg-color", "black");
      root.style.setProperty("--bg-color-2", "black");
      root.style.setProperty("--group-bg-color", "black");
      root.style.setProperty("--bar-color", "black");
      root.style.setProperty("--border", "rgb(50,50,50)");
    } else if (theme === "cyber") {
      const root = document.documentElement;
      root.style.setProperty("--link", "rgb(225, 139, 9)");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--shadow-color", "0px 5px 5px #42053f");
      root.style.setProperty("--black-color", "black");
      root.style.setProperty("--bg-color", "#0b023a");
      root.style.setProperty("--bg-color-2", "#ff00a0");
      root.style.setProperty("--group-bg-color", "rgba(48, 4, 98, 0.7)");
      root.style.setProperty("--bar-color", "#12827e");
      root.style.setProperty("--border", "rgb(50,50,50)");
    } else if (theme === "custom") {
      const root = document.documentElement;
      let first = localStorage.getItem("first");
      let second = localStorage.getItem("second");
      console.log(second);
      document.documentElement.style.setProperty("--bg-color", first);
      document.documentElement.style.setProperty("--bar-color", second);
      document.documentElement.style.setProperty("--link", second);
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--black-color", "black");
      root.style.setProperty("--shadow-color", "transparent");
      root.style.setProperty("--bg-color-2", "white");
      root.style.setProperty("--group-bg-color", second);
    } else {
      const root = document.documentElement;
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--link", "rgb(225, 139, 9)");
      root.style.setProperty("--shadow-color", "transparent");
      root.style.setProperty("--black-color", "black");
      root.style.setProperty("--bg-color", "rgb(50, 50, 50)");
      root.style.setProperty("--bg-color-2", "white");
      root.style.setProperty("--group-bg-color", "rgba(40, 40, 40, 0.7)");
      root.style.setProperty("--bar-color", "rgb(70, 70, 70)");
    }
  }, 100);
  let hue = 0;
  const root = document.documentElement;
  setInterval(() => {
    hue = (hue + 3) % 360;
    console.log(hue);
    root.style.setProperty("--f-t-color", `hsl(${hue}, 100%, 70%)`);
    root.style.setProperty("--s-t-color", `hsl(${hue + 60}, 100%, 70%)`);
    root.style.setProperty("--t-t-color", `hsl(${hue + 130}, 100%, 70%)`);
  }, 300);

  const games = document.querySelectorAll(".game");
  games.forEach(function (game) {
    game.addEventListener("mouseover", function () {
      let innerThing = game.innerHTML;
      game.setAttribute("name", innerThing);
    });
  });
  const random = document.getElementById("random");

  random.addEventListener("click", select);

  function select() {
    let list = document.getElementById("list");
    let items = list.getElementsByTagName("a");
    let itemsL = Array.from(items);
    let r = Math.random();
    let rw = Math.floor(r * 275);
    let selected = items[rw];
    itemsL.forEach(function (item) {
      if (item.contains(selected)) {
        let list = document.getElementById("randomList");
        item.setAttribute("name", item.innerHTML);
        item.style.paddingBlock = "10px";
        list.innerHTML = item.outerHTML;

        console.log(item);
      } else {
      }
    });
  }
});

function gotIt() {
  const tip = document.querySelector(".tip");
  tip.style.display = "none";
  localStorage.setItem("cccse", "yes");
}

function search() {
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();
  var list = document.getElementById("list");
  var items = list.getElementsByTagName("a");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemText = item.innerText.toLowerCase();

    if (itemText.includes(searchTerm)) {
      item.style.display = "flex";
      item.style.width = "110px";
      item.style.height = "110px";
      item.style.marginInline = "5px";
      item.style.marginBlock = "6px";
      item.style.paddingInline = "10px";
      item.style.paddingBottom = "10px";
    } else {
      item.style.width = "0";
      item.style.height = "0";
      item.style.padding = "0";
      item.style.margin = "0";
    }
  }
}
