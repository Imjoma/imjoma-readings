import {
  renderUnorderedList,
  renderOrderedList,
  renderDescriptionList,
} from "./html-list-variants/listVariants.js";

const listData = [
  { id: 1, name: "unordered list", tag: "ul" },
  { id: 2, name: "ordered list", tag: "ol" },
  { id: 3, name: "description list", tag: "dl" },
];

const listDisplay = document.querySelector(".list-display");
const listButtons = document.querySelectorAll(".list-button");

listButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.contains("active");
    // ... button list style
    if (isActive) return;
    listButtons.forEach((el) => el.classList.remove("active"));
    button.classList.add("active");

    //   ... render list ui
    renderList(button.getAttribute("data-tag"));
  });
});

const renderList = (tag) => {
  const listVariant = listData.filter((i) => i.tag === tag)[0];
  const { id, name } = listVariant;
  const nameUp = name.toUpperCase();

  switch (tag) {
    case "dl":
      listDisplay.innerHTML = renderDescriptionList(nameUp);
      break;
    case "ol":
      listDisplay.innerHTML = renderOrderedList(nameUp);
      break;
    default:
      listDisplay.innerHTML = renderUnorderedList(nameUp);
      break;
  }
};
// ... initial render of list
renderList("ul");
