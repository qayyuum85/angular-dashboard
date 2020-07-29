import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { PostsComponent } from '../../modules/posts/posts.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent],
  imports: [CommonModule, RouterModule, SharedModule, MatSidenavModule, LayoutModule],
})
export class DefaultModule {}
