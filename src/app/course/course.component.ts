import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Civil 3D','description':'We provide all course materials, hardwares and software needed in the training period.','image':'../../assets/ce.jpg'},
    {'id':2,'name':'Internet of things','description':'We provide all course materials, hardwares and software needed in the training period.','image':'../../assets/cse.jpg'},
    {'id':3,'name':'Embedded systems','description':'We provide all course materials, hardwares and software needed.A project will be given at the end of the course period.','image':'../../assets/ece.png'},
    {'id':4,'name':'Python and Machine Learning','description':'We provide all course materials, hardwares and software needed.A project will be given at the end of the course period.','image':'../../assets/it.jpg'},
  ]
}
