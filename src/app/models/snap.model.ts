export class Snap {

  imageUrl!: string;
  title!: string;
  description!: string
  creationDate!: Date;
  snaps!: number;
  location?: string;

  constructor(imageUrl: string, title: string, description: string, snaps: number, location?: string) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.creationDate = new Date();
    this.snaps = snaps;
    if (location != null) {
      this.location = location;
    }
  }
}
