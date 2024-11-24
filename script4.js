function toggleNav() {
    const navLinks = document.querySelector(".nav-links");
    const nav = document.querySelector("nav");

    // Toggle the sidebar visibility
    navLinks.classList.toggle("open");
}

// While scrolling, navbar shows up
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var navbar = document.querySelector('nav');

    if (window.scrollY + 100 > header.offsetHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

// Data for the slides
const slides = [
    {
        background: "assets/images/carousel/2.png",
        title: "Welcome to Parisian Elegance Staffing",
        description: "Expert staffing and bartending services tailored to your event’s unique needs.",
        link: "#about"
    },
    {
        background: "assets/images/carousel/3.png",
        title: "Welcome to Parisian Elegance Staffing",
        description: "Seamless, professional support for any occasion, ensuring a flawless experience.",
        link: "#about"
    },
    {
        background: "assets/images/carousel/1.png",
        title: "Welcome to Parisian Elegance Staffing",
        description: "Professional staffing and bartending, ensuring flawless events every time.",
        link: "#about"
    }
];

// Function to create the slides
function createSlides() {
    const carousel = document.getElementById('imageCarousel');

    slides.forEach(slide => {
        const slideContainer = document.createElement('div');
        slideContainer.classList.add('imgwds');

        const slideImage = document.createElement('div');
        slideImage.classList.add('slide-image');
        slideImage.setAttribute('data-background', slide.background);
        slideImage.style.background = `url('${slide.background}') center center / cover no-repeat`;

        const slideDescr = document.createElement('div');
        slideDescr.classList.add('descr');

        const slideTitle = document.createElement('h1');
        slideTitle.classList.add('montserrat-font');
        slideTitle.innerText = slide.title;

        const slideText = document.createElement('p');
        slideText.innerText = slide.description;

        const slideButton = document.createElement('button');
        slideButton.classList.add('about');

        const slideLink = document.createElement('a');
        slideLink.setAttribute('href', slide.link);
        slideLink.innerText = 'Read More';

        slideButton.appendChild(slideLink);
        slideDescr.appendChild(slideTitle);
        slideDescr.appendChild(slideText);
        slideDescr.appendChild(slideButton);
        slideContainer.appendChild(slideImage);
        slideContainer.appendChild(slideDescr);
        carousel.appendChild(slideContainer);
    });
}

// Call the function to create the slides
createSlides();

// Image carousel
let imgwdsIndex = 0;
const imgwds = document.querySelectorAll('#imageCarousel .imgwds');
const totalImgwds = imgwds.length;

function showImgwds(index) {
    imgwds.forEach(imgwds => imgwds.style.display = 'none'); // Hide all imgwds
    imgwds[index].style.display = 'block'; // Show the selected imgwds
}

function nextImgwds() {
    imgwdsIndex = (imgwdsIndex + 1) % totalImgwds;
    showImgwds(imgwdsIndex);
}

// Show the first imgwds initially
showImgwds(imgwdsIndex);

// Change imgwds every 3 seconds
setInterval(nextImgwds, 3000);


// FAQ section
document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;

        if (panel.classList.contains('active')) {
            // Hide the panel
            panel.classList.remove('active');
            button.classList.remove('active');
        } else {
            // Hide all other panels
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.accordion').forEach(b => b.classList.remove('active'));

            // Show the clicked panel
            panel.classList.add('active');
            button.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    // Open and close modal logic
    const modal = document.getElementById('emailModal');
    const openButton = document.getElementById('openModalButton');
    const closeButton = document.querySelector('#emailModal .close');

    openButton.addEventListener('click', () => {
        modal.style.display = 'flex'; // Show modal
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide modal
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Close modal when clicking outside
        }
    });

    // Email sending logic
    document.getElementById('emailForm').addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        let params = {
            senderName: document.getElementById('name').value,
            senderEmail: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        }

        try {
            emailjs.send("service_9ssb8lx", "template_9pqk1qi", params).then(function (message) {
                document.getElementById('emailForm').reset();
                alert("Email sent successfully");
            });

            modal.style.display = 'none'; // Close modal on success

        } catch (error) {
            alert('Failed to send email. Please try again.');
            console.error('EmailJS Error:', error);
        }
    });
});

