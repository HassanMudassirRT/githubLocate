import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
  const messageService = inject(MessageService);

  messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: 'This is a test success message',
  });

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred!';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
      }

      messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: errorMessage,
      });
      console.error(errorMessage);

      return throwError(() => new Error(errorMessage));
    })
  );
};
