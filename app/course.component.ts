import { Component} from '@angular/core';

@Component({
    selector: 'course',
    templateUrl: './course.component.html'
})
export class CourseComponent {
    title : string = "Angular 4";
    topics : string[] = ["Data Binding","Forms", "Http","Routing"];
    
    addTopic(newTopic :string) : void 
    {
        this.topics.push(newTopic);
    }
}