const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.classList.add("show");

            }, entry.target.dataset.delay);

        }

    });

}, {
    threshold: 0.4
});

document.querySelectorAll(".process-step").forEach((step, index) => {

    step.dataset.delay = index * 250;

    observer.observe(step);

});