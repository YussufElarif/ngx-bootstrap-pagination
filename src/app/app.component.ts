//our root app component
import {Component, OnInit, ChangeDetectorRef} from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  itemsPerPage: number = 10;
  currentPage: number = 1;
  maxNoOfPages: number = 5;
  total: number = 100;
  collection = [];
  paginatedResults = [];
  
  dropDownList = [{id: 1, title: 'item', total: 100}, {id: 2, title: 'brand', total: 60}];
  
  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.selected(1);
    this.pageChanged()
  }
  
  list(name: string, length: number): void {
    let collection = [];
    for (let i = 1; i <= length; i++) {
      collection.push(`${name} ${i}`);
    }
    this.collection = collection;
  }
  
  pageChanged(page?: number): void {
    if (page){ this.currentPage = page; }
    let end = this.itemsPerPage * this.currentPage;
    let start = end - this.itemsPerPage;
    this.paginatedResults = this.collection.slice(start, end);
    this.changeDetectorRef.detectChanges();
  }
  
  selected(id: number): void {
    let option = this.dropDownList.find(x => x.id == id);
    this.list(option.title, option.total);
    this.total = this.collection.length;
    this.currentPage = 1;
    // setTimeout(() => this.currentPage = 1, 50);
  }
  
}