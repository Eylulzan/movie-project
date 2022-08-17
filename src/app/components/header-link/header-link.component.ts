import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-header-link",
  templateUrl: "./header-link.component.html",
  styleUrls: ["./header-link.component.scss"],
})
export class HeaderLinkComponent implements OnInit {
  @Input()
  path: string;
  @Input()
  name: string;
  @Input()
  isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
