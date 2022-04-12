import { Component, OnInit } from '@angular/core';
import { TimelineCardService } from '../services/timeline-card.service';
import { TimelineCard } from '../models/timeline-card.model';
import * as $ from 'jquery';
import { faMapLocationDot, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-cv-timeline',
  templateUrl: './cv-timeline.component.html',
  styleUrls: ['./cv-timeline.component.scss']
})
export class CvTimelineComponent implements OnInit {
  faMapLocationDot = faMapLocationDot;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  timelineCards! : TimelineCard[]; 
  
  constructor(private timeLineService: TimelineCardService ) { 
  }

  ngOnInit(): void {
    this.timelineCards = this.timeLineService.getTimelineCards();

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  function isElementInViewport(el:any) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
  }

}
  
