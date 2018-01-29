import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styles: []
})
export class AppNavbarComponent implements OnInit {
    categoriesObservable: Observable<any[]>;
    constructor(private db: AngularFireDatabase) { }
    ngOnInit() {
      this.categoriesObservable = this.getCategories('/categories');
    }
    getCategories(listPath): Observable<any[]> {
      return this.db.list(listPath).valueChanges();
    }
  }
