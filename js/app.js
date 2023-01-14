window.onload = function () {
  setTimeout(() => {
    document.body.classList.add("loaded");

    Draggable.create(".gallary", {
      bounds: "body",
      inertia: true,
    });
  }, 200);
};
