import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListingComponent } from "./pages/listing/listing.component";
import { PropertyDetailComponent } from "./pages/property-detail/property-detail.component";


const routes: Routes = [
  {
    path: "",
    component: ListingComponent,
  },
  {
    path: "details",
    component: PropertyDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
