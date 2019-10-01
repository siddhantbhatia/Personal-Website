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
      strings: [
        "<span style='color:#c0ad60'>var</span> <span>PartTimeHuman = {</span> \
        <br>&emsp;&emsp;<span>name: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Sidhant Bhatia'</span><span>,</span>\
        <br>&emsp;&emsp;<span>type: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Full Time CoderBoy'</span><span>,</span>\
        <br>&emsp;&emsp;<span>email: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'sidhant3b@gmail.com'</span><span>,</span>\
        <br>&emsp;&emsp;<span>phone: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'+60176434724'</span><span>,</span> \
        <br>&emsp;&emsp;<span>HighAchieverScholarAt: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Monash University'</span><span>,</span>\
        <br>&emsp;&emsp;<span>Summer2018InternAt: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Monster Jobs'</span><span>,</span>\
        <br>&emsp;&emsp;<span>Summer2019InternAt: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Hire me now!'</span><span>,</span>\
        <br>&emsp;&emsp;<span>location: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'KL, Malaysia'</span><span>,</span>\
        <br><span>};</span>\
        "
      ],
      typeSpeed: 15,
      showCursor: true,
      cursorChar: "|"
    };

    const typed = new Typed("#string", options);
  }
}
