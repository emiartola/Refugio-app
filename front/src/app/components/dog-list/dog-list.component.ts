import { Component, HostBinding, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  dogs: any = [];

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {
    this.dogsService.getDogs()
    .subscribe(
      (res) => {
          this.dogs = res;
        },
      err => console.error(err)
    );
  }

  deleteDog(id: string) {
    this.dogsService.deleteDog(id).subscribe(
      res => {
        console.log(res);
        this.getDogs();
      },
      err => console.error(err)
    );
  }


}
