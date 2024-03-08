export interface ArticleIntroduction {
  "id": number,
  "sequence": number,
  "img": string,
  "tags": [],
  "title": string,
  "abstract": string,
  "author": {
    "name": string,
    "date": string,
    "avatar": string
  }
}

export interface PopularArticle {
  "id": number,
  "type": string,
  "title": string,
  "date": string,
  "tags": [],
  "author": author
}

export interface author {
  "name": string,
  "avatar": string
}
