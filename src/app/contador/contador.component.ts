import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  curr_time: number = 0;
  nums: number[] = [];
  ok: boolean = false;

  async initCounter(){
    while (this.ok){
      await new Promise ( e => setTimeout(e, 1000));
      this.curr_time += 1;
    }
  }

  record(){
    if (!this.ok){
      let a = this.curr_time
      let temp = new Array(this.nums.length)
      for (let i=0; i<this.nums.length; i++){
        temp[i] = this.nums[i]
      }
      temp[this.nums.length] = a;
      this.nums = temp;
    }
  }

  pause(){
    this.ok = false;
  }

  play(){
    this.ok = true;
  }

}
