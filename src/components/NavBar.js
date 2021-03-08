function NavBar() {
    return(
        <nav class="navbar navbar-expand-sm bg-transparent navbar-dark">
        <a routerLink="/" class="navbar-brand" href="index.html">Bill Goers</a>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
             <a class="nav-link" href="index.html">About Me</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;