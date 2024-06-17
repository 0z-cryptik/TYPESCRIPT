export interface Character {
  name: string;
  catchphrase: string;
}

//globals
declare global {
  interface Album {
    name: string;
    artiste: string;
  }

  namespace myNameSpace {
    type value = string;
  }
}


