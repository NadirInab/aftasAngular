import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { MemberService } from 'src/app/services/member/member.service';


@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  data: any[] = [];
  form!: FormGroup;

  constructor(
    private competitionService: CompetitionService,
    private memberService: MemberService ,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCompetition();
    this.initMemberForm(); 
  }

  getCompetition(): void {
    this.competitionService.getCompetition().subscribe((data) => {
      console.log(data);
    });
  }

  createCompetition(): void {
    const competitionData = {};
    this.competitionService.createCompetition(competitionData).subscribe((response) => {
      console.log(response);
      this.getCompetition();
    });
  }

  updateCompetition(id: number): void {
    const updatedData = {};
    this.competitionService.updateCompetition(id, updatedData).subscribe((response) => {
      console.log(response);
      this.getCompetition();
    });
  }

  deleteCompetition(id: number): void {
    this.competitionService.deleteCompetition(id).subscribe((response) => {
      console.log(response);
      this.getCompetition();
    });
  }

  private initMemberForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      familyName: ['', Validators.required],
      nationality: ['', Validators.required],
      identityDocumentType: ['', Validators.required],
      identityNumber: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const memberFormData = this.form.value;
      this.memberService.addMember(memberFormData).subscribe(
        (response) => {
          console.log('Member added successfully:', response);
        },
        (error) => {
          console.error('Error adding member:', error);
        }
      );
    }
  }
}
