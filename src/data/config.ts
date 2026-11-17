const config = {
  title: "sumen | tech larper",
  description: {
    long: "learn my amazing adventure of larp and larp potential over time.",
    short:
      "let's larp",
  },
  keywords: [
    "sumen",
    "portfolio",
    "full time larper",
    "arch linux btw",
    "claude development",
    "powerpoint animations"
  ],
  author: "sumen",
  email: "sumen113k@gmail.com",
  site: "https://larp.global.ssl.fastly.net",

  // for github stars button
  githubUsername: "sumen113",
  githubRepo: "larpy",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/naresh-khatri/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/sumen113",
  },
};
export { config };
