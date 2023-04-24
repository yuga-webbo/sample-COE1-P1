import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
  // template: ``,
  // styles: [` `]
})
export class TestComponent implements OnInit {
  public siteUrl=window.location.href;
  public successClass="text-success";
  public hasErr=true;
  public hasError=false;
  public isDisabled=false;
  public myId="testId"
  public name="Yuga";
  public isSpecial=true;
  public messageClass={
    "text-success": !this.hasError,
    "text-danger":  this.hasError, 
    "text-special": this.isSpecial 
  }

  public highColor="orange";
  public titleStyle={
    color:"blue",
    fontStyle:"italic"
  }
  public gree="";
  public greet="";
  public greeting="";
  onClick(){
    console.log("Welcome to the Website");
    this.greet="Good Morning";
  }
  onClic(event: { type: string; }){
    console.log(event);
    this.greeting=event.type;
  }

  logMessage(value: any){
    console.log(value);
  }

  public nam="";

  public displayname=false;
  public display=true;

  public colore="red";
  public colors=["red","blue","yellow","green"];
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "hello "+ this.name;
  }
  

  @Input() public parentData: any;
  @Input('parentData') public nan: any;
  @Output() messageToEmit=new EventEmitter<string>();
  sendMessageToParent(){
    this.messageToEmit.emit("Het yhe Like");
  }

  public quert="Nice scenario of the day";
  public sem="normalisation";
  public person={
    firstname:"Sam",
    lastname:"Andrew"
  }

  public date=new Date();
}
