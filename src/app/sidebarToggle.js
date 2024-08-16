const container = document.getElementById('container');
const sidebar = document.getElementById('sidebar');
export default function toggleSidebar() {
    sidebar.classList.toggle('closed');
      // Adjust grid-template-columns when sidebar is closed
      if (sidebar.classList.contains("closed")) {
        container.style.gridTemplateColumns = "0 1fr";
    } else {
        container.style.gridTemplateColumns = "250px 1fr";
    }
}