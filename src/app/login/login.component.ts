import { Component, OnInit } from '@angular/core';
import { ApiLogin } from '../apiLogin';
import { GenerateTokenService } from '../generate-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  environments = ['https://rest.eu.zuora.com/', 'https://rest.sandbox.eu.zuora.com/',
            'https://rest.zuora.com/', 'https://rest.apisandbox.zuora.com/'];

  model = new ApiLogin('nlazraq+DEV+PSA@zuora.com', 'PSA_2018', 'https://rest.sandbox.eu.zuora.com/', '', null);



  constructor(private getTokenService: GenerateTokenService) { }

  describe() {
    this.submitted = true;
    console.log('ON VALIDATE ============> ' + this.submitted);
  }

  ngOnInit() {
    // this.getTokenForCurrentLogin();
  }

  onSubmit() {
    this.submitted = true;
    console.log('HHHH ============> ' + this.submitted);
    this.getZObjectsDescriptions();
  }

  getZObjectsDescriptions() {
        this.getTokenService.getDescription(this.model).subscribe(token => this.model.token = token);
  }
   get diagnostic() { return JSON.stringify(this.model); }

}
