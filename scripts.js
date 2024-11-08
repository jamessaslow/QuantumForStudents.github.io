/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Sticky Top Banner with Title and Navigation */
.top-banner {
    width: 100%;
    background-color: #002366;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.site-title {
    font-size: 1.8em;
    font-weight: 700;
}

.nav-links {
    display: flex;
    gap: 1.5em;
    list-style: none;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1em;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #00bcd4;
}

/* About Us Section */
.about-section {
    padding: 2em;
    background-color: #f4f4f9;
    text-align: center;
    width: 100%;
    max-width: 1200px;
}

.about-section h2 {
    font-size: 2em;
    color: #0047ab;
    margin-bottom: 0.5em;
}

.about-section p {
    font-size: 1.1em;
    line-height: 1.6;
}

/* Main Container */
.main-container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin-top: 1em;
}

/* Sidebar */
.sidebar {
    width: 250px;
    padding: 2em;
    background-color: #002366;
    color: white;
    position: sticky;
    top: 80px; /* Position below the navbar */
    height: 100vh;
}

.sidebar h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
}

.unit-list {
    list-style: none;
}

.unit-list li {
    font-size: 1.2em;
    margin-bottom: 0.5em;
}

.unit-list li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.unit-list li a:hover {
    color: #00bcd4;
    padding-left: 10px;
}

/* Content Area */
.content {
    flex-grow: 1;
    padding: 2em;
}

/* Category Boxes */
.category-box {
    margin-bottom: 2em;
    padding: 1.5em;
    background-color: #e0e0f8;
    border-radius: 8px;
    box-shadow: 
