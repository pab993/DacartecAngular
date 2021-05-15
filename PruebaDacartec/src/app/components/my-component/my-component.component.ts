import { MyServiceService } from './../../services/my-service/my-service.service';
import { Data } from './../../models/data.model';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
declare var $: any;

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public dataInfo: any;
  arrayDetails: any;

  constructor(private myService: MyServiceService) {}

  ngOnInit(): void {
    
    this.dataInfo = this.myService.getInfo().subscribe(data => {
      this.dataInfo = this.prepararDatos(data);

      $(document).ready(function() {

        $('.carousel-banner-container').slick({
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
  
      });
    });

    /*
      if(data.products != null){
        for(var i in data.products){
          this.myService.getInfoDetails(data.products[i].uuid).subscribe(dataDetails => {
            dataDetails.uuid = data.products[i].uuid;
            this.arrayDetails.push(dataDetails);
          });
        }
        for(var i in data.products){
          for(var j in this.arrayDetails){
            if(data.products[i].uuid == this.arrayDetails[j].uuid){
              data.products[i].details = this.arrayDetails[j];
            }
          }
        }
      }
      this.dataInfo = data;
    */
  }

  prepararDatos(data: Data){
    for(var i in data.banners){
        data.banners[i].text = data.banners[i].text?.split("\n").join("<br />");
    }

    return data;
  }

}