import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            newsAll {
              author
              title
              text
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        console.log(result);
        this.rates = result.data && result.data.newsAll;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
