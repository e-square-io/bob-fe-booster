import { Pipe, PipeTransform } from '@angular/core';
import {IAddress} from "../branch.interface";

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value?: IAddress, ...args: unknown[]): unknown {
    if(!value){
      return 'no address at the moment'
    }
    return `${value?.city}, ${value.street}${value.house? ' ,' + value.house:''}`;
  }

}
