import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileSizePipe } from './filesize.pipe';

interface File {
  name: string,
  size: any,
  type: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FileSizePipe]
})
export class AppComponent implements OnInit {
  constructor(
    private fileSizePipe:FileSizePipe,
    private router:Router
    ){
  }
  title = 'angular-test';
  files?: File[];
  mappedFiles?: File[];
  ngOnInit() {
    
    this.router.events.subscribe(event => {
      console.log(event);
    })

    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];

    this.mappedFiles = this.files.map(x=> {
      return {
        name: x.name,
        size: this.fileSizePipe.transform(x.size),
        type: x.type
      }
    })
  }
}
