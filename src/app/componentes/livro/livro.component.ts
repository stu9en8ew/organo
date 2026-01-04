import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito
  }

  livro = {
    titulo : "As ondas",
    autoria : "Virgina Woolf",
    favorito: false,
    imagem: ""
  }

}
