import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacionesmiguel',
  templateUrl: './anotacionesmiguel.component.html',
  styleUrls: ['./anotacionesmiguel.component.css']
})
export class AnotacionesmiguelComponent implements OnInit {

  
  instrucciones: string[] = [
    'Primero importamos en app.module.ts la Clase HttpClientModule',
    'En aquella página que vayamos a usar nuestra importación, en su constructor llamaremos a HttpClient y lo importaremos en su .ts',
    'Para ejecutar la petición, usamos this.nombrequelehemosdadoalhttpclient.get("urlalquellamamos")',
    'Seguido al método anterior, añadimos .subscribe( nombredeloquerecibimos => {lo que hace la función de flecha} ), entiendase por subscribirse al hecho de que está esperando movimiento de la url anterior ',
    'Referente a la función de flecha, si colocamos un nombreloquerecibimos indicandole tambien que tipo es, por ejemplo any, se pone entre parentesis.',
    'Dentro usamos nombredeloquerecibimos para por ejemplo pasarlo por console.log o igualarlo a otra variable',
    ''
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
