import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { 
  }
  gotoCadastroClientes() {
    this.router.navigate(['cadastro-clientes'])
  }
  
}
