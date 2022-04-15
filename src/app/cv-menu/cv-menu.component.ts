import { Component, OnInit } from '@angular/core';
import { faPersonSkiing, faUser, faGraduationCap, faMedal, faListUl, faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv-menu',
  templateUrl: './cv-menu.component.html',
  styleUrls: ['./cv-menu.component.scss']
})
export class CvMenuComponent implements OnInit {

  faPersonSkiing = faPersonSkiing;
  faUser = faUser;
  faGraduationCap = faGraduationCap;
  faMedal = faMedal;
  faListUl = faListUl;
  faFutbol = faFutbol;
  
  constructor() { }

  ngOnInit(): void {
    
    /*
    var active:boolean = false;
    const el = document.getElementById('mainNav') as HTMLElement;
    //si la souris passe sur le menu on l'affiche
    const navMenuHeight:any = $('#mainNav').height();
    
    document.addEventListener('mousemove', logKey);
    function logKey(e:any) {
      if(navMenuHeight >= e.clientY){
        console.log("on hover");
        active = true
        $('#mainNav').fadeIn(500);
      }
      else{
        console.log("on hover out");
        $('#mainNav').fadeOut(500);
        active = false;
      }
    }*/
      
    
    

    $(document).ready(function() {
      $('a[href*="#"]').bind('click', function(e) {
          e.preventDefault(); // prevent hard jump, the default behavior
  
          var target:any = $(this).attr("href"); // Set the target as variable

          // perform animated scrolling by getting top-position of target-element and set it as scroll target
          $('html, body').stop().animate({
              scrollTop: $(target)?.offset()?.top
          }, 600, function() {
              location.hash = target; //attach the hash (#jumptarget) to the pageurl
          });
  
          return false;
      });
    });

    //if(active == false){
      var prevScrollpos = window.pageYOffset;
      $(window).scroll(function() {
        var currentScrollPos = window.pageYOffset;
        var scrollDistance:any = $(window).scrollTop();
        
        if (prevScrollpos > currentScrollPos) {
          $('#mainNav').fadeIn(500);
        } else {
          $('#mainNav').fadeOut(500);
        }
        prevScrollpos = currentScrollPos;

        $('.page-section').each(function(i) {
          if ($(this).position().top <= scrollDistance+1) {
              $('.navigation a.active').removeClass('active');
              $('.navigation a').eq(i).addClass('active');
          }
        });
      });
    //}
  }

}
