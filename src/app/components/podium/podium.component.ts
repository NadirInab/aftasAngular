import { Component, OnInit } from '@angular/core';
import { PodiumService } from 'src/app/services/podium/podium.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {
  data : any[] = []
  constructor(private podiumService : PodiumService){}
  ngOnInit(): void {
    this.getPodium() ;
  }

  getPodium(): void {
    this.podiumService.getPodium().subscribe((data) => {
      console.log(data);
      // this.data = data;
    });
  }

  createPodium(): void {
    const PodiumData = { };
    this.podiumService.createPodium(PodiumData).subscribe(response => {
      console.log(response);
      this.getPodium();
    });
  }

  updatePodium(id: number): void {
    const updatedData = { };
    this.podiumService.updatePodium(id, updatedData).subscribe(response => {
      console.log(response);
      this.getPodium();
    });
  }

  deletePodium(id: number): void {
    this.podiumService.deletePodium(id).subscribe(response => {
      console.log(response);
      this.getPodium();
    });
  }
}
