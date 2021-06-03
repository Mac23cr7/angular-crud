import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ang-crud-tareas';
  msg:string = '';

  employees = [
    {name: 'Fazt', position: 'Manager', email: 'hello@gmail.com'},
    {name: 'Juan', position: 'Designer', email: 'hi@gmail.com'},
    {name: 'Pedro', position: 'Programmer', email: 'bye@gmail.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'Campo Agregado';
    this.model = {};
  }

  deleteEmployee(i: any){
    var answer = confirm('Estas seguro de eliminarlo?');
    if(answer){
      this.employees.splice(i, 1);
      this.msg = 'Campo Eliminado';
    }
  }

  myValue: any;
  editEmployee(i:any):void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(){
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.msg = 'Campo Actualizado';
        this.model2 = {};
      }
      }
    }

    closeAlert():void{
      this.msg = '';
    }

}
