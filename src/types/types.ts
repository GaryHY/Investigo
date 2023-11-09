// TODO: Il me faut utiliser cela dans mon programme pour rendre mon programme safe en fait.
export type TMainContent = string;

export interface ISearchResult {
    firstname: string,
    lastname: string,
    status: string,
}

// Union type or enum ?
export enum MainContent {
    Rapport = "rapport",
    Mandat = "mandat",
    Devis = "devis",
    Facture = "facture",
}

export interface IFolder {
    id: string,
    firstname: string,
    lastname: string,
    client: string,
    ville: string,
    status: string,
}
