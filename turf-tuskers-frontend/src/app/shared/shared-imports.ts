import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material modules (add as needed)
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

export const sharedImports = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  RouterModule,
  
];


