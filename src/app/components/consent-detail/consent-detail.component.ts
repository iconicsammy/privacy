import { Component, OnInit, Input } from '@angular/core';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ConsentDetail } from '@interfaces/interface-consent-content';

@Component({
  selector: 'app-consent-detail',
  templateUrl: './consent-detail.component.html',
  styleUrls: ['./consent-detail.component.css']
})
export class ConsentDetailComponent implements OnInit {
  detailsStatus = 'collapse';
  upCaret = faCaretUp;
  downCaret = faCaretDown;
  @Input() consentDetail : ConsentDetail;
  @Input() id : any;

  constructor() { }

  ngOnInit(): void {
  }

  public setCollapseState(state){
    this.detailsStatus = state;
  }

}
