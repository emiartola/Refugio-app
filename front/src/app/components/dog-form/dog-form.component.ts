import { Component, HostBinding, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogsService } from '../../services/dogs.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  dog: Dog = {
    id: 0,
    name: '',
    age: '',
    description: '',
    location: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private dogService: DogsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if (params['id']){
      this.dogService.getDog(params['id']).subscribe( res => {
        console.log(res);
        this.dog = res;
        this.edit = true
        },
        err => console.error(err)
      )
    }

  }

  saveNewDog() {
    delete this.dog.created_at;
    delete this.dog.id;
    this.dogService.saveDog(this.dog)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/dogs']);
      },
        err => console.error(err)
      );
  }

  updateDog(){
    
  }

}

