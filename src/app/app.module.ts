import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cart-details.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './store-first.guard';

@NgModule({
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot([
            { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
            { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
            { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
            {
                path: "admin",
                loadChildren: "./admin/admin.module#AdminModule",
                canActivate: [StoreFirstGuard]
            },
            { path: "**", redirectTo: "/store" }
        ])],
    providers: [StoreFirstGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }