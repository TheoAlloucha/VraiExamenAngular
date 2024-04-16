export class MainPicture {
  id? : number;
  src? : string;
  alt? : string;
  voyage? : string;


  constructor(id?: number, src?: string, alt?: string, voyage?: string) {
    this.id = id;
    this.src = src;
    this.alt = alt;
    this.voyage = voyage;
  }
}
