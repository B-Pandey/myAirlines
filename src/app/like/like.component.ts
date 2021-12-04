import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
likeButtonLabel: string ="Likes";
likeCounter: number= 25;
increaseLike(){
  this.likeCounter++;
} 
constructor() { }
 
  ngOnInit(): void {
  }

}
