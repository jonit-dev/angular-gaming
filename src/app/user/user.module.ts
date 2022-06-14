import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AuthModalComponent, LoginComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
