import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  convertToUpper() : void  {
      this.title = this.title.toUpperCase();
  }

  changeTitle(newTitle :string) : void  {
      console.log(newTitle);
      this.title = newTitle;
  }
}

 
