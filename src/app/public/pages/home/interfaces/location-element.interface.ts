export interface LocationElement {
  code: string;
  address: string;
  location: string;
  image:string;
  url: Urls
}

interface Urls {
  maps: string;
  waze: string;
}


