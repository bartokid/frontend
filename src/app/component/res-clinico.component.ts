import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {ResClinico} from '../models/ResClinico';
import {ResclinicoService} from '../resclinicoservice';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-res-clinico',
  templateUrl: './res-clinico.component.html',
  styleUrls: ['./res-clinico.component.css']
})
export class ResClinicoComponent implements OnInit {
    public resClinicos : ResClinico[];
   constructor(private resService : ResclinicoService) { }

  ngOnInit(): void {
  this.getResClinicos();
  }
  async getResClinicos(){
    this.resClinicos = await this.resService.getResClinicos().toPromise();
  }
}
