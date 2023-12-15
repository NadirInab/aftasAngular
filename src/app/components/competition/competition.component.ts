import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit{
  data : any[] = []
  constructor(private competitionService : CompetitionService){}

  ngOnInit(): void {
    this.getCompetition() ;
  }

  getCompetition(): void {
    this.competitionService.getCompetition().subscribe((data) => {
      console.log(data);
      // this.data = data;
    });
  }

  createCompetition(): void {
    const competitionData = { };
    this.competitionService.createCompetition(competitionData).subscribe(response => {
      console.log(response);
      this.getCompetition();
    });
  }

  updateCompetition(id: number): void {
    const updatedData = { };
    this.competitionService.updateCompetition(id, updatedData).subscribe(response => {
      console.log(response);
      this.getCompetition();
    });
  }

  deleteCompetition(id: number): void {
    this.competitionService.deleteCompetition(id).subscribe(response => {
      console.log(response);
      this.getCompetition();
    });
  }

}
