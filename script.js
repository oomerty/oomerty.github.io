`strict mode`

const currLocale = "en-US";
const headerExperiences = document.querySelector('.header--experiences');
const aboutContact = document.querySelector('.about--contact');
const experiencesSection = document.querySelector('.experiences');

let now = new Date();
console.log(now.getUTCMonth());

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
    linkedin: null,
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
    skills: ["Design Thinking", "Figma", "User Interfaces", "User Experience", "Communication", "User Oriented Design", "Product Design"],
    linkedin: "https://www.linkedin.com/company/akdeniz-tufan-elektromobil/",
  },
  expAkdeniz: {
    type: "education",
    title: "Electrical Electronic Enginerring Student",
    organization: "Akdeniz University",
    logo: "img/akdeniz_universitesi_logo.jpg",
    current: true,
    dateStart: new Date("Sept  1 2021"),
    environment: ["Bachelor's Degree", "Antalya, Türkiye", "Engineering Faculty"],
    linkedin: "https://www.linkedin.com/school/akdeniz-universitesi/",
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
        ${experience.skills.forEach(el => `<p>burayı yap!</p>`)}
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