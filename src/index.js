import './styles/main.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

import toggleSidebar from './app/sidebarToggle';

  // toggles between sidebar
document.getElementById('sidebar-toggle-btn').addEventListener('click', ()=> {
    toggleSidebar();
    document.getElementById('sidebar-toggle-btn').style.display = 'none';
})
document.getElementById('close-sidebar').addEventListener('click', ()=> {
    toggleSidebar();
    document.getElementById('sidebar-toggle-btn').style.display = 'block';
})

