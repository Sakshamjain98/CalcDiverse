document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector("body").classList.add("loaded");
    }, 500);
});

// The FAQ Data
const faq = [
    {
        question: "What is CalcDiverse?",
        answer: "CalcDiverse is a collection of customized calculators for various mathematical aspects. It allows individuals with basic web development knowledge to create unique calculators and contribute through pull requests.",
    },
    {
        question: "What technologies are used in CalcDiverse?",
        answer: "CalcDiverse is built using HTML, CSS, and JavaScript.",
    },
    {
        question: "How can I access the live project?",
        answer: 'The live project is accessible at <a href="https://calcdiverse.netlify.app/" target="_blank">CalcDiverse</a>',
    },
    {
        question: "How can I get started with contributing to CalcDiverse?",
        answer: 'To contribute, you can fork the repository, clone it to your local system, and open the `index.html` file in your browser. Detailed contribution steps are provided in the "Getting Started" section.',
    },
    {
        question: "What should I do if I find a bug or want to add a feature?",
        answer: 'You can raise an issue, and after it\'s assigned to you, you can proceed to make the changes. Follow the steps outlined in the "Getting Started" section for contributing.',
    },
    {
        question: "How can I add a new calculator to CalcDiverse?",
        answer: "To add a new calculator, create a folder in the Calculators directory, put your calculator's code files in it, and add a README.md file with a description, tech stacks, and screenshots. Update the main `index.html` file to include your calculator's link in the box section.",
    },
    {
        question: "What are the contributing guidelines for CalcDiverse?",
        answer: 'You can find the contributing guidelines in the "Contributing Guidelines" section. It covers the development process, bug fixes, improvements, and how to build for Click-The-Edible-Game.',
    },
    {
        question: "Is there a Code of Conduct for contributors?",
        answer: 'Yes, this project follows a Code of Conduct. All contributors are expected to uphold this code, and it can be found in the "Code Of Conduct" section.',
    },
    {
        question: "Has CalcDiverse been part of any Open Source Programs?",
        answer: "Yes, CalcDiverse has been part of Open Source Programs, including IWOC2024, JWOC2024, SWOC2024 and GSSOC2024.",
    },
    {
        question: "Who is the Project Admin for CalcDiverse?",
        answer: "The Project Admin for CalcDiverse is Rakesh Roshan.",
    },
    {
        question: "Can anyone contribute to CalcDiverse?",
        answer: 'Yes, contributions of any kind from anyone are always welcome, as mentioned in the "Contributing is fun" section.',
    },
    {
        question: "How can I celebrate my successful pull request?",
        answer: 'After your pull request is merged successfully, you are encouraged to celebrate your success, as mentioned in the "Celebrate your success" section.',
    },
];

// Create the accordion
const faqContainer = document.querySelector(".faqs_container");

faq.forEach((item) => {
    // Create the FAQ item
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq");

    // Create the title and toggle button
    faqItem.innerHTML = `
        <div class="faq_title">
            <span>${item.question}</span>
            <div class="plusBtn">
                <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#68bff1" viewBox="0 0 16 16" stroke-width="2" stroke="#68bff1">
                    <path fill-rule="evenodd" d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 010 1.5h-6.5v6.5a.75.75 0 01-1.5 0v-6.5H.75a.75.75 0 010-1.5h6.5V.75A.75.75 0 018 0z"/>
                </svg>
            </div>
        </div>
    `;

    // Create the content section
    const faqContent = document.createElement("div");
    faqContent.classList.add("faq_content");
    faqContent.innerHTML = item.answer;
    faqContent.style.height = "0px"; // Start collapsed
    faqItem.appendChild(faqContent);

    // Append to the container
    faqContainer.appendChild(faqItem);

    // Toggle content
    faqItem.querySelector(".faq_title").addEventListener("click", () => {
        const allFaqs = document.querySelectorAll(".faq_content");
        allFaqs.forEach((content) => {
            if (content !== faqContent) {
                content.style.height = "0px"; // Collapse others
                content.parentNode.querySelector(".plus").style.transform = "none"; // Reset plus icon
            }
        });

        // Toggle current FAQ
        const isOpen = faqContent.style.height !== "0px";
        faqContent.style.height = isOpen ? "0px" : `${faqContent.scrollHeight}px`;
        faqItem.querySelector(".plus").style.transform = isOpen ? "none" : "rotate(45deg)";
    });
});