import { Component, OnInit } from '@angular/core';
import { calcData } from '../calcData';
import { HttpClientService } from '../service/http-client.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  num1!:string;
  num2!:string;
  num3!:string;
  op!:string;
  ans!:any;
  data=new calcData('','');
  
  constructor(private httpclientservice:HttpClientService) { }
   

  ngOnInit(): void {
  }
  add(){
    this.op="+";
    this.onSubmit();
  }
  sub(){
    this.op="-";
    this.onSubmit();
  }
  mult(){
    this.op="*";
    this.onSubmit();
  }
  div(){
    this.op="/";
    this.onSubmit();
  }

  onSubmit()
  {
    this.ans=[this.data.num1,this.data.num2,this.op];
    console.log(this.ans);
    this.httpclientservice.getResult(this.ans).subscribe(res=>{this.num3=res});
      
  }
}
