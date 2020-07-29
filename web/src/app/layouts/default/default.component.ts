import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('{max-width: 400px} ')) {
      this.sideBarOpen = false;
    }

    const layoutChanges = this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall,
    ]);

    layoutChanges.subscribe((result) => {
      if (this.sideBarOpen) {
        this.sideBarOpen = false;
      }
    });
  }

  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
