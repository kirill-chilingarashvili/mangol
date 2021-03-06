import { MangolConfig } from './../interfaces/config.interface';
import { Component, OnInit } from '@angular/core';

import * as ol from 'openlayers';

@Component({
  selector: 'mangol-demo-print',
  template: `
      <mangol [config]="config"></mangol>
    `
})
export class DemoPrintComponent implements OnInit {
  config = {} as MangolConfig;

  public ngOnInit(): any {
    this.config = {
      sidebar: {
        collapsible: true,
        opened: true,
        toolbar: {
          print: {
            active: true,
            disabled: false
          }
        }
      }
    };
  }
}
