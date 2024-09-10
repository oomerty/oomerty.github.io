`strict mode`

const currLocale = "en-US";

const header = document.querySelector('#header');
const headerCover = document.querySelector('.header-cover');
const headerPFP = document.querySelector('.header-pfp');
const headerDetails = document.querySelector('.header-details');
const headerExperiences = document.querySelector('.header--experiences');
const nav = document.querySelector('.nav');
const navBtn = document.querySelectorAll('.nav-btn');

const aboutSection = document.querySelector('.about');
const aboutContact = document.querySelector('.about--contact');

const experiencesSection = document.querySelector('.experiences');

const educationSection = document.querySelector('.education');

const certificationSection = document.querySelector('.certification');
const credentialBTN = document.querySelectorAll('.certification-btn');

let now = new Date();

/* Navigation */
const stickyHeader = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    header.classList?.remove(`sticky-header`);
    headerCover.style.display = "inline-block";
    headerPFP.style.display = "inline-block";
    headerDetails.style.display = "inline-block";
    headerExperiences.style.display = "flex";
  } else {
    header.classList.add(`sticky-header`);
    header.style.backgroundColor = "var(--gray-9)";
    headerCover.style.display = "none";
    headerPFP.style.display = "none";
    headerDetails.style.display = "none";
    headerExperiences.style.display = "none";
  }
};

const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0.1,
  rootMargin: `-163px`,
});

headerObserver.observe(aboutSection);

navBtn.forEach(el => el.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior: "smooth"});
}));

/* Add Experiences */
let experiences = {
  expUnilocked: {
    type: "experience",
    title: "Lead Product Designer",
    organization: "Unannouced Project",
    logo: "img/placeholder.png",
    current: true,
    dateStart: new Date("Feb 1 2023"),
    environment: ["Full Time", "Ankara, Türkiye", "Remote"],
    desc: "Currently, I hold the position of lead product designer for an innovative social media website project that is currently under wraps. In this role, I am entrusted with spearheading the design direction and user experience strategies to ensure the seamless integration of cutting-edge features and intuitive functionalities.#As a pivotal member of the project, I am committed to driving forward the vision of this unannounced social media venture and delivering a compelling platform that revolutionizes the way users engage and connect online.",
    skills: ["Design Thinking", "Figma", "User Interfaces", "User Experience", "Communication", "User Oriented Design", "Product Design"],
    link: null,
  },
  expTufan: {
    type: "experience",
    title: "Software Developer",
    organization: "Tufan Elektromobil",
    logo: "img/akdeniz_tufan_elektromobil_logo.jpg",
    current: false,
    dateStart: new Date("Oct  1 2022"),
    dateEnd: new Date("May  1 2023"),
    environment: ["Part Time", "Antalya, Türkiye", "In Office"],
    desc: "Currently, I hold the position of lead product designer for an innovative social media platform project that is currently under wraps. In this role, I am entrusted withspearheading the design direction and user experience strategies to ensure the seamless integration of cutting-edge features and intuitive functionalities.#Our team relies on Figma as our primary design tool, utilizing it to create every aspect of the platform. From user experiences to professional-grade tools, our designs are iterated upon based on feedback gathered from professionals across diverse sectors worldwide.",
    skills: ["CSS", "Python", "PyQt", "JavaScript", "Communication", "Teamwork"],
    link: "https://www.linkedin.com/company/akdeniz-tufan-elektromobil/",
  },
  expCrowdin: {
    type: "experience",
    title: "Volunteer Translator",
    organization: "Crowdin",
    logo: "img/smallscale-logo-cWhite.png",
    current: false,
    dateStart: new Date("Feb 16 2016"),
    environment: ["Volunteer"],
    desc: "As a dedicated volunteer translator and proofreader, I have had the privilege of contributing to a diverse range of projects, including globally recognized platforms such as Minecraft, Discord, Hypixel, Tapatalk, Musixmatch, Alfred Camera, and many others.",
    skills: ["Localization", "Translation", "English"],
    link: "https://crowdin.com/profile/ByTheEfsane",
  },
  expAkdeniz: {
    type: "education",
    title: "Electrical Electronics Enginerring Student",
    organization: "Akdeniz University",
    logo: "img/akdeniz_universitesi_logo.jpg",
    current: true,
    dateStart: new Date("Sept  1 2021"),
    environment: ["Bachelor's Degree", "Antalya, Türkiye", "Engineering Faculty"],
    link: "https://www.linkedin.com/school/akdeniz-universitesi/",
  }
}

