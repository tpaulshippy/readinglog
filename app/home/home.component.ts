import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions
    ) {
    }
    name: string;

    login() {
        this.routerExtensions.navigate([`/home/log/${this.name}`], { clearHistory: true });
    }

    ngOnInit(): void {
    }
}
