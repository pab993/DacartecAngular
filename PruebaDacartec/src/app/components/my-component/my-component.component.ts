import { MyServiceService } from './../../services/my-service/my-service.service';
import { Data } from './../../models/data.model';
import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var tail: any;

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  dataInfo: any;
  categories: string[] = [];
  filterPost = '';
  filterCat: string[] = [];
  arrayDetails: any;

  constructor(private myService: MyServiceService) {}

  ngOnInit(): void {
    
    this.dataInfo = this.myService.getInfo().subscribe(data => {
      this.dataInfo = this.prepararDatos(data);

      $(document).ready(function() {

        tail.select('.selectpicker',{
          placeholder: 'Filtra por categoría...'
        });

        $('.carousel-banner-container').slick({
          
        });
      });
    });
  }

  prepararDatos(data: Data){
    //Cambiamos el texto para que dé un salto de línea si así viene del servicio
    for(var i in data.banners){
        data.banners[i].text = data.banners[i].text?.split("\n").join("<br />");
    }

    //Reunimos todas las categorias en un array
    for(var i in data.products){
      for(var j in data.products[i].categories){
        if(!this.categories.includes(data.products[i].categories[j])){
          this.categories.push(data.products[i].categories[j]);
        }
      }
    }

    //Ordenamos los claims por su campo order
    data.claims.sort((a,b) => { return a.order < b.order ? -1 : 1});

    return data;
  }

}