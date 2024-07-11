export class CategoriaDto {
    private _id: number;
    private _nome: string;
  
    constructor(id: number, nome: string) {
      this._id = id;
      this._nome = nome;
    }
  
    // Metodi getter e setter
  
    public get id(): number {
      return this._id;
    }
  
    public set id(id: number) {
      this._id = id;
    }
  
    public get nome(): string {
      return this._nome;
    }
  
    public set nome(nome: string) {
      this._nome = nome;
    }
  }
  