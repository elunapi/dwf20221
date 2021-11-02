import { Component, OnInit } from '@angular/core';
import { Region } from '../../_model/region';
import { RegionService } from '../../_service/region.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions: Region[] = [];
  region: Region = new Region();
  formulario = this.formBuilder.group({
    id_region: [''],
    region: ['', Validators.required]
  });
  post_region = false;
  submitted = false;

  constructor(
    private region_service: RegionService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(){
    this.region_service.getRegions().subscribe(
      res => {
        this.regions = res;
        console.log(this.regions);
      },
    )
  }

}
