import { Component, Input , OnInit} from '@angular/core';

import { faPen, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit{

  @Input() iconName:string;

  constructor(){
    this.iconName = '';
  }

  faPen = faPen;
  faCircle = faCircle;
  faCross = faTimes;

  ngOnInit(): void {
    
  }


}
