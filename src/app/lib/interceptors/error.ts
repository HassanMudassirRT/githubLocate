import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred!';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
      }
      // You can add logic here to display a message to the user, for example, using a toast service.
      console.error(errorMessage);

      return throwError(() => new Error(errorMessage));
    })
  );
};
