import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl : './course.component.html',
})
export class CourseComponent {
  title : string = 'Angular 2';
  topics : string[] = ['Data Binding','Forms','Http','Routing'];
  compact : boolean = false; 

  addTopic(topic :string ) {
    this.topics.push(topic);
    console.log("Adding topic");
  }

  toggleTopics() 
  {
    this.compact = !this.compact; 
  }
}
