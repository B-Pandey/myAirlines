import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dis-like',
  templateUrl: './dis-like.component.html',
  styleUrls: ['./dis-like.component.css']
})
export class DisLikeComponent implements OnInit {
disLikeButtonLabel: string="DisLikes";
disLikeCounter: number = 25;
increaseDisLike(){
  this.disLikeCounter++;
} 
  constructor() { }

  ngOnInit(): void {
  }

}
