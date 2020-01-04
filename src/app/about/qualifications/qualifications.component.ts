import { Component, OnInit } from '@angular/core';
import {Qualification} from '../qualifications/qualification.model'
@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {
  qualifications : Qualification[]=[
    new Qualification('Software engineering degree', 'Higher Institute of Arts and Multimedia', new Date('September 01, 2018'), new Date(),'Manouba, Tunisia', '')
  ]

  constructor() { }

  ngOnInit() {
  }

}
