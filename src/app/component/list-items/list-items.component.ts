import { Component, OnInit } from '@angular/core';
import { OptServiceService } from 'src/app/service/opt-service.service';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(private serviceApi: OptServiceService) {

  }

  res: any = {};
  data: any = [];
  ngOnInit(): void {
    this.serviceApi.getAll("/customer/storeitems/604f38bb90aae3367d386490")?.subscribe(
      (response) => {
        console.log(response)
        this.res = response;
        this.data=this.res['data'];
        console.log(this.data)
      }
    )
  }

}
