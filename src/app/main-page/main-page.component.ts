import { Component, OnInit } from '@angular/core';
import { AllEvidence } from '../data/data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  allEvidence1 = AllEvidence;
  selectedEvidence1 = null;

  allEvidence2 = AllEvidence;
  selectedEvidence2 = null;

  allEvidence3 = AllEvidence;
  selectedEvidence3 = null;

  constructor() { }

  ngOnInit(): void {
  }

}
