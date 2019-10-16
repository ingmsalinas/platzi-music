import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss']
})
export class IntroPage implements OnInit {
  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };
  slides = [
    {
      imageSrc: 'assets/img/logo.png',
      imageAlt: 'Platzi Music Logo',
      title: 'Escucha tu música',
      subtitle: 'EN CUALQUIER LUGAR',
      description: 'Los mejores albumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.',
      icon: 'play'
    },
    {
      imageSrc: 'assets/img/logo.png',
      imageAlt: 'Platzi Music Logo',
      title: 'Disfruta de nuestro reproductor',
      subtitle: 'DE VIDEOS INCREIBLES',
      description: 'Entra al modo video de nuestro reproductor y obtén acceso a documentales y making offs increíbles.',
      icon: 'videocam'
    },
    {
      imageSrc: 'assets/img/logo.png',
      imageAlt: 'Platzi Music Logo',
      title: 'Accede al exclusivo',
      subtitle: 'MODO DEPORTE',
      description: `Crea una playlist basada en tu actividad física. <br />
       Ten reportes y acceso a lo que necesites, integrado con GPS!`,
      icon: 'bicycle'
    }
  ];
  constructor(private router: Router, private storage: Storage) {}

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {}
}
