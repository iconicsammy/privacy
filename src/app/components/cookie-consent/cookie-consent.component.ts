import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ConsentContent, ConsentDetail } from '@interfaces/interface-consent-content';
import { ApiService } from '@services/api.service'

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CookieConsentComponent implements OnInit {
  @ViewChild('consentContent', { static: false }) private consentContent;
  upCaret = faCaretUp;
  downCaret = faCaretDown;
  caret = faCaretUp;
  showCustomizeBlock = '';
  
  listOfConsents : ConsentDetail[] = [];

  constructor(private modalService: NgbModal, private apiService: ApiService) {
   }

  ngOnInit(): void {
    this.getListOfConsentAccordians();
  }

  public async getListOfConsentAccordians(){
    /*
      Get the consent banner then extract the accordians
    */
    this.listOfConsents = [];
     try {
       const data : ConsentContent = await this.apiService.getConstentsList()
       this.listOfConsents = data.accordian;
       this.modalService.open(this.consentContent);
     } catch (error) {
       return []
     }
    
  }


  public toggleCustomizationBlock(){
    if (this.showCustomizeBlock === ''){
      this.showCustomizeBlock = 'collapse';
      this.caret = faCaretDown
    }else{
      this.showCustomizeBlock = '';
      this.caret = faCaretUp
    }
  }

}
