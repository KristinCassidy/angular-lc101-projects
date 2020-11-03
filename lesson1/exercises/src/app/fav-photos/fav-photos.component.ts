import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://apod.nasa.gov/apod/image/2011/HalfSunProm_Colacurcio_960.jpg';
  image3 = 'https://apod.nasa.gov/apod/image/2010/PhobosDeimosOrbitTimesAnnotatedcopy.jpg';

  constructor() { }

  ngOnInit() {
  }

}