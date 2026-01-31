import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'https://script.google.com/macros/s/AKfycbzBJepProBs4TPcTVyoiZnteYHeMu4AA0d94YQspjLKDIHrwhof2M26rmmPM4uaeVXh2Q/exec';
   constructor(private http: HttpClient) {}
   submitFeedback(data: any) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('rating', data.rating);
    formData.append('message', data.message);
  
    return this.http.post(this.apiUrl, formData, {
      responseType: 'text'
    });
  }
   
}
