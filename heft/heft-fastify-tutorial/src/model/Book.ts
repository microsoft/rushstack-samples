export class Book {
  public id: number | undefined;
  public title: string;
  public author: string;

  public constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public static list(): Book[] {
    return [
      new Book('Moby Dick', 'Herman Melville'),
      new Book('Rabbit Island', 'Elvira Navarro'),
      new Book('Accelerando', 'Charles Stross')
    ];
  }
}
