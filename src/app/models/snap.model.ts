export class Snap {

  imageUrl: string;
  title: string;
  description: string
  creationDate: Date;
  snaps: number;

  constructor(imageUrl: string, title: string, description: string) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.creationDate = new Date();
    this.snaps = 0;
  }
}