Object.values(experiences).forEach(function (position) {
  headerExperiences.insertAdjacentHTML("beforeend", `
  <div class="experiences-card border radius-7">
    <img src=${position.logo.replace(`"`, "")} alt="${position.organization} Organization's Logo" class="experiences-card-img border radius-4">
    <p class="body-sm text-secondary">${position.type}${position.current ? " - Current" : ""}</p>
    <p class="subtitle text-title">${position.title}</p>
    <p class="body text-primary">${position.organization}</p>
  </div>
`)
})

Object.values(experiences).forEach(function (experience) {
  if (experience.type === "experience") {
    experiencesSection.insertAdjacentHTML("beforeend", `
    <div class="experiences--card radius-7 surface">
      <div class="experiences--1">
        <img src=${experience.logo} alt="${experience.organization} Organization's Logo" class="experience--logo radius-4 border">
        <h3 class="experience--title subtitle text-title">${experience.title}</h3>
        <p class="experience--organization body text-primary">${experience.organization}</p>
      </div>

      <div class="experience--2">
        <p class="experience--duration body text-secondary">${experience.dateStart.toLocaleString(currLocale, { month: 'short' })} ${experience.dateStart.getFullYear()} - ${experience.dateEnd ? experience.dateEnd.toLocaleString(currLocale, { month: 'short' }) : "Ongoing"} ${experience.dateEnd ? experience.dateEnd.getFullYear(): ""} • ${experience.dateEnd ? Math.floor((experience.dateEnd - experience.dateStart) / (1000 * 60 * 60 * 24 * 30)) : Math.floor((new Date() - experience.dateStart) / (1000 * 60 * 60 * 24 * 30))} months</p>
        <p class="experience--position-location body text-secondary">${experience.environment.join(" • ")}</p>
      </div>

      <p class="experience--desc body text-primary">${experience.desc.replace("#", "<br><br>")}</p>

      <div class="experience--3">
        <h4 class="body-strong text-primary">Skills</h4>
        <p class="body text-primary">${experience.skills?.join(", ")}</p>
      </div>
    </div>
  `)
  }
})

Object.values(experiences).forEach(function (education) {
  if (education.type === "education") {
    educationSection.insertAdjacentHTML("beforeend", `
    <div class="experiences--card radius-7 surface">
      <div class="experiences--1">
        <img src=${education.logo} alt="${education.organization} Organization's Logo" class="experience--logo radius-4 border">
        <h3 class="experience--title subtitle text-title">${education.title}</h3>
        <p class="experience--organization body text-primary">${education.organization}</p>
      </div>

      <div class="experience--2">
        <p class="experience--duration body text-secondary">${education.dateStart.toLocaleString(currLocale, { month: 'short' })} ${education.dateStart.getFullYear()} - ${education.dateEnd ? experience.dateEnd.toLocaleString(currLocale, { month: 'short' }) : "Ongoing"} ${education.dateEnd ? education.dateEnd.getFullYear(): ""}</p>
        <p class="experience--position-location body text-secondary">${education.environment.join(" • ")}</p>
      </div>
    </div>
  `)
  }
})

/* Add Contact Information */
let contact =  {
  linkedIn: {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/omer-mert-eryigit/",
    type: "link",
  },
  github: {
    title: "GitHub",
    link: "https://github.com/oomerty",
    type: "link",
  },
  dribbble: {
    title: "Dribbble",
    link: "https://dribbble.com/BYTH/shots",
    type: "link",
  },
  website: {
    title: "Personal Website",
    link: "https://oomerty.github.io/",
    type: "link",
  },
  email: {
    title: "Email Adress",
    link: "mailto:omereryigit2017@hotmail.com",
    type: "envelope",
  },
  phone: {
    title: "Personal Phone Number",
    link: "tel:+905549706565",
    type: "phone",
  }
}

Object.values(contact).forEach(function (contactInfo) {
  aboutContact.insertAdjacentHTML("beforeend", `
  <div class="about--contact-card">
    <p class="body text-primary">${contactInfo.title}</p>
    <a href=${contactInfo.link} class="body text-secondary contact-link"><i class="ph-bold ph-${contactInfo.type}"></i> Link</a>
  </div>
`)
})

/* Add Certifications */
let certificates = {
  htmlcssJonas: {
    title: "HTML and CSS",
    source: "Udemy",
    publishDate: new Date("Apr 27 2022"),
    id: "UC-544987ac-8426-4085-a81a-c7612cbfb059",
    skills: ["CSS", "HTML", "Responsive Web Design", "User Oriented Design", "Web Development"],
  },
  uiuxZTM: {
    title: "UI/UX and Figma",
    source: "Udemy",
    publishDate: new Date("Sept 16 2022"),
    id: "UC-b0047967-fe9c-46ac-918b-70c8e35d91c6",
    skills: ["User Experience", "Product Design", "User Interface", "User Oriented Design", "Figma"],
  },
  webDevMeta: {
    title: "Introduction to Front-End Development",
    source: "Meta",
    publishDate: new Date("March  9 2024"),
    id: "NAFRF2EN44WE",
    skills: ["CSS", "HTML", "Responsive Web Design", "User Oriented Design", "Web Development"],
  }
}

Object.values(certificates).forEach(function (certificate) {
  certificationSection.insertAdjacentHTML("beforeend", `
  <div class="certification--card radius-7 surface">
    <div class="certification--1">
      <h3 class="certification--title subtitle text-title">${certificate.title}</h3>
      <p class="certification--organization body text-primary">${certificate.source}</p>
      <p class="certification--duration body text-secondary">Publish Date: ${certificate.publishDate.toLocaleString(currLocale, { month: 'short' })} ${certificate.publishDate.getFullYear()}</p>
    </div>

    <div class="certification--2">
      <h4 class="body-strong text-primary">Skills</h4>
      <p class="body text-primary">${certificate.skills.join(", ")}</p>
    </div>

    <button onclick="location.href='https://www.udemy.com/certificate/${certificate.id}/';" class="certification-btn body"><i class="ph-bold ph-certificate"></i> Show Credentials</button>
  </div>
  `)
})