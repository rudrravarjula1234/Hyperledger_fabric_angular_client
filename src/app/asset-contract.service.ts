import { Injectable } from '@angular/core';
import { Contract, Gateway, Wallets } from 'fabric-network';
import * as path from 'path';
import * as fs from 'fs';
import { Vehicle } from './asset-model';
import { mainModule } from 'process';


declare function main(): Promise<Buffer>;
@Injectable({
  providedIn: 'root'
})
export class AssetContractService {
  private contract?: Contract;
  constructor() {
    console.log(document.location)
  }

  public async GetallAssets(): Promise<Vehicle[]>{

    await main().then((x) => console.log(x.toString()));
    // Submit the specified transaction.
    //const response:Buffer =  await this.contract!.submitTransaction('getAllVehicles');
    //console.log('Transaction has been submitted');
    // Disconnect from the gateway.
    //gateway.disconnect();
    //console.log(Buffer);
    return []
  }
}
