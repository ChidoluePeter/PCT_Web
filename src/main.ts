import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// Bootstrap the application with the root AppComponent (Standalone API)
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
})
  .catch(err => console.error(err));
