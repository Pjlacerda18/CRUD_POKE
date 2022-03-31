import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Pokes } from '../POKE';

@Component({
  selector: 'app-add-poke',
  templateUrl: './add-poke.component.html',
  styleUrls: ['./add-poke.component.css'],
})
export class AddPokeComponent implements OnInit {
  form: FormGroup | any;
  pokeForm: FormBuilder | any;
  pokes: Pokes | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.criarForm(this.pokes);
  }

  salvarPoke() {
    console.log(this.criarForm)
  return this.criarForm(this.form)

  }

  criarForm(poke: Pokes) {
    this.form = this.formBuilder.group({
      name: [poke?.name],
      type: [poke?.type],
      height: [poke?.height],
      weight: [poke?.weight],
    });
    return this.form
  }

}
