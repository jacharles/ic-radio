import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule],
    exports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule]
})
export class MaterialModule { }
