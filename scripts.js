(function () {
  const drawer = document.getElementById("drawer");
  const toast = document.getElementById("toast");

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2800);
  }

  document.querySelectorAll(".js-menu").forEach((button) => {
    button.addEventListener("click", () => {
      if (!drawer) return;
      drawer.hidden = false;
    });
  });

  document.querySelectorAll(".js-menu-close").forEach((button) => {
    button.addEventListener("click", () => {
      if (drawer) drawer.hidden = true;
    });
  });

  if (drawer) {
    drawer.addEventListener("click", (event) => {
      if (event.target === drawer) drawer.hidden = true;
    });
  }

  document.querySelectorAll(".js-email").forEach((link) => {
    link.addEventListener("click", () => showToast("Opening your email app for Polarise updates."));
  });

  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const tabs = group.querySelectorAll(".tab");
    const panels = group.querySelectorAll(".panel");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((item) => item.classList.remove("active"));
        panels.forEach((panel) => panel.classList.remove("active"));
        tab.classList.add("active");
        const panel = group.querySelector(`#${tab.dataset.target}`);
        if (panel) panel.classList.add("active");
      });
    });
  });

  document.querySelectorAll(".amount").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".amount").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const input = document.querySelector("[name='amount']");
      if (input) input.value = button.dataset.amount || "";
    });
  });

  document.querySelectorAll(".form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const label = form.dataset.success || "Thanks. Your details have been saved for this demo.";
      showToast(label);
      form.reset();
    });
  });
})();
