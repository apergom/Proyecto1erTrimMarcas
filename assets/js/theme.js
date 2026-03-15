document.addEventListener("DOMContentLoaded", () => {
    const darkToggleBtn = document.getElementById("dark-toggle");
    if (!darkToggleBtn) return;

    const setButtonState = (isDark) => {
        darkToggleBtn.setAttribute("aria-pressed", String(isDark));
        darkToggleBtn.textContent = isDark ? "Light mode" : "Dark mode";
    };

    // Load saved preference
    const savedTheme = localStorage.getItem("theme");
    const isDarkSaved = savedTheme === "dark";

    document.body.classList.toggle("dark-mode", isDarkSaved);
    setButtonState(isDarkSaved);

    darkToggleBtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        setButtonState(isDark);
    });
});