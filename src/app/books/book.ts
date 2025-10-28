export interface Book {
    id: string;
    title: string;
    volumeInfo: {
      title: string;
      authors: Array<string>;
    };
}