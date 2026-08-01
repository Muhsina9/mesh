const solutions = {

    benefits:{

        image:"assets/images/solutions/employee-benefits.jpg",

        category:"Employee Benefits",

        title:"Protect your people with flexible employee benefits.",

        description:"Attract, retain and support employees through tailored health, life and wellness programmes designed around your workforce.",

        features:[

            "Group Medical Insurance",
            "Group Life Insurance",
            "Wellness Programmes",
            "Employee Assistance Plans"

        ]

    },

    commercial:{

        image:"assets/images/solutions/commercial-insurance.jpg",

        category:"Commercial Insurance",

        title:"Protect every aspect of your business with confidence.",

        description:"Comprehensive insurance solutions designed to protect your buildings, assets, equipment and daily operations.",

        features:[

            "Property Insurance",
            "Liability Cover",
            "Cyber Insurance",
            "Marine & Transit"

        ]

    },

    risk:{

        image:"assets/images/solutions/risk-advisory.jpg",

        category:"Risk Advisory",

        title:"Identify risk before it becomes a problem.",

        description:"Our consultants help organisations reduce risk, improve resilience and make informed strategic decisions.",

        features:[

            "Risk Assessments",
            "Claims Support",
            "Business Continuity",
            "Strategic Consulting"

        ]

    }

};

const container = document.getElementById("solution-content");

const buttons = document.querySelectorAll(".tab-btn");

function loadSolution(key){

    const item = solutions[key];

    container.style.opacity = "0";
    container.style.transform = "translateY(20px)";

    setTimeout(()=>{

        container.innerHTML = `

        <div class="solution-showcase">

            <div class="solution-image">

                <img src="${item.image}" alt="${item.category}">

            </div>

            <div class="solution-details">

                <span class="solution-label">

                    ${item.category}

                </span>

                <h3>

                    ${item.title}

                </h3>

                <p>

                    ${item.description}

                </p>

                <ul>

                    ${item.features.map(feature=>`

                        <li>

                            <i class="fa-solid fa-check"></i>

                            ${feature}

                        </li>

                    `).join("")}

                </ul>

                <a href="#contact" class="mesh-btn">

                    Speak to an Advisor

                </a>

            </div>

        </div>

        `;

        container.style.opacity="1";
        container.style.transform="translateY(0)";

    },250);

}

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        buttons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        loadSolution(button.dataset.tab);

    });

});

loadSolution("benefits");