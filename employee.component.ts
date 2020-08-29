import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent {

  
  name:string = ""
  id:number = 0;
  salary:number = 0;
  array:any[] = [];

  clickHandler(){

    this.array.push({"Ename":this.name , "Eid":this.id , "Esal":this.salary})
  }
  
}
