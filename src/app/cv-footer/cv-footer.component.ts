import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cv-footer',
  templateUrl: './cv-footer.component.html',
  styleUrls: ['./cv-footer.component.scss']
})
export class CvFooterComponent implements OnInit {
  faGithub = faGithub;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.current-year').text("- "+new Date().getFullYear());
      });
  }
}
