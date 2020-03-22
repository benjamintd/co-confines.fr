interface IRecord {
  id: string;
  Titre: string;
  Thèmes: string[];
  Lien: string;
  Description: string;
  "Image de couverture": Array<{
    thumbnails: {
      small: {
        width: number;
        height: number;
        url: string;
      };
      large: {
        width: number;
        height: number;
        url: string;
      };
    };
  }>;
}

type IFilters = { [key: string]: boolean };
