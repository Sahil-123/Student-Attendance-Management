import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {

  data:any;
  name:any;

  constructor() { }

  ngOnInit(): void {
    
    if(window.history.state){
      this.data=window.history.state;
      this.name=this.data.Data[0].username;
      console.log(this.name)
    }else{
      this.data=false;
    }
  }

}
