import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';
  public group: FormGroup;

  constructor(private _builder: FormBuilder){}

  public ngOnInit(): void {
    this.group = this._builder.group({
      name: ['test']
    });
  }
}
