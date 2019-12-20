import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { ReadingLog } from '../models/readinglog';
@Component({
    selector: "Log",
    moduleId: module.id,
    templateUrl: "./logreading.component.html",
    styleUrls: ["./logreading.component.css"]
})
export class LogReadingComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) {
        this.clearEntries();
        this.route.params.subscribe((params) => {
            console.log(params["name"]);
            this.studentname = params["name"];
        });
    }
    readingLogList: Array<ReadingLog> = [];
    readingLog: ReadingLog = new ReadingLog();
    studentname: string;

    clearEntries() {
        this.readingLog.date = new Date();
        this.readingLog.title = "";
        this.readingLog.minutes = undefined;
    }

    submit() {

    }

    add() {
        let newReadingLogEntry: ReadingLog = new ReadingLog();
        newReadingLogEntry = { ...this.readingLog };
        this.readingLogList.push(newReadingLogEntry);

        console.log(JSON.stringify(this.readingLogList));

        //alert('Entry submitted successfully');
        this.clearEntries();
    }

    ngOnInit(): void {
    }
}
