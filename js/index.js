document.addEventListener("DOMContentLoaded", function () {
  const wheelItems = document.querySelectorAll(".wheel-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  wheelItems.forEach((item) => {
    observer.observe(item);
  });
});

// const data = [
//     { title: 'CM5-RS', size: '18″ - 23″', imgSrc: 'https://brixtonforged.ch/wp-content/uploads/2022/05/removal.ai_tmp-6295bbbcce321.png' },
//     { title: 'CM5-RS', size: '18″ - 23″', imgSrc: 'https://brixtonforged.ch/wp-content/uploads/2022/05/removal.ai_tmp-6295bbbcce321.png' },
//     { title: 'CM5-RS', size: '18″ - 23″', imgSrc: 'https://brixtonforged.ch/wp-content/uploads/2022/05/removal.ai_tmp-6295bbbcce321.png' },
//     { title: 'CM5-RS', size: '18″ - 23″', imgSrc: 'https://brixtonforged.ch/wp-content/uploads/2022/05/removal.ai_tmp-6295bbbcce321.png' },
//     { title: 'CM5-RS', size: '18″ - 23″', imgSrc: 'https://brixtonforged.ch/wp-content/uploads/2022/05/removal.ai_tmp-6295bbbcce321.png' },
//     { title: 'CM5-RS', size: '18″ - 23″', imgSrc: 'https://brixtonforged.ch/wp-content/uploads/2022/05/removal.ai_tmp-6295bbbcce321.png' },
//     { title: 'CM5-RS', size: '18″ - 23″', imgSrc: 'https://brixtonforged.ch/wp-content/uploads/2022/05/removal.ai_tmp-6295bbbcce321.png' },
//     { title: 'CM5-RS', size: '18″ - 23″', imgSrc: 'https://brixtonforged.ch/wp-content/uploads/2022/05/removal.ai_tmp-6295bbbcce321.png' },
// ];

// document.querySelectorAll('.imageDiv').forEach(container => {
//     data.forEach(item => {
//         const box = document.createElement('div');
//         box.className = 'box';

//         const title = document.createElement('p');
//         title.innerHTML = `${item.title} <span class="be-vietnam-pro-regular">${item.size}</span>`;
//         box.appendChild(title);

//         const img = document.createElement('img');
//         img.src = item.imgSrc;
//         img.alt = '';
//         box.appendChild(img);

//         container.appendChild(box);
//     });
// });

const customCursor = document.createElement("div");
customCursor.classList.add("custom-cursor");
document.body.appendChild(customCursor);

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    customCursor.style.display = "flex";
  });

  box.addEventListener("mouseout", () => {
    customCursor.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // Stop observing the element once it’s in view
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll("h1, p, .box, .animateIt").forEach((element) => {
    observer.observe(element);
  });
});

// custom cursor
document.addEventListener("mousemove", function (e) {
  const cursor = document.querySelector(".custom-cursor");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  // Get the element under the cursor
  const element = document.elementFromPoint(e.clientX, e.clientY);

  if (element) {
    // Get the background color of the element
    const style = window.getComputedStyle(element);
    const bgColor = style.backgroundColor;

    // Calculate the brightness of the background color
    const rgb = bgColor.match(/\d+/g);
    if (rgb) {
      const brightness =
        (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;

      // Invert the cursor color based on the background color
      const filterValue = brightness > 128 ? "invert(1)" : "invert(0)";
      cursor.style.filter = filterValue;
    }
  }
});

// MENU ITEM
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".right-side .menu li a");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      updateActiveClass(e.target);
      window.location.href = e.target.href;
    });
  });

  function updateActiveClass(target) {
    menuItems.forEach((item) => {
      console.log(item, "error");
      item.parentElement.classList.remove("active");
    });
    target.parentElement.classList.add("active");
  }
});

// About Page Paragraph

// document.addEventListener("DOMContentLoaded", function () {
//   var toggleButtons = document.querySelectorAll(".paragraph-toggle-btn");

//   toggleButtons.forEach(function (toggleButton) {
//     var firstPara = toggleButton.parentElement.querySelector(".first-para");
//     var secondPara = toggleButton.parentElement.querySelector(".second-para");
//     var toggleImage = toggleButton.querySelector("img");

//     toggleButton.addEventListener("click", function () {
//       if (secondPara.classList.contains("hidden-paragraph")) {
//         // Slide out the first paragraph to the right and fade out
//         firstPara.classList.add("slide-right");
//         firstPara.classList.remove("show-paragraph");
//         firstPara.classList.add("hidden-paragraph");

//         // Prepare the second paragraph to slide in from the left and fade in
//         secondPara.classList.remove("hidden-paragraph");
//         secondPara.classList.add("show-paragraph");
//         secondPara.classList.add("slide-left");

//         // Rotate the toggle image
//         toggleImage.classList.add("rotate");
//       } else {
//         // Slide out the second paragraph to the right and fade out
//         secondPara.classList.add("slide-right");
//         secondPara.classList.remove("show-paragraph");

//         // Wait for the slide animation to complete before hiding
//         setTimeout(function () {
//           secondPara.classList.add("hidden-paragraph");
//           secondPara.classList.remove("slide-right");

//           // Slide the first paragraph back into view and fade in
//           firstPara.classList.remove("slide-right");
//           firstPara.classList.add("show-paragraph");

//           // Reset the position of the second paragraph
//           secondPara.classList.add("slide-left");
//         }, 500); // Match the animation duration

//         // Rotate the toggle image back
//         toggleImage.classList.remove("rotate");
//       }
//     });
//   });
// });
