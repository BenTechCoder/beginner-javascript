const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role = "tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role = "tabpanel"]'));

function handleTabClick(e) {
  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });
  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", false);
  });
  e.currentTarget.setAttribute("aria-selected", true)

const {id} = e.currentTarget;

// const tabPanel = document.querySelector(`aria-labelledby="${id}"`)
// tabPanel.hidden = false;
const tabPanel = tabPanels.find(panel => {
    if(panel.getAttribute('aria-labelledby') === id) {
        return true
    }
});
tabPanel.hidden = false;

}

tabButtons.forEach((button) => {
  button.addEventListener("click", handleTabClick);
});
