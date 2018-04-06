function page(path) {
    if (typeof path !== 'string' || (location.pathname == path || '/')) return;
    location.pathname = path || '/';
}