import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { AssetContractService } from '../asset-contract.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AssetsComponent implements OnInit {
  
  columnsToDisplay = ['Name', 'Brand', 'Model', 'Owner'];
  expandedElement: Assests | null;
  dataToDisplay = [...ELEMENT_DATA];
  dataSource = new AssetsDataSource(this.dataToDisplay);
  constructor(private _contractService: AssetContractService) { 
    this.expandedElement = null;
  }
  ngOnInit(): void {
    this._contractService.GetallAssets();
  }
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}
export interface Assests {
  id: number;
  Name: string;
  Model: string;
  Brand: string;
  Icon: string;
  Capacity:number;
  Owner:string;
  BlockId:string;
}
const ELEMENT_DATA: Assests[] = [
  {id: 1, Name: 'Hundai-I10-1234', Model: 'Hundai I10', Brand: 'Hundai', Capacity: 5, Owner: '',BlockId: 'AJfjdo24rj', Icon:'H' },
  {id: 1, Name: 'Hundai-I20-1245', Model: 'Hundai I20', Brand: 'Hundai', Capacity: 5, Owner: '',BlockId: 'A;fdask', Icon:'H' },
  {id: 1, Name: 'Hundai-I10-1244', Model: 'Hundai I10', Brand: 'Hundai', Capacity: 5, Owner: '',BlockId: 'dasfk', Icon:'H' },
  {id: 1, Name: 'Mini-cooper-124', Model: 'Cooper', Brand: 'MINI', Capacity: 4, Owner: '',BlockId: 'sldafj', Icon:'M' },
];

class AssetsDataSource extends DataSource<Assests> {
  private _dataStream = new ReplaySubject<Assests[]>();

  constructor(initialData: Assests[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Assests[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Assests[]) {
    this._dataStream.next(data);
  }
}