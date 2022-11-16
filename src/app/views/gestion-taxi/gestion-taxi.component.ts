import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {Taxi} from '../../Model/taxi';

@Component({
  selector: 'app-gestion-taxi',
  templateUrl: './gestion-taxi.component.html',
  styleUrls: ['./gestion-taxi.component.scss']
})
export class GestionTaxiComponent implements OnInit {

  tutorial: Taxi = {
    nom: '',
    constructeur: '',
    numero_taxi: '',
    numero_cin: '',
    numero_matricule: ''
  };
  submitted = false;

  constructor(private tutorialService: ServiceService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      nom: this.tutorial.nom,
      numero_taxi: this.tutorial.numero_taxi,
      numero_cin: this.tutorial.numero_cin,
      numero_matricule: this.tutorial.numero_matricule,
      constructeur: this.tutorial.constructeur
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      nom: '',
      numero_taxi: '',
      numero_matricule: '',
      numero_cin: '',
      constructeur: ''
    };
  }

}
