export class ImageService {
  private images: string[] = [];

  addData(input: string) {
    this.images.push(input);
  }
  getData() {
    return this.images;
  }
}