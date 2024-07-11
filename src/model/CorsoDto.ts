import { CategoriaDto } from "./CategoriaDto";


export class CorsoDto {
  private _id: number;
  private _nomeCorso: string;
  private _descrizioneBreve: string;
  private _descrizioneCompleta: string;
  private _durata: number;
  private _imgUrl: string;
  private _categoria: CategoriaDto;

  constructor(
    id: number,
    nomeCorso: string,
    descrizioneBreve: string,
    descrizioneCompleta: string,
    durata: number,
    imgUrl: string,
    categoria: CategoriaDto
  ) {
    this._id = id;
    this._nomeCorso = nomeCorso;
    this._descrizioneBreve = descrizioneBreve;
    this._descrizioneCompleta = descrizioneCompleta;
    this._durata = durata;
    this._imgUrl = imgUrl;
    this._categoria = categoria;
  }

  // Metodi getter e setter

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get nomeCorso(): string {
    return this._nomeCorso;
  }

  public set nomeCorso(nomeCorso: string) {
    this._nomeCorso = nomeCorso;
  }

  public get descrizioneBreve(): string {
    return this._descrizioneBreve;
  }

  public set descrizioneBreve(descrizioneBreve: string) {
    this._descrizioneBreve = descrizioneBreve;
  }

  public get descrizioneCompleta(): string {
    return this._descrizioneCompleta;
  }

  public set descrizioneCompleta(descrizioneCompleta: string) {
    this._descrizioneCompleta = descrizioneCompleta;
  }

  public get durata(): number {
    return this._durata;
  }

  public set durata(durata: number) {
    this._durata = durata;
  }

  public get imgUrl(): string {
    return this._imgUrl;
  }

  public set imgUrl(imgUrl: string) {
    this._imgUrl = imgUrl;
  }

  public get categoria(): CategoriaDto {
    return this._categoria;
  }

  public set categoria(categoria: CategoriaDto) {
    this._categoria = categoria;
  }
}
