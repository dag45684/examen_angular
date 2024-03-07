import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lapsos',
  templateUrl: './lapsos.component.html',
  styleUrls: ['./lapsos.component.css']
})
export class LapsosComponent {

  @Input() interact!: number;
  show_this: string = `${this.interact/60*60} : ${<number>this.interact/60} : ${<number>this.interact%60} `

//  h: number = this.interact/60*60
//  m: number = this.interact/60
//  s: number = this.interact % 60
// show_this: string = `${this.h > 0 ? this.h : 0} : ${this.m > 0 ? this.m : 0} : ${this.s > 0 ? this.s : this.interact} `
}
