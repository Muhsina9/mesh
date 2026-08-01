/*==================================================
    MESH DIGITAL CONCIERGE
    PART 1 OF 3
==================================================*/

/*==================================================
    ELEMENTS
==================================================*/

const meshToggle = document.getElementById("meshToggle");

const meshChat = document.getElementById("meshChat");

const meshClose = document.getElementById("meshClose");

const meshScreen = document.getElementById("meshScreen");

const whatsappBtn = document.getElementById("meshWhatsapp");

const callBtn = document.getElementById("meshCall");

/*==================================================
    STATE
==================================================*/

let currentScreen = "home";

let historyStack = [];

/*==================================================
    OPEN
==================================================*/

meshToggle.addEventListener("click", () => {

    meshChat.classList.add("active");

});

/*==================================================
    CLOSE
==================================================*/

meshClose.addEventListener("click", () => {

    meshChat.classList.remove("active");

});

/*==================================================
    FOOTER
==================================================*/

whatsappBtn.addEventListener("click", () => {

    window.open(
        "https://wa.me/911234567890",
        "_blank"
    );

});

callBtn.addEventListener("click", () => {

    alert("Connect this button to your office phone number.");

});

/*==================================================
    NAVIGATION
==================================================*/

function goTo(screen){

    historyStack.push(currentScreen);

    currentScreen = screen;

    render();

}

function goHome(){

    historyStack = [];

    currentScreen = "home";

    render();

}

function goBack(){

    if(historyStack.length===0){

        goHome();

        return;

    }

    currentScreen = historyStack.pop();

    render();

}

/*==================================================
    PART 2 OF 3
    RENDER ENGINE
==================================================*/

function render(){

    switch(currentScreen){

        case "home":
            renderHome();
            break;

        case "employee":
        case "commercial":
        case "risk":
        case "claims":
            renderService(currentScreen);
            break;

        case "consultation":
            renderConsultation();
            break;

        default:
            renderHome();

    }

}

/*==================================================
    HOME
==================================================*/

function renderHome(){

    const home = conciergeData.home;

    let cards = "";

    home.services.forEach(service=>{

        cards += `

        <button class="mesh-service"

            onclick="goTo('${service.id}')">

            <div class="mesh-service-left">

                <div class="mesh-service-icon">

                    <i class="${service.icon}"></i>

                </div>

                <div>

                    <span class="mesh-service-title">

                        ${service.title}

                    </span>

                    <span class="mesh-service-text">

                        ${service.description}

                    </span>

                </div>

            </div>

            <div class="mesh-arrow">

                <i class="fa-solid fa-chevron-right"></i>

            </div>

        </button>

        `;

    });

    meshScreen.innerHTML = `

        <div class="mesh-welcome mesh-fade">

            <section class="mesh-hero">

                <div class="mesh-hero-icon">

                    👋

                </div>

                <h2>

                    ${home.title}

                </h2>

                <p>

                    ${home.description}

                </p>

            </section>

            <div class="mesh-service-list">

                ${cards}

            </div>

        </div>

    `;

}

/*==================================================
    SERVICE SCREEN
==================================================*/

function renderService(id){

    const page = conciergeData[id];

    let items = "";

    page.items.forEach(item=>{

        items += `

        <div class="mesh-list-item">

            <i class="${item.icon}"></i>

            <div>

                <strong>

                    ${item.title}

                </strong>

            </div>

        </div>

        `;

    });

    meshScreen.innerHTML = `

        <div class="mesh-fade">

            <div class="mesh-nav">

                <div class="mesh-nav-left">

                    <button
                        class="mesh-nav-btn"
                        onclick="goBack()">

                        <i class="fa-solid fa-arrow-left"></i>

                    </button>

                    <button
                        class="mesh-nav-btn"
                        onclick="goHome()">

                        <i class="fa-solid fa-house"></i>

                    </button>

                </div>

            </div>

            <section class="mesh-section">

                <h2>

                    ${page.title}

                </h2>

                <p>

                    ${page.subtitle}

                </p>

            </section>

            <div class="mesh-card">

                <div class="mesh-list">

                    ${items}

                </div>

            </div>

            <div class="mesh-cta">

                <h3>

                    Need expert advice?

                </h3>

                <p>

                    Our advisors can help you find the right insurance solution.

                </p>

                <button
                    class="mesh-cta-btn"
                    onclick="goTo('consultation')">

                    Book Consultation

                </button>

            </div>

        </div>

    `;

}

/*==================================================
    PART 3 OF 3
    CONSULTATION
==================================================*/

function renderConsultation(){

    const page = conciergeData.consultation;

    meshScreen.innerHTML = `

        <div class="mesh-fade">

            <div class="mesh-nav">

                <div class="mesh-nav-left">

                    <button
                        class="mesh-nav-btn"
                        onclick="goBack()">

                        <i class="fa-solid fa-arrow-left"></i>

                    </button>

                    <button
                        class="mesh-nav-btn"
                        onclick="goHome()">

                        <i class="fa-solid fa-house"></i>

                    </button>

                </div>

            </div>

            <section class="mesh-section">

                <h2>

                    ${page.title}

                </h2>

                <p>

                    ${page.subtitle}

                </p>

            </section>

            <form class="mesh-form">

                <div class="mesh-group">

                    <label>Full Name</label>

                    <input
                        class="mesh-input"
                        type="text"
                        placeholder="Enter your full name">

                </div>

                <div class="mesh-group">

                    <label>Company</label>

                    <input
                        class="mesh-input"
                        type="text"
                        placeholder="Company name">

                </div>

                <div class="mesh-group">

                    <label>Email</label>

                    <input
                        class="mesh-input"
                        type="email"
                        placeholder="you@example.com">

                </div>

                <div class="mesh-group">

                    <label>Phone</label>

                    <input
                        class="mesh-input"
                        type="tel"
                        placeholder="+91">

                </div>

                <div class="mesh-group">

                    <label>How can we help?</label>

                    <textarea
                        class="mesh-textarea"
                        placeholder="Tell us a little about your requirements..."></textarea>

                </div>

                <button
                    type="submit"
                    class="mesh-btn mesh-btn-primary">

                    Request Consultation

                </button>

            </form>

        </div>

    `;

}

/*==================================================
    INITIALISE
==================================================*/

render();

meshToggle.addEventListener("click", () => {

    render();

});