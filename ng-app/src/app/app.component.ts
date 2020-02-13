import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  components: Item[];

  ngOnInit(): void {
    this.components = [
      {
        name: '1',
        visible: true
      },
      {
        name: '2',
        visible: true
      },
      {
        name: '3',
        visible: true
      },
      {
        name: '4',
        visible: true
      }
    ];
  }

  onBtnClick(btnNumber: number) {
    if ( // Don't hide last item
      this.hiddenItemCount < this.components.length - 1 ||
      btnNumber !== this.onlyVisibleItem - 1
    ) {
      this.components[btnNumber].visible = !this.components[btnNumber].visible;
    }
  }

  get hiddenItemCount(): number {
    return this.components.filter((item: Item) => !item.visible).length;
  }

  get onlyVisibleItem(): number {
    return +this.components.find((item: Item) => item.visible).name;
  }
}

interface Item {
  name: string;
  visible: boolean;
}
