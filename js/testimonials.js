/*==================================================
    TESTIMONIALS SLIDER
==================================================*/

const testimonials = [

{
    initials: "SP",
    name: "Sarah Patel",
    role: "HR Director • Manufacturing",
    text: "MESH transformed our employee benefits programme and provided expert guidance throughout every stage. Their advice was independent, transparent and always focused on our business needs."
},

{
    initials: "RK",
    name: "Rahul Khanna",
    role: "Managing Director • Construction",
    text: "From policy reviews to claims support, the MESH team has been incredibly responsive. We finally feel confident that our business is properly protected."
},

{
    initials: "AM",
    name: "Aisha Mehta",
    role: "Finance Manager • Healthcare",
    text: "Professional, knowledgeable and always available when we need them. MESH simplified our insurance portfolio into something we actually understand."
}

];

let current = 0;

const text = document.getElementById("testimonial-text");
const name = document.getElementById("testimonial-name");
const role = document.getElementById("testimonial-role");
const avatar = document.getElementById("testimonial-avatar");

const dots = document.querySelectorAll(".testimonial-dots span");

const card = document.querySelector(".testimonial-card");

function updateTestimonial(index){

    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    setTimeout(()=>{

        text.textContent = testimonials[index].text;
        name.textContent = testimonials[index].name;
        role.textContent = testimonials[index].role;
        avatar.textContent = testimonials[index].initials;

        dots.forEach(dot=>dot.classList.remove("active"));
        dots[index].classList.add("active");

        card.style.opacity = 1;
        card.style.transform = "translateY(0)";

    },250);

}

function nextTestimonial(){

    current++;

    if(current>=testimonials.length){

        current=0;

    }

    updateTestimonial(current);

}

function previousTestimonial(){

    current--;

    if(current<0){

        current=testimonials.length-1;

    }

    updateTestimonial(current);

}

document.querySelector(".next").onclick = nextTestimonial;

document.querySelector(".prev").onclick = previousTestimonial;

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        updateTestimonial(current);

    });

});

let slider = setInterval(nextTestimonial,7000);

card.addEventListener("mouseenter",()=>{

    clearInterval(slider);

});

card.addEventListener("mouseleave",()=>{

    slider = setInterval(nextTestimonial,7000);

});

updateTestimonial(0);