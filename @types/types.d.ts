interface IRecord {
  id: string;
  Titre: string;
  Thèmes: string[];
  "Type de contenu": string;
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
  "Last modified time": string;
  likes: number;
  isLiked: boolean;
}

type IFilters = { [key: string]: boolean };
