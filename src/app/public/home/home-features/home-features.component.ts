import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-home-features',
  templateUrl: './home-features.component.html',
  styles: [
  ],
})
export class HomeFeaturesComponent implements OnInit {
  features;

  constructor() { }

  ngOnInit(): void {
    this.features = [
          {
           title: 'Immobilier',
           description: 'Création de visites à 360 ° de maisons et espaces',
           icon: 'assets/img/home--v1.png'
          },
          {
           title: 'Atteindre ses objectifs',
           description: 'informez vos clients sur vos prix, les vignettes et les descriptions de produits',
           icon: 'assets/img/images.jpeg'
          },
          {
           title: 'Éducation',
           description: ' Transmettez des informations sur le programme, à travers la narration et les médias',
           icon: 'assets/img/management-school-college-computer-software-thesis-school-icon-svg.jpg'
          }
         ];
        }
  }


