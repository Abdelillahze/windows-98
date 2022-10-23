const icons = document.querySelectorAll(".icon");
const start = document.querySelector(".start");

start.onclick = () => {
  createWindow("slm", "9wd :hear");
};

const move = (el, check) => {
  console.log(el);
  const onDrag = ({ x, y }) => {
    console.log();
    el.style.cssText = `left: ${check ? x : x - el.clientWidth}px; top: ${
      check ? y : y - el.clientHeight
    }px`;
  };
  el.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", onDrag);
  });
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onDrag);
  });
};

const createWindow = (windowName, msg) => {
  const window = document.createElement("div");
  const head = document.createElement("div");
  const nameValue = document.createTextNode(windowName);
  const name = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const pValue = document.createTextNode(msg);
  const spanValue = document.createTextNode("x");

  window.classList.add("window");
  head.classList.add("head");
  name.classList.add("name");
  li.classList.add("close");

  span.append(spanValue);
  li.append(span);
  ul.append(li);
  name.append(nameValue);
  head.append(name);
  head.append(ul);
  window.append(head);
  p.append(pValue);
  window.append(p);

  document.body.append(window);

  const windows = document.querySelectorAll(".window");

  windows.forEach((window) => {
    move(window, true);

    window.querySelector(".close").addEventListener("click", () => {
      window.remove();
    });
  });
};

icons.forEach((icon) => {
  move(icon, false);
});
