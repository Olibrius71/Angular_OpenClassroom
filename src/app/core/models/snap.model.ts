export class Snap {

  id!: number;
  imageUrl!: string;
  title!: string;
  description!: string
  creationDate!: Date;
  snaps!: number;
  location?: string;

  constructor(id: number, imageUrl: string, title: string, description: string, snaps: number, location?: string) {
    this.id = id;
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
