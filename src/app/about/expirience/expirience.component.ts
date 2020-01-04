import { Component, OnInit } from '@angular/core';
import {Exerience} from '../expirience/experience.model'
@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.css']
})
export class ExpirienceComponent implements OnInit {
  experiences: Exerience[] = [
    new Exerience("Part time developer", "MERN Stack developer", "Galactech Studio", new Date('September 01, 2019'), new Date(), "Megrine, Tunis Tunisia", '', ['#Node.js', '#express', '#React.js', '#MongoDB', '#AWS', '#SCRUM', '#ASANA', '#Service_worker', '#AWS_SNS', '#Node_mailer'], ""),
    new Exerience("Web developer intern", "Fullstack web developer", "Galactech Studio", new Date('July 01, 2019'), new Date('September 01, 2019'), "Megrine, Tunis Tunisia", '', ['#Node.js', '#express', '#React.js', '#MongoDB', '#AWS', '#SCRUM', '#ASANA', '#Service_worker', '#AWS_SNS', '#Node_mailer', '#Pusher'], ""),
    new Exerience("Part time developer", "MERN Stack developer", "Galactech Studio", new Date('Jun 01, 2019'), new Date('July 30, 2019'), "Megrine, Tunis Tunisia", '', ['#Node.js', '#express', '#React.js', '#MongoDB', '#AWS', '#SCRUM', '#ASANA', '#Service_worker', '#AWS_SNS', '#REST'], ""),
    new Exerience("Project Graduation intern position", "Fullstack web developer", "STEG", new Date('February 01, 2017'), new Date('Jun 01, 2017'), "Kamel Ataturk street, Tunis Tunisia", '', ['#JAVA_EE', '#MicroServices', '#SQL(MySQL)', '#JQUERY', '#BOOTSTARP', '#Tomcat', '#MVC', '#SCRUM'], ""),
    new Exerience("Summer intern", "System Administration", "Martelli Tunisia", new Date('Jun 01, 2016'), new Date('July 01, 2016'), "Menzel Jemil, Bizerte Tunisia", '', ['#Windows_server', '#Linux', '#DHCP', '#VMWARE', '#Firewall', '#Active_Directory'], ""),

  ];

  constructor() { }

  ngOnInit() {
  }

}
