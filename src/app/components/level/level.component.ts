import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  form!: FormGroup;
  levels: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient,  private levelService: LevelService) {}

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', Validators.required],
      point: ['', [Validators.required, Validators.min(30)]]
    });

    this.loadLevels();
  }

  loadLevels() {
    this.levelService.getLevels().subscribe(
      (data) => {
        this.levels = data.data;
        // console.log(data.data) ;
      },
      (error) => {
        console.error('Error fetching levels:', error);
      }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      const apiUrl = 'http://localhost:8080/api/levels';

      this.http.post(apiUrl, formData)
        .subscribe(response => {
          console.log('Data sent successfully:', response);
        }, error => {
          console.error('Error sending data:', error);
        });
    }
  }
}
