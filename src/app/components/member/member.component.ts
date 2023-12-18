import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  members: any[] = [];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService, 
    
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      familyName: ['', Validators.required],
      nationality: ['', Validators.required],
      identityDocumentType: ['', Validators.required],
      identityNumber: ['', Validators.required],
    });
  
    this.loadMembers();
  }

  getIdentityDocumentTypes(): string[] {
    return ['OTHER', 'DRIVING_LICENSE', 'PASSPORT', 'NATIONAL_IDENTITY_CARD'];
  }
  
  loadMembers() {
    this.memberService.getMember().subscribe(
      (data) => {
        this.members = data.data;
        console.log(this.members)
      },
      (error : any) => {
        console.error('Error fetching memebers:', error);
      }
    );
  }


  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData)
      this.memberService.addMember(formData).subscribe(
        (response : any) => {
          console.log('memebr added successfully:', response);
          this.loadMembers();
        },
        (error : any) => {
          console.error('Error adding memebr:', error);
        }
      );
    }
  }

  onDeleteMember(memberId: number): void {
    this.memberService.deleteMember(memberId).subscribe(
      () => {
        console.log('Member deleted successfully.');
        this.loadMembers();
      },
      (error) => {
        console.error('Error deleting member:', error);
      }
    );
  }

}
