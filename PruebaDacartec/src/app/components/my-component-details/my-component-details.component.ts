import { Detail } from './../../models/detail.model';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service/my-service.service';
declare var $: any;

@Component({
  selector: 'app-my-component-details',
  templateUrl: './my-component-details.component.html',
  styleUrls: ['./my-component-details.component.css']
})
export class MyComponentDetailsComponent implements OnInit {

  arrayDetails: any;
  isloaded: boolean = false;

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
  }

  detailsCall(uuid: string){
    this.myService.getInfoDetails(uuid).subscribe(response => {
      response.features.sort((a,b) => { return a.order < b.order ? -1 : 1});
      this.arrayDetails = response;
      this.isloaded = true;

      $(document).ready(function() {

        $('.modal-details-carousel-container').slick({
        });

      });

    });
  }

  closeDetailsModal(){
    this.isloaded = false;
  }

}
