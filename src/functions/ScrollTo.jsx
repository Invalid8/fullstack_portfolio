const ScrollTo = (selector) => {
  if (!selector) return;

  const Expertise = document.querySelector(selector);
  const off = document.querySelector("header");

  if (Expertise && off) {
    window.scrollTo({
      top: Expertise.offsetTop - off.offsetHeight,
      behavior: "smooth",
    });
  } else {
    console.error("Selector property does not exist!");
  }
};

const Equalize = (navbarsLinks, setter) => {
  if (!navbarsLinks) return;

  let position = window.scrollY + 200;

  navbarsLinks.forEach((navbarlink) => {
    navbarlink.classList.remove("active");
  });

  navbarsLinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      setter(navbarlink.hash);
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};

const Animate = (selector) => {
  if (!selector) return;
  const els = document.querySelectorAll(selector);
  if (!els) return;

  // let position = window.scrollY;

  // els.forEach((el) => {
  //   console.log(position, el.offsetTop);
  //   if (
  //     position >= el.offsetTop &&
  //     position <= el.offsetTop + el.offsetHeight
  //   ) {
  //     console.log("do");
  //     el.style.visibility = "hidden";
  //     el.classList.remove("animated");
  //   } else {
  //     console.log("did");
  //     el.style.visibility = "visible";
  //     el.classList.add("animated");
  //   }
  // });
};

export { ScrollTo, Equalize, Animate };
