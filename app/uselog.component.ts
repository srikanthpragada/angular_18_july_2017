import { Component } from '@angular/core';
import { LogService} from './log.service';
 
@Component({
  selector: 'test-log',
  templateUrl : 'uselog.component.html',
  providers : [ LogService ]
})
export class UseLogComponent  {
    // Injects LogService into logService property
    constructor(private logService : LogService) {
    }

    log(msg : string) : void
    {
       this.logService.log(msg);
    }
}
