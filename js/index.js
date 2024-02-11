const logo = document.querySelector(".logo");
const sidebarDesktop = document.querySelector(".sidebar-desktop");
const sidebarMobile = document.querySelector(".sidebar-mobile");
const example = document.querySelector(".example");

logo.addEventListener("click", (e) => {
    e.preventDefault();
    // sidebarMobile.classList.toggle("hidden")
    sidebarDesktop.classList.toggle("hidden");
    sidebarDesktop.classList.toggle("absolute")
    sidebarDesktop.classList.toggle("w-[50%]")
    sidebarDesktop.classList.toggle("animate-bounce delay-150 duration-300")
    sidebarDesktop.classList.remove("col-span-1")
    // sidebarMobile.classList.remove("block")
    console.log("helloooooo");
})