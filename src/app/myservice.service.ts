import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  private baseUrl =
    'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getContactById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createContact(contact: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, contact);
  }

  updateContact(id: number, contact: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
