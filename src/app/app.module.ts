import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { reducers, metaReducers } from './store/store';

import { AppComponent } from './app-root/index';
import { HomeComponent } from './pages/home/home.component';
import { EmailAppComponent } from './pages/email-app/email-app.component';

import { AppHeaderComponent } from './cmps/app-header/app-header.component';


import { EmailDetailsComponent } from './pages/email-details/email-details.component';
import { EmailPreviewComponent } from './cmps/email-preview/email-preview.component';
import { EmailFilterComponent } from './cmps/email-filter/email-filter.component';
import { FolderListComponent } from './cmps/folder-list/folder-list.component';
import { EmailListComponent } from './pages/email-list/email-list.component';
import { EmailComposeComponent } from './cmps/email-compose/email-compose.component';
import { SearchInputComponent } from './cmps/search-input/search-input.component';
import { HeaderSvgComponent } from './svg-cmps/header-svg/header-svg.component';
import { FolderListSvgComponent } from './svg-cmps/folder-list-svg/folder-list-svg.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LabelEditComponent } from './cmps/label-edit/label-edit.component';
import { FirstWordPipe } from './pipes/first-word.pipe';

import { LabelSelectorComponent } from './cmps/label-selector/label-selector.component';
import { LabelTagComponent } from './cmps/label-tag/label-tag.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DateOrAgoPipe } from './pipes/date-or-ago.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    EmailAppComponent,
    FooterComponent,
    LoginComponent,
    
    
    EmailDetailsComponent,
    EmailPreviewComponent,
    EmailFilterComponent,
    FolderListComponent,
    EmailListComponent,
    EmailComposeComponent,
    SearchInputComponent,
    HeaderSvgComponent,
    FolderListSvgComponent,
    CapitalizePipe,
    FirstWordPipe,
    LabelEditComponent,
    LabelSelectorComponent,
    LabelTagComponent,
    DateFormatPipe,
    DateOrAgoPipe,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
