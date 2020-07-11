import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    contacto: FormGroup;
    submitted = false;
    titulo = 'Contacto';
 
    constructor(private formBuilder: FormBuilder) { }
 
    ngOnInit() {
        this.contacto = this.formBuilder.group({
            nya: ['', Validators.required],            
            email: ['', [Validators.required, Validators.email]],
            asunto: ['', Validators.required],
            mensaje: ['', [Validators.required]]
        });
    }
 
    get f() { return this.contacto.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        if (this.contacto.invalid) {
            return;
        }
 
        alert('Mensaje Enviado !')
    }  
}
