import { Component } from "@angular/core";
import { Model } from "./repository.model";
@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: Model = new Model();
    
    getClasses(key: number): string {
        let product = this.model.getProduct(key);
        console.log("component.ts - getClasses called. product price is " + product.price);
        return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClassMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
                "text-center bg-danger": product.name == "Kayak",
                "bg-info": product.price < 50
        };
  
    }
}
