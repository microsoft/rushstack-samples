export class Book {
  public id: number | undefined;
  public title: string;
  public author: string;

  public constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  // In real life, Book would be an interface to MongoDB, or DynamoDB,
  // or a relational database of some kind. For this simple example,
  // we'll return a fake static list of books.
  public static list(): Book[] {
    return [
      new Book('Moby Dick', 'Herman Melville'),
      new Book('Rabbit Island', 'Elvira Navarro'),
      new Book('Accelerando', 'Charles Stross')
    ];
  }
}
