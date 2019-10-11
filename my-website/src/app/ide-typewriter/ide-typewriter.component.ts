import { Component, OnInit } from "@angular/core";
import Typed from "typed.js";
import { Type } from "@angular/compiler";

@Component({
  selector: "ide-typewriter",
  templateUrl: "./ide-typewriter.component.html",
  styleUrls: ["./ide-typewriter.component.css"]
})
export class IdeTypewriterComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const options = {
      strings: [
        "<span style='color:deepskyblue'>var</span> <span>PartTimeHuman = {</span> \
        <br>&emsp;&emsp;<span>type: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Full Time Coder'</span><span>,</span>\
        <br>&emsp;&emsp;<span>email: </span> <a style='color:rgba(253, 149, 90, 0.8); text-decoration: none' href='mailto:sidhant3b@gmail.com?Subject=Hey Sid!'>sidhant3b@gmail.com</a> <span>,</span>\
        <br>&emsp;&emsp;<span>HighAchieverScholarAt: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Monash University'</span><span>,</span>\
        <br>&emsp;&emsp;<span>Summer2018InternAt: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Monster Jobs'</span><span>,</span>\
        <br>&emsp;&emsp;<span>location: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'KL, Malaysia'</span><span>,</span>\
        <br><span>};</span>\
        "
      ],
      typeSpeed: 1,
      showCursor: true,
      cursorChar: "|"
    };

    const typed = new Typed("#string", options);
  }
}
