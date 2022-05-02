import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cv-hobbies',
  templateUrl: './cv-hobbies.component.html',
  styleUrls: ['./cv-hobbies.component.scss']
})
export class CvHobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var video:HTMLVideoElement;
    $('#video').ready(function(){
      $('#video').trigger('click');
      console.log('hobbies clicked');
    });
    
    function playVid(videoToPlay:HTMLVideoElement) {
      //videoToPlay.muted = true;
      videoToPlay.volume = 0.1;
      videoToPlay.play();
    }
    function pauseVid(videoToPause:HTMLVideoElement) {
      videoToPause.pause();
    }

    $('.hobbiesVideo').each(function(i) {
      //si la video est hover
      $(this).mouseover(function(){//play video
        var id:any = $(this).attr('id');
        video = <HTMLVideoElement>document.getElementById(id);
        console.log(id);
        playVid(video);
      });
      $(this).mouseout(function(){
        //pause video
        pauseVid(video);
      });
    });

  }

  playSound(event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    console.log(idAttr);
    var video = <HTMLVideoElement>document.getElementById(idAttr);
    video.volume = 0.5;
  }
}
