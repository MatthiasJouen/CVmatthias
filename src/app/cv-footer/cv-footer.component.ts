import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-footer',
  templateUrl: './cv-footer.component.html',
  styleUrls: ['./cv-footer.component.scss']
})
export class CvFooterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('#js-copyright-years').text('2022-' + (new Date()).getFullYear());
      });
  }
}
