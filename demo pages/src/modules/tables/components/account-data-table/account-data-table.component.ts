// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USERS } from '@modules/tables/data/users';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-account-data-table',
    templateUrl: './account-data-table.component.html',
    styleUrls: ['./account-data-table.component.scss'],
})
export class AccountDataTableComponent implements OnInit {
    riceID: string | null | undefined;
    // tslint:disable-next-line:no-any
    CurUser: any;
    passwordStatus = false;
    flag = 0;
    // tslint:disable-next-line:prettier
    states: string[] | undefined;
    // tslint:disable-next-line:no-any
    // @ViewChild('changeModal') changeModal: any;
    closeResult = '';
    // tslint:disable-next-line:no-any
    curPassword = '';

    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;

    changeForm = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
    });

    constructor(private fb: FormBuilder, private modalService: NgbModal) {}

    ngOnInit(): void {
        this.riceID = localStorage.getItem('id');
        this.CurUser = USERS.find(n => n.riceID === this.riceID);
        this.states = ['ready', 'enabled', 'deleted', 'pending'];
    }

    unlock(index: number) {
        this.flag = 1;
        this.CurUser.messageList[index].locked = false;
    }

    lock(index: number) {
        this.flag = 2;
        this.CurUser.messageList[index].locked = true;
    }

    show() {
        this.flag = 0;
        this.changeForm.reset();
        this.modalService.dismissAll();
    }

    setStatus(index: number, value: string) {
        this.CurUser.messageList[index].accountStatus = value;
        this.flag = 4;
    }
    // openModal() {
    //     this.changeModal.nativeElement.className = 'modal fade show';
    //     // @ts-ignore
    //     document.getElementById(this.changeModal).click();
    // }
    // closeModal() {
    //     this.changeModal.nativeElement.className = 'modal hide';
    // }
    // tslint:disable-next-line:no-any
    open(content: any, index: number) {
        this.curPassword = this.CurUser.messageList[index].password;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            result => {
                this.closeResult = `Closed with: ${result}`;
            },
            reason => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }

    // tslint:disable-next-line:no-any
    save(index: number) {
        // tslint:disable-next-line:no-any
        if (this.changeForm.status === 'VALID') {
            // this.modalService.open(this.confirmationModal).result.then();
            this.flag = 8;
            this.passwordStatus = true;
            this.CurUser.messageList[index].password = this.curPassword;
        }
        if (this.changeForm.status === 'INVALID') {
            this.flag = 9;
        }

        for (const key in this.changeForm.controls) {
            const control = this.changeForm.controls[key];
            control.markAllAsTouched();
        }
        this.changeForm.reset();
    }
    // tslint:disable-next-line:no-any
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    get passwordControl() {
        return this.changeForm.get('password') as FormControl;
    }
    get passwordControlValid() {
        this.passwordStatus = true;
        return this.passwordControl.touched && !this.passwordControlInvalid;
    }

    get passwordControlInvalid() {
        return (
            this.passwordControl.touched &&
            (this.passwordControl.hasError('required') ||
                this.passwordControl.hasError('minlength'))
        );
    }

    // tslint:disable-next-line:no-any
    onKey(event: any) {
        this.curPassword = event.target.value;
    }
}
