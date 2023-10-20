export type TMainContent = string;

export interface ISearchResult {
    firstname: string,
    lastname: string,
    status: string,
}

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
