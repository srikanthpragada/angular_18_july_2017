import { Component } from '@angular/core';
import { GitUser } from './GitUser';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component(
    {
        selector: 'git-user',
        templateUrl: './httpgit.component.html'
    })
export class HttpGitComponent {
    public user: GitUser;
    private url: string = "https://api.github.com/users/";
    public isLoading: boolean = false;
    public message: string = "";

    constructor(private http: Http) {
    }

    getDetails(username: string): void {
        this.user = null;
        this.message = '';
        this.isLoading = true; 
        this.http.get(this.url + username)
            .map( resp => resp.json())
            .finally( () => this.isLoading = false)
            // .catch(this.handleError)
            .subscribe(resp => this.user = <GitUser> resp,
                       error => this.message = "Sorry! User Not Found!");
    }

    private handleError(error: Response) {
        console.error('An error occurred : ', error.toString());
        return Observable.throw(error.text);
    }
}
