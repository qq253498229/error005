import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  autoFocus = {
    focusValue: true,
  };
  searchFlag = false;
  searchText = '';

  onLeftClick() {
    console.log('onLeftClick');
  }

  cancelSearch() {
    console.log('cancelSearch');
    this.searchFlag = false;
  }

  showSearch() {
    console.log('showSearch');
    this.searchFlag = true;
  }

  search() {
    console.log('search', this.searchText);
  }
}
