function page(path) {
    if (typeof path !== 'string') return;
    location.pathname = path || '/';
}