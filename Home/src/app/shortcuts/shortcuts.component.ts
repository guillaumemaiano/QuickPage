import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})
export class ShortcutsComponent implements OnInit {

  @Input() title = '';
  @Input() url = '';
  @Input() image = '';
  @Input() description = '';


  constructor() { }

  ngOnInit(): void {
  }

}
