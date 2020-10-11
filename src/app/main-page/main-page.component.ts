import { Component, OnInit } from '@angular/core';
import { allEvidence } from '../data/data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  allEvidence1 = allEvidence;
  selectedEvidence1 = null;

  allEvidence2 = allEvidence;
  selectedEvidence2 = null;

  allEvidence3 = allEvidence;
  selectedEvidence3 = null;

  constructor() { }

  ngOnInit(): void {
  }

}
