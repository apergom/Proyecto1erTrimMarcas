
document.addEventListener("DOMContentLoaded", () => {
    


    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("postsContainer");
    const formGlobalMessage = document.getElementById("formGlobalMessage");
    const filterCategory = document.getElementById("filterCategory");
    const filterStatus = document.getElementById("filterStatus");

    // If blog manager is not on this page, exit gracefully.
    if (!postForm || !postsContainer || !formGlobalMessage || !filterCategory || !filterStatus) {
        return;
    }

    const fields = {
        title: document.getElementById("postTitle"),
        category: document.getElementById("postCategory"),
        status: document.getElementById("postStatus"),
        content: document.getElementById("postContent"),
    };

    const fieldMessages = {
        title: document.getElementById("titleMessage"),
        category: document.getElementById("categoryMessage"),
        status: document.getElementById("statusMessage"),
        content: document.getElementById("contentMessage"),
    };

    let posts = [];

    const validators = {
        title: (value) => {
            if (!value.trim()) return "Title is required.";
            if (value.trim().length < 3) return "Title must be at least 3 characters.";
            return "";
        },
        category: (value) => (!value ? "Category is required." : ""),
        status: (value) => (!value ? "Status is required." : ""),
        content: (value) => {
            if (!value.trim()) return "Content is required.";
            if (value.trim().length < 20) return "Content must be at least 20 characters.";
            return "";
        },
    };

    const setFieldState = (fieldKey, errorMessage) => {
        const input = fields[fieldKey];
        const msg = fieldMessages[fieldKey];

        if (!input || !msg) return;

        input.classList.remove("input-error", "input-success");
        msg.classList.remove("message-error", "message-success");

        if (errorMessage) {
            input.classList.add("input-error");
            msg.classList.add("message-error");
            msg.textContent = errorMessage;
        } else {
            input.classList.add("input-success");
            msg.classList.add("message-success");
            msg.textContent = "Looks good.";
        }
    };

    const validateField = (fieldKey) => {
        const value = fields[fieldKey].value;
        const error = validators[fieldKey](value);
        setFieldState(fieldKey, error);
        return !error;
    };

    const validateForm = () => Object.keys(fields).map(validateField).every(Boolean);

    Object.keys(fields).forEach((key) => {
        fields[key].addEventListener("input", () => validateField(key));
        fields[key].addEventListener("change", () => validateField(key));
    });

    const createPostCard = (post) => {
        const { id, title, category, status, content, createdAt } = post;
        const article = document.createElement("article");

        article.className = "blog-article post-card";
        article.dataset.id = String(id);
        article.dataset.category = category;
        article.dataset.status = status;

        article.innerHTML = `
      <h4 class="blog-article__title">${title}</h4>
      <p class="blog-article__desc"><strong>Category:</strong> ${category}</p>
      <p class="blog-article__desc"><strong>Status:</strong> ${status}</p>
      <p class="blog-article__desc">${content}</p>
      <p class="blog-article__desc"><small>Created: ${createdAt}</small></p>
      <button type="button" class="blog-form__button post-delete-btn" data-action="delete">Delete</button>
    `;

        postsContainer.appendChild(article);
    };

    const applyFilters = () => {
        const categoryValue = filterCategory.value;
        const statusValue = filterStatus.value;
        const cards = postsContainer.querySelectorAll(".post-card");

        cards.forEach((card) => {
            const categoryMatch = categoryValue === "all" || card.dataset.category === categoryValue;
            const statusMatch = statusValue === "all" || card.dataset.status === statusValue;
            card.classList.toggle("hidden", !(categoryMatch && statusMatch));
        });
    };

    postForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validateForm()) {
            formGlobalMessage.textContent = "Please fix the highlighted fields.";
            formGlobalMessage.classList.add("message-error");
            formGlobalMessage.classList.remove("message-success");
            return;
        }

        const formData = new FormData(postForm);
        const data = Object.fromEntries(formData.entries());
        const { title, category, status, content } = data;

        const newPost = {
            id: Date.now(),
            title: title.trim(),
            category,
            status,
            content: content.trim(),
            createdAt: new Date().toLocaleString("en-GB"),
        };

        posts = [...posts, newPost];
        createPostCard(newPost);
        applyFilters();

        postForm.reset();

        Object.keys(fields).forEach((key) => {
            fields[key].classList.remove("input-error", "input-success");
            fieldMessages[key].classList.remove("message-error", "message-success");
            fieldMessages[key].textContent = "";
        });

        formGlobalMessage.textContent = "Post added successfully.";
        formGlobalMessage.classList.add("message-success");
        formGlobalMessage.classList.remove("message-error");
    });

    postsContainer.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        if (!target.matches('[data-action="delete"]')) return;

        const card = target.closest(".post-card");
        if (!card) return;

        const { id } = card.dataset;
        posts = posts.filter((post) => String(post.id) !== id);

        if (card.parentElement) card.remove();

        formGlobalMessage.textContent = "Post deleted.";
        formGlobalMessage.classList.add("message-success");
        formGlobalMessage.classList.remove("message-error");
    });

    filterCategory.addEventListener("change", applyFilters);
    filterStatus.addEventListener("change", applyFilters);
}
);