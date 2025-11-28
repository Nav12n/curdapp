import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeModel } from '../../model/Employee';

@Component({
  selector: 'app-employee-portal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-portal.component.html',
  styleUrl: './employee-portal.component.css'
})
export class EmployeePortalComponent {
  employeeForm:FormGroup =new FormGroup({});
  employeeObj:EmployeeModel=new EmployeeModel();
employeeList:EmployeeModel[]=[];

constructor(){
  this.createForm();
  const oldData=localStorage.getItem("EmpData");
  if(oldData != null){
    const parseData=JSON.parse(oldData);
    this.employeeList=parseData;
  }
}
  createForm(){
    this.employeeForm=new FormGroup({
      empId:new FormControl(this.employeeObj.empId),
    name:new FormControl(this.employeeObj.name,[Validators.required,Validators.minLength(3)]),
    city:new FormControl(this.employeeObj.city,[Validators.required,Validators.minLength(3)]),
    state:new FormControl(this.employeeObj.state,[Validators.required,Validators.minLength(3)]),
    emailId:new FormControl(this.employeeObj.emailId,[Validators.required,Validators.email]),
    contactNo:new FormControl(this.employeeObj.contactNo,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    address:new FormControl(this.employeeObj.address,[Validators.required]),
    gender:new FormControl(this.employeeObj.gender,[Validators.required])
  });
}

Reset(){
  this.employeeObj=new EmployeeModel();
  this.createForm();
}

OnSave(){
  const oldData=localStorage.getItem("EmpData");
  if(oldData != null){
    const parseData=JSON.parse(oldData);
    this.employeeForm.controls['empId'].setValue(parseData.length+1);
    this.employeeList.unshift(this.employeeForm.value);
  }

  else{
    this.employeeList.unshift(this.employeeForm.value);
  }
  localStorage.setItem("EmpData",JSON.stringify(this.employeeList));
  this.Reset();
}
onedit(item:EmployeeModel){
  this.employeeObj=item;
this.createForm();
}
onUpdate(){
  const record=this.employeeList.find(x=>x.empId==this.employeeForm.controls['empId'].value);
  if(record!=undefined){
    record.name=this.employeeForm.controls['name'].value;
    record.emailId=this.employeeForm.controls['emailId'].value;
    record.contactNo=this.employeeForm.controls['contactNo'].value;
    record.city=this.employeeForm.controls['city'].value;
    record.state=this.employeeForm.controls['state'].value;
    record.gender=this.employeeForm.controls['gender'].value;
    record.address=this.employeeForm.controls['address'].value;

  }
  localStorage.setItem("EmpData",JSON.stringify(this.employeeList));
  this.Reset();
}

onDelete(id:number){
  const isDelete=confirm("Are you sure to delete?");
  if(isDelete) {
    const index=this.employeeList.findIndex(x=>x.empId==id);
  this.employeeList.splice(index,1);
  localStorage.setItem("EmpData",JSON.stringify(this.employeeList));
  }
  

}


}
