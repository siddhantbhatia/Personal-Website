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
        <br>&emsp;&emsp;<span>HighAchieverScholarAt: </span> <a href='https://www.monash.edu/it' target='_blank' style='color:rgba(253, 149, 90, 0.8); text-decoration: none'>'Monash University'</a><span>,</span>\
        <br>&emsp;&emsp;<span>Winter2020InternAt: </span> <a href='https://warwick.ac.uk/fac/sci/statistics/research/' target='_blank' style='color:rgba(253, 149, 90, 0.8); text-decoration: none'>'Warwick Research Centre'</a><span>,</span>\
        <br>&emsp;&emsp;<span>Summer2019InternAt: </span> <a href='https://en.4th-valley.com/aboutus/' target='_blank' style='color:rgba(253, 149, 90, 0.8); text-decoration: none'>'Fourth Valley Concierge'</a><span>,</span>\
        <br>&emsp;&emsp;<span>Summer2018InternAt: </span> <a href='https://www.monster.com/about/' target='_blank' style='color:rgba(253, 149, 90, 0.8); text-decoration: none'>'Monster Jobs'</a><span>,</span>\
        <br>&emsp;&emsp;<span>location: </span> <span style='color:rgba(253, 149, 90, 0.8)'>'Coventry, United Kingdom'</span><span>,</span>\
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
