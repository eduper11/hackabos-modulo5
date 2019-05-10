import { Component } from "@angular/core";

@Component({
  selector: "sn-about",
  templateUrl: "./about.component.html",
  styles: [
    `
      li {
        list-style-type: none;
      }
      i {
        width: 20px;
      }
    `
  ]
})
export class AboutComponent {
  infoItems = {
    title: "Hey there!! 👋",
    presentation: "Hello, I'm Edu",
    description:
      "I'm a fullstack develope student but I love frontend and create beautiful sites. Follow me in my social networks:  ",
    contact: "If you want to contact me, you can send an email to: ",
    email: "eduper11@gmail.com"
  };

  links = [
    { icon: "fab fa-linkedin-in", URL: "www.linkedin.com", name: "LinkedIn" },
    { icon: "fab fa-github", URL: "www.github.com", name: "GitHub" },
    { icon: "fas fa-folder-open", URL: "www.portfolio.com", name: "Portfolio" },
    { icon: "fab fa-twitter", URL: "www.twitter.com", name: "Twitter" }
  ];
}
