import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  

//Gestion d'une clé localStorage pour stocker les données de l'utilisateur
const colorKey = 'preferedColor';
if(localStorage.getItem('preferedColor') === null) {
  localStorage.setItem(colorKey, 'red');
}

//function pour retourner au top de la page
$(window).scroll(function(){
  var scrollDistance:any = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
});

$('.back-to-top').click(function(){
  $("html, body").animate({ 
    scrollTop: 0 
  }, 600);
});