const bootText = document.getElementById("boot-text");
const bootSequenceDiv = document.getElementById("boot-sequence");
const content = document.getElementById("content");

const bootSequence = [
  "ANNIHILATION INDUSTRIES (AI) TERMINAL",
  "COPYRIGHT 2021-2024 AI",
  "-SERVER 1-",
  "",
  "Initializing...",
  "Welcome...",
];

const menuItems = {
  main: [
    { text: "Personal Info", action: "personalInfo" },
    { text: "Skills", action: "skills" },
    { text: "Projects", action: "projects" },
    { text: "Contact", action: "contact" },
  ],
};

const sections = {
  personalInfo: `
                <h2>> Personal Info</h2>
    <div style="display: flex; align-items: center; margin-top: 20px;">
      <img src="./images/headshot2.jpg" alt="Sarthak Maiti" style="width: 150px; height: 150px; border-radius: 10%; border: 2px solid var(--highlight-color); margin-right: 20px;">
      <div>
        <p style="font-size: 1.2em; margin: 0;"><b>Name:</b> Sarthak Maiti</p>
        <p style="font-size: 1.2em; margin: 5px 0;"><b>Status:</b> 4th Year Student at KIIT University</p>
        <p style="font-size: 1.2em; margin: 5px 0;"><b>Specialization:</b> Btech in Computer Science and System Engineering</p>
        <p style="font-size: 1.2em; margin: 5px 0;"><b>Location:</b> Bhubaneshwar, India</p>
      </div>
    </div>
    <div style="margin-top: 20px;">
      <h3 style="color: var(--highlight-color); text-decoration: underline;">Professional Summary:</h3>
      <p style="line-height: 1.6;">
        Full Stack Developer and Android Developer with solid experience in front-end and back-end development.
        Skilled in a range of programming languages and frameworks, delivering reliable software solutions.
        Comfortable working independently or as part of a team.
      </p>
    </div>
            `,
  skills: `
                <h2>> Skills</h2>
  <div id="skills-content" style="display: flex; flex-wrap: wrap;">
    <div class="skill-category" style="flex: 1; padding: 10px; margin: 5px; border: 1px solid var(--highlight-color); border-radius: 10px;">
      <h3 style="color: var(--highlight-color); text-decoration: underline;">Languages</h3>
      <ul>
        <li>- C</li>
        <li>- C++</li>
        <li>- Java</li>
        <li>- Python</li>
      </ul>
    </div>
    <div class="skill-category" style="flex: 1; padding: 10px; margin: 5px; border: 1px solid var(--highlight-color); border-radius: 10px;">
      <h3 style="color: var(--highlight-color); text-decoration: underline;">Frontend</h3>
      <ul>
        <li>- HTML</li>
        <li>- CSS</li>
        <li>- Tailwind CSS</li>
        <li>- JavaScript</li>
        <li>- React</li>
        <li>- React-Native</li>
        <li>- Expo</li>
        <li>- Next.js</li>
      </ul>
    </div>
    <div class="skill-category" style="flex: 1; padding: 10px; margin: 5px; border: 1px solid var(--highlight-color); border-radius: 10px;">
      <h3 style="color: var(--highlight-color); text-decoration: underline;">Backend</h3>
      <ul>
        <li>- Node.js</li>
        <li>- Express.js</li>
      </ul>
    </div>
    <div class="skill-category" style="flex: 1; padding: 10px; margin: 5px; border: 1px solid var(--highlight-color); border-radius: 10px;">
      <h3 style="color: var(--highlight-color); text-decoration: underline;">Database</h3>
      <ul>
        <li>- MySQL</li>
        <li>- MongoDB</li>
      </ul>
    </div>
  </div>
            `,
  projects: `
                <h2>> Projects</h2>
    <div class="project">
      <a href="https://github.com/Jason-Ampere/StickerSmash" target="_blank"><h3>🎨 Sticker Smash</h3></a>
      <p><b>Tech Stack:</b> React Native, Expo</p>
      <p>A dynamic Android app for adding stickers to images, providing users with a fun and interactive experience.</p>
    </div>
    <hr>
    <div class="project">
      <a href="https://github.com/Jason-Ampere/GestureCalc" target="_blank"><h3>✋ GestureCalc</h3></a>
      <p><b>Tech Stack:</b> Python, OpenCV, Streamlit, Google Generative AI, Mediapipe</p>
      <p>Gesture-based mathematical solver utilizing hand gestures to interpret and solve equations in real-time.</p>
    </div>
    <hr>
    <div class="project">
      <a href="https://github.com/Jason-Ampere/VistaHaven" target="_blank"><h3>🖼 Wallpaper Engine</h3></a>
      <p><b>Tech Stack:</b> React Native, Expo</p>
      <p>A seamless mobile app for browsing and setting a wide variety of wallpapers on devices, enhancing user personalization.</p>
    </div>
    <hr>
    <div class="project">
        <a href="https://github.com/Jason-Ampere/sarthak-rayban" target="_blank"><h3>🕶️ Rayban</h3></a>
        <p><b>Tech Stack:</b> HTML, CSS, Javascript</p>
        <p>Created a funny rayban webpage using html, css and javascript</p>
    </div>
            `,
  contact: `
                <h2>> Contact</h2>
  <p>Email: sarthak.unity2017@gmail.com</p>
  <h3 id="socials">Connect with Me:</h3>
  <div id="social-links" style="display: flex; align-items: center; margin-top: 20px;">
    <a href="https://github.com/Jason-Ampere" target="_blank" title="GitHub" style="margin-right: 15px;">
      <img src="./images/github.png" alt="GitHub" style="width: 40px; height: 40px; transition: transform 0.3s;">
    </a>
    <a href="https://www.linkedin.com/in/sarthakmaiti1234/" target="_blank" title="LinkedIn">
      <img src="./images/linkedin.png" alt="LinkedIn" style="width: 40px; height: 40px; transition: transform 0.3s;">
    </a>
  </div>
  <p style="margin-top: 20px;">If you have any questions or just want to get in touch, use the form below:</p>
  <form id="contact-form" action="https://formspree.io/f/movanvqa" method="POST">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required style="width: 100%; padding: 5px; margin-bottom: 10px;"><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required style="width: 100%; padding: 5px; margin-bottom: 10px;"><br>
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" required style="width: 100%; padding: 5px; margin-bottom: 10px;"></textarea><br>
    <button type="submit" style="background-color: var(--highlight-color); border: none; padding: 10px 20px; color: #000; cursor: pointer; transition: background-color 0.3s;">Send</button>
  </form>
                <script>
                  document.getElementById("contactForm").addEventListener("submit", function(event) {
                    event.preventDefault(); // Prevent form from submitting the default way
                    fetch(this.action, {
                      method: 'POST',
                      body: new FormData(this),
                      headers: { 'Accept': 'application/json' }
                    }).then(response => {
                      if (response.ok) {
                        alert("Thank you for your message!");
                        this.reset(); // Reset the form
                      } else {
                        alert("Oops! There was a problem.");
                      }
                    }).catch(error => {
                      alert("Oops! There was a problem.");
                      console.error('Error:', error);
                    });
                  });
                </script>
            `,
};

