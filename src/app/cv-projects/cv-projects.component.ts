import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-projects',
  templateUrl: './cv-projects.component.html',
  styleUrls: ['./cv-projects.component.scss']
})
export class CvProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*
    * ---------------------------------------------------------
    * --------------- modalDfg DONT FALL GUYS --------------------
    * ---------------------------------------------------------
    */
    const buttonDfg:any = document.querySelector("#btnDfg");
		const closeDfg:any = document.querySelector("#closeDfg");
		const modalDfg:any = document.querySelector("#modalDfg");
		const videoDfg:any = document.querySelector("#videoDfg");

    //open modalDfg on click
		buttonDfg.addEventListener('click', ()=>{
			modalDfg.style.visibility = "visible";
			modalDfg.style.opacity = 1;

      videoDfg.play();
      videoDfg.volume = 0.1;
		});

    //closeDfg modalDfg on click of closeDfg buttonDfg
		closeDfg.addEventListener('click', ()=>{
			modalDfg.style.visibility = "hidden";
			modalDfg.style.opacity = 0;

			videoDfg.pause();
			videoDfg.currentTime = 0;
		});
    /*
    * ---------------------------------------------------------
    * -------------------- modalDfg TOP QUIZ ---------------------
    * ---------------------------------------------------------
    */
    const buttonTq:any = document.querySelector("#btnTq");
		const closeTq:any = document.querySelector("#closeTq");
		const modalTq:any = document.querySelector("#modalTq");
		const videoTq:any = document.querySelector("#videoTq");

    //open modalTq on click
		buttonTq.addEventListener('click', ()=>{
			modalTq.style.visibility = "visible";
			modalTq.style.opacity = 1;
      videoTq.play();
      videoTq.volume = 0.1;
		});

    //closeDfg modalTq on click of closeTq buttonTq
		closeTq.addEventListener('click', ()=>{
			modalTq.style.visibility = "hidden";
			modalTq.style.opacity = 0;

			videoTq.pause();
			videoTq.currentTime = 0;
		});
    /*
    * ---------------------------------------------------------
    * -------------------- COMMON ON BOTH ---------------------
    * ---------------------------------------------------------
    */
    //closeDfg modalDfg or modalTq on click outside of modals
    window.onclick = function(event) {
      if (event.target == modalDfg) {
        modalDfg.style.visibility = "hidden";
        videoDfg.pause();
			  videoDfg.currentTime = 0;
      }
      if (event.target == modalTq) {
        modalTq.style.visibility = "hidden";
        videoTq.pause();
			  videoTq.currentTime = 0;
      }
    }
  }

}
