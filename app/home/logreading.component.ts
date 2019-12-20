import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { LogReading, ReadingLog } from '../models';
import { LogReadingService } from './logreading.service';
import { registerElement } from "nativescript-angular/element-registry";
registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);


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
        private routerExtensions: RouterExtensions,
        private readingLogService: LogReadingService
    ) {
        this.clearEntries();
        this.route.params.subscribe((params) => {
            console.log(params["name"]);
            this.studentname = params["name"];
        });
    }
    readingLogList: Array<LogReading> = [];
    readingLog: LogReading = new LogReading();
    readingLogDto: ReadingLog;
    studentname: string;

    public ngOnInit(): void {
        this.refresh();
    }

    public refresh() {
        this.readingLogService.getReadingLog()
            .subscribe(readingLog => {
                this.readingLogDto = readingLog;

                for (let entry of this.readingLogDto.entries) {
                    const newEntry: LogReading = new LogReading();

                    newEntry.date = entry.readingDate;
                    newEntry.title = entry.publicationTitle;
                    newEntry.minutes = entry.duration;

                    this.readingLogList.push(newEntry);
                }
                console.log(JSON.stringify(this.readingLogList));

                //              this.readingLogDto.entries = _.orderBy(this.readingLogDto.entries, ['readingDate'], ['asc']);
            },
            (error: any) => console.log(error),
            () => {});
    }

    clearEntries() {
        this.readingLog.date = new Date();
        this.readingLog.title = "";
        this.readingLog.minutes = undefined;
    }

    submit() {
        const entries = this.readingLogList.filter(i=> i.new === true).map(i=> {
            var entry: any = {};
            entry.readingDate = i.date;
            entry.publicationTitle = i.title;
            entry.duration = i.minutes;
            return entry;
        });
        this.readingLogService.sendReadingLogEntries(entries).subscribe(l=> {
            
        },
        (error: any) => console.log(error),
        () => {});
    }

    add() {
        let newReadingLogEntry: LogReading = new LogReading();
        newReadingLogEntry = { ...this.readingLog };
        newReadingLogEntry.new = true;
        this.readingLogList.push(newReadingLogEntry);

        console.log(JSON.stringify(this.readingLogList));

        //alert('Entry submitted successfully');
        this.clearEntries();
    }

    scan() {
        
    }
}
