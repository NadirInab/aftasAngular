import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
})
export class CompetitionComponent implements OnInit {
  form!: FormGroup;
  competitions: any[] = [];


  constructor(
    private fb: FormBuilder,
    private competitionService: CompetitionService, 
    
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      location: ['', Validators.required],
      amount: ['', Validators.required],
    });

    this.loadCompetitions() ;
  }

  loadCompetitions() {
    this.competitionService.getCompetition().subscribe(
      (data) => {
        this.competitions = data.data;
      },
      (error : any) => {
        console.error('Error fetching competitions:', error);
      }
    );
  }



  onSubmitComp() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.competitionService.createCompetition(formData).subscribe(
        (response : any) => {
          console.log('Competition added successfully:', response);
          this.loadCompetitions();
        },
        (error : any) => {
          console.error('Error adding competition:', error);
        }
      );
    }
  }

  onDelete(competitionId: number) {
    this.competitionService.deleteCompetition(competitionId).subscribe(
      () => {
        console.log('Competition deleted successfully');
        this.loadCompetitions();
      },
      (error :any) => {
        console.error('Error deleting competition:', error);
      }
    );
  }


}
