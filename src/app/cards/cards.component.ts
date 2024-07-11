import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CorsoService } from '../service/corso.service';
import { CorsoDto } from '../../model/CorsoDto';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  constructor(private corsoService: CorsoService){
    
  }
  ngOnInit(): void {
    this.corsoService.getCorsi().subscribe((corsi:CorsoDto[])=>{
      console.log(corsi)
      this.cards=corsi;
    })
  }
  cards = [];

}
