import { Injectable } from '@angular/core';
import { Region } from '../_model/region';
import { HttpClient } from '@angular/common/http';
import { ApisURI } from 'src/app/shared/apis-uri';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUri = ApisURI.dwf20221apiURI;
  private resource = "/region";

  constructor(
    private http: HttpClient
  ) { }

  getRegions(){
    return this.http.get<Region[]>(this.apiUri + this.resource);
  }

  getRegion(id_region: number){
    return this.http.get<Region>(this.apiUri + this.resource + "/" + id_region);
  }

  createRegion(region: Region){
    return this.http.post(this.apiUri + this.resource, region);
  }

  updateRegion(region: Region){
    return this.http.put(this.apiUri + this.resource + this.resource + "/" + region.id_region, region);
  }

  deleteRegion(id_region: number){
    return this.http.delete(this.apiUri + this.resource + "/" + id_region);
  }
}

