import {MainPicture} from "./main-picture";
import {Picture} from "./picture";

export class Voyage {
  id? : number;
  destination? : string;
  lattitude? :  number;
  longitude? : number;
  type? : string;
  mainPicture? : MainPicture;
  pictures? : Picture[];
  nbStar? : number;


  constructor(id?: number, destination?: string, lattitude?: number, longitude?: number, type?: string, mainPicture?: MainPicture, pictures?: Picture[], nbStar?: number) {
    this.id = id;
    this.destination = destination;
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.type = type;
    this.mainPicture = mainPicture;
    this.pictures = pictures;
    this.nbStar = nbStar;
  }
}
