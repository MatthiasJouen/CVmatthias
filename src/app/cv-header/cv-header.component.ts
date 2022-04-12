import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss']
})
export class CvHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* -------------------- ITEMS MENU ----------------------------- */
    var allItemsMenu = document.querySelectorAll('.navmenu ul li a');
    allItemsMenu.forEach(item => {
      item.addEventListener("click", function(e){
        for(var i = 0; i < allItemsMenu.length; i++){
          allItemsMenu[i].classList.remove("active");
        }
        item.classList.add("active");
      })
    })
    /* ------------------------------------------------------------- */
    
    /* ------------------- END JS ---------------------------------- */
  }

}
