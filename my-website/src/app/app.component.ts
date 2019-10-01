import { Component } from "@angular/core";
import Typed from "typed.js";
import { Type } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  ngOnInit() {
    const options = {
      strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: "|",
      loop: true
    };

    const typed = new Typed("#string", options);
  }
}
