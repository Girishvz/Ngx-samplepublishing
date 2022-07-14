import { Component, Input, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'lib-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  @Input() datas: any = [];
  chart: any;
  constructor() {
    // console.log(typeof this.chart);
  }

  ngOnInit(): void {
    // Create chart instance
    this.chart = am4core.createFromConfig(
      {
        // Add data
        data: [
          {
            country: 'Lithuania',
            litres: 501.9,
          },
          {
            country: 'Czech Republic',
            litres: 301.9,
          },
          {
            country: 'Ireland',
            litres: 201.1,
          },
          {
            country: 'Germany',
            litres: 165.8,
          },
          {
            country: 'Australia',
            litres: 139.9,
          },
          {
            country: 'Austria',
            litres: 128.3,
          },
          {
            country: 'UK',
            litres: 99,
          },
          {
            country: 'Belgium',
            litres: 60,
          },
          {
            country: 'The Netherlands',
            litres: 50,
          },
        ],

        // Create and configure Series
        series: [
          {
            type: 'PieSeries',
            dataFields: {
              value: 'litres',
              category: 'country',
            },
          },
        ],
        slices: {
          stroke: '#4a2abb',
          strokeWidth: 2,
          strokeOpacity: 1,
        },
      },
      'chartdiv',
      am4charts.PieChart
    );
  }
  onClick() {
    console.log(this.datas);
  }
}
