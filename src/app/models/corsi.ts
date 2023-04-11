export interface Corso {
id: number
titolo: string
durata: number
costo:number
docente:string
data_partenza: string
n_partecipanti?: number
}

export interface ListaCorsi {
    corsi: Corso[]
}

export interface DettaglioCorso {
    data: Corso
}