import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';


// import * as d3 from 'd3-selection';
// import * as d3Scale from "d3-scale";
// import * as d3Array from "d3-array";
// import * as d3Axis from "d3-axis";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage   {

   _DHT22KnobHumidityOptions: any = {
    skin: {
        type: 'tron',
        width: 6,
        spaceWidth: 4,
        color: "rgba(255, 0, 0, 0.5)"
      },
      size: 200,
      animate: {
        enabled: true,
        duration: 2000,
        ease: 'exp'
      },
      trackColor: "rgba(255,0,0, .1)",
      barColor: "rgba(255,0,0,.5)",
      prevBarColor: "rgba(0,0,0, .2)",
      unit: "%",
      trackWidth: 30,
      barWidth: 30,
      textColor: 'rgba(0, 0, 0, 1)',
      fontSize: 'auto',
      subText: {
        enabled: true,
        text: "CPU used",
        color: 'rgba(0, 0, 0, .5)',
        font: "auto"
      },
      step: 1,
      displayPrevious: true,
      min: 0,
      max: 100,
      notifyOnDragEnd: true
   };
   _DHT22KnobHumidityValue: number = 0;

  constructor() {


    setTimeout(()=>{
      this._DHT22KnobHumidityValue = 1 ;
    },7000)

  }



}
