import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loop-lab',
  templateUrl: './loop-lab.component.html',
  styleUrls: ['./loop-lab.component.scss']
})
export class LoopLabComponent implements OnInit, OnDestroy {

  isNavbarCollapsed = true;
  delponeImageUrl = '../../../assets/background/accounts.jpg';
  lastDisplacement: number = null;
  navBarState = 'normal';

  ContactUsForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.ContactUsForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required]
    });

    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  /////// Event Scrol Handle //////

  scrollEvent = (event: any): void => {
    const displacement = window.scrollY;
    if (this.lastDisplacement === null) {
      this.lastDisplacement = displacement;
      this.navBarState = 'normal';
    } else if (this.lastDisplacement < displacement) {
      this.navBarState = 'downNav';
    } else if (this.lastDisplacement > displacement) {
      this.navBarState = 'normal';
    }
    this.lastDisplacement = displacement;
  }


  openModalContactUs(contentModel) {
    this.modalService.open(
      contentModel, {
        ariaLabelledBy: 'modal-basic-title',
        backdrop: false
      }
    ).result.then((result) => {
      if (result) {
        console.log(this.ContactUsForm.value);

      }
    });
  }

}