let bootSequenceSkipped = false;

async function typeWriter(text, element, delay = 50) {
  for (let i = 0; i < text.length; i++) {
    if (bootSequenceSkipped) break;
    element.innerHTML += text.charAt(i);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  element.innerHTML += "<br>";
}

async function runBootSequence() {
  document.addEventListener("keydown", handleSpacebarPress);

  for (const line of bootSequence) {
    if (bootSequenceSkipped) break;
    await typeWriter(line, bootText);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Trigger fade-out effect
  bootSequenceDiv.classList.add("hidden");

  // Wait for the fade-out to complete
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Hide the boot sequence after fade-out
  bootSequenceDiv.style.display = "none";

  // Trigger fade-in effect for the main menu
  loadMainMenu();
  content.classList.add("visible");

  // Remove event listener after the sequence is complete
  document.removeEventListener("keydown", handleSpacebarPress);
}

function handleSpacebarPress(event) {
  if (event.code === "Space") {
    bootSequenceSkipped = true;

    // Trigger fade-out effect immediately
    bootSequenceDiv.classList.add("hidden");

    // Hide the boot sequence immediately
    bootSequenceDiv.style.display = "none";

    // Trigger fade-in effect for the main menu immediately
    loadMainMenu();
    content.classList.add("visible");

    // Remove event listener to avoid triggering it again
    document.removeEventListener("keydown", handleSpacebarPress);
  }
}


function loadMainMenu() {
  console.log("Loading main menu");
  content.innerHTML = "<h1>> Main Menu</h1>";
  const menu = document.createElement("ul");
  menuItems.main.forEach((item) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "> " + item.text;
    button.setAttribute("onclick", `handleMenuClick('${item.action}')`);
    button.classList.add("menu-item");
    li.appendChild(button);
    menu.appendChild(li);
  });
  content.appendChild(menu);
  content.innerHTML += '<div id="cursor"></div>';
}

function handleMenuClick(action) {
  console.log("Button clicked: ", action);
  switch (action) {
    case "personalInfo":
    case "skills":
    case "projects":
    case "contact":
      loadSection(action);
      break;
  }
}

function loadSection(sectionName) {
  content.innerHTML = sections[sectionName];
  addReturnButton();
}

function addReturnButton() {
  const returnButton = document.createElement("button");
  returnButton.textContent = "> Return to Main Menu";
  returnButton.onclick = () => {
    loadMainMenu();
  };
  content.appendChild(returnButton);
}

document.addEventListener("DOMContentLoaded", runBootSequence);
