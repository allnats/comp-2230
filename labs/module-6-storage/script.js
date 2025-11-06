const DO_NOT_TRACK = navigator.doNotTrack === "1" ? true : false;

/**
 * Displays the top banner by removing the 'hide' class from it.
 * Uses a short delay to ensure the transition is triggered.
 */
function showTopBanner() {
    if (!sessionStorage.getItem("isTopBannerClosed")) {
        const banner = document.getElementById("top-banner");
        banner.classList.remove("hide");
        setTimeout(function () {
            banner.classList.add("show");
        }, 50); // Delay to ensure the transition is triggered
    }
}

/**
 * Displays the footer banner by removing the 'hide' class from it.
 */
function showFooterBanner() {
    if (!getCookie("isFooterBannerClosed")) {
        document.getElementById("footer-banner").classList.remove("hide");
    }
}

/**
 * Displays the modal by removing the 'hide' class from it.
 */
function showModal() {
    if (!localStorage.getItem("isModalClosed")) {
        document.getElementById("modal").classList.remove("hide");
    }
}

/**
 * Hides the modal by adding the 'hide' class to it.
 */
function closeModal() {
    document.getElementById("modal").classList.add("hide");
    // Set the local storage flag.
    if (!DO_NOT_TRACK) {
        localStorage.setItem("isModalClosed", "true");
    }
}

/**
 * Hides the top banner by adding the 'hide' class to it.
 */
function closeTopBanner() {
    document.getElementById("top-banner").classList.add("hide");
    // Set the session storage flag.
    if (!DO_NOT_TRACK) {
        sessionStorage.setItem("isTopBannerClosed", "true");
    }
}

/**
 * Hides the footer banner by adding the 'hide' class to it.
 */
function closeFooterBanner() {
    document.getElementById("footer-banner").classList.add("hide");
    // Set the cookie storage flag.
    if (!DO_NOT_TRACK) {
        setCookie("isFooterBannerClosed", "true");
    }
}

function setCookie(key, value, days = 3) {
    let expireDate = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expireDate = date.toUTCString();
    }

    document.cookie = `${key}=${value};expires=${expireDate};path=/`;
}

function getCookie(name) {
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1];
}

function deleteCookie(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
}

function clearAllData() {
    localStorage.removeItem("isModalClosed");
    sessionStorage.removeItem("isTopBannerClosed");
    deleteCookie("isFooterBannerClosed");

    console.debug("Deleted all user Data!");
}

// Event listeners to close the modal, top banner, and footer banner when 'x' is clicked
document.getElementById("modal").addEventListener("click", closeModal);
document.getElementById("top-banner").addEventListener("click", closeTopBanner);
document
    .getElementById("footer-banner")
    .addEventListener("click", closeFooterBanner);

document
    .getElementById("clear-data-button")
    .addEventListener("click", clearAllData);

// Show the footer banner after a delay of 1 second
setTimeout(showFooterBanner, 1000);

// Show the top banner after a delay of 2 seconds
setTimeout(showTopBanner, 2000);

// Show the modal after a delay of 4 seconds
setTimeout(showModal, 4000);
