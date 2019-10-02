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
        "<span style='color:deepskyblue'>var</span> <span style='color:white'>PartTimeHuman = {</span> \
        <br>&emsp;&emsp;<span style='color:white'>name: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Sidhant Bhatia'</span><span>,</span>\
        <br>&emsp;&emsp;<span style='color:white'>type: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Full Time CoderBoy'</span><span>,</span>\
        <br>&emsp;&emsp;<span style='color:white'>email: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'sidhant3b@gmail.com'</span><span>,</span>\
        <br>&emsp;&emsp;<span style='color:white'>phone: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'+60176434724'</span><span>,</span> \
        <br>&emsp;&emsp;<span style='color:white'>HighAchieverScholarAt: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Monash University'</span><span>,</span>\
        <br>&emsp;&emsp;<span style='color:white'>Summer2018InternAt: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Monster Jobs'</span><span>,</span>\
        <br>&emsp;&emsp;<span style='color:white'>Summer2019InternAt: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Hire me now!'</span><span>,</span>\
        <br>&emsp;&emsp;<span style='color:white'>location: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'KL, Malaysia'</span><span>,</span>\
        <br><span style='color:white'>};</span>\
        "
      ],
      typeSpeed: 1,
      showCursor: true,
      cursorChar: "|"
    };

    const typed = new Typed("#string", options);
  }
}
