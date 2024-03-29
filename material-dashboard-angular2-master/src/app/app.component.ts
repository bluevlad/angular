import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  public makeRequest() {
    this.http.get('assets/user.json').subscribe(
      (response: any) => {
        let user = { name: response.name, age: response.age };
      },
      (error) => {
        console.error(`ERROR: ${error}`);
      }
    );
  }

}
