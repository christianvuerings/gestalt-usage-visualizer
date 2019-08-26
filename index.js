[...document.querySelectorAll("[class]")]
  .filter(el => [...el.classList].some(classname => classname.length > 3))
  .forEach(el => {
    el.setAttribute(
      "style",
      `${el.getAttribute("style") || ""};border: solid 1px #ff0000;`
    );
  });
