import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import {CategoryService} from '../../service/category.service';
import {PostService} from '../../service/post.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  data = [{
    "month": "Tháng 1",
    "price": 10
},
{
  "month": "Tháng 2",
  "price": 200
},
{
  "month": "Tháng 3",
  "price": 310
},
{
  "month": "Tháng 4",
  "price": 190
},
{
  "month": "Tháng 5",
  "price": 240
},
{
  "month": "Tháng 6",
  "price": 230
},
{
  "month": "Tháng 7",
  "price": 260
},
{
  "month": "Tháng 8",
  "price": 210
},
{
  "month": "Tháng 9",
  "price": 300
}];
  month = [];
  price = [];
  chart = [];

  countPost = 0;
  countCategory = 0;
  constructor(private catergoryService: CategoryService,
              private postService: PostService) { }

  ngOnInit() {

    this.data.forEach(y => {
      this.month.push(y.month);
      this.price.push(y.price);
    });
  }
  ngAfterViewInit() {
    this.chart = new Chart(this.canvasRef.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: this.month,
        datasets: [
          {
            data: this.price,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.getCount();
}

getCount(): void {
}

}
