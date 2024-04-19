// shared-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  static myTodoArray: any[] = []; // Make it static
}