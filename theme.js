const btn = document.querySelector('.header__theme');

function initialState(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

initialState('dark__theme');

function toggleTheme() {
    if (localStorage.getItem('theme') == 'light__theme') {
        initialState('dark__theme');
    } else {
        initialState('light__theme');
     }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTheme();
});
