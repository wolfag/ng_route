import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  productId;
  query;

  ngOnInit() {
    //case 1:
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id");
      console.log({ id });
      this.productId = id;
    });

    //case 2: (not work with navigate in the same parent)
    // this.productId = this.activatedRoute.snapshot.paramMap.get("id");

    //case 3: query
    this.activatedRoute.queryParamMap.subscribe(query => {
      console.log({ query });
      this.query = query;
    });
  }

  handleBack() {
    this.router.navigate(["product"]);
  }
}
