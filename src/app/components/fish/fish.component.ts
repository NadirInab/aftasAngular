
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FishService } from 'src/app/services/fish/fish.service';
import { LevelService } from 'src/app/services/level/level.service'; 

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css'],
})
export class FishComponent implements OnInit {
  form!: FormGroup;
  fishes: any[] = [];
  levels: any[] = [];

  constructor(private fb: FormBuilder, private fishService: FishService, private levelService: LevelService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      weight: [null, [Validators.required, Validators.min(1)]],
      level_id: [null, Validators.required],
    });

    this.loadFishes();
    this.loadLevels();
  }

  loadFishes() {
    this.fishService.getFishes().subscribe(
      (response: any) => {
        // console.log(response.data[0].level.description);
        this.fishes = response.data;
        console.log(this.fishes) ;
      },
      (error) => {
        console.error('Error fetching fishes:', error);
      }
    );
  }

  loadLevels() {
    this.levelService.getLevels().subscribe(
      (data) => {
        // console.log(data) ;
        this.levels = data.data;
      },
      (error) => {
        console.error('Error fetching levels:', error);
      }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      this.fishService.addFish(formData).subscribe(
        (response) => {
          console.log('Fish added successfully:', response);
          this.loadFishes(); // Refresh the list after adding a new fish
        },
        (error) => {
          console.error('Error adding fish:', error);
        }
      );
    }
  }

  onDeleteFish(fishId: number): void {
    this.fishService.deleteFish(fishId).subscribe(
      () => {
        console.log('Fish deleted successfully.');
        this.loadFishes();
      },
      (error) => {
        console.error('Error deleting fish:', error);
      }
    );
  }
}
