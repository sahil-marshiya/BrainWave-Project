import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactId: string | null = null;
  contact = {
    first_name: '',
    last_name: '',
    emailId: '',
    age: '',
    gender: '',
    mobilenumber: '',
    pan_no: '',
    adhaar_no: '',
    status: '',
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactId = this.route.snapshot.paramMap.get('id');
    if (this.contactId) {
      this.getContactDetails();
    }
  }

  getContactDetails(): void {
    this.http
      .get<any>(
        `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${this.contactId}`
      )
      .subscribe((data) => {
        this.contact = data;
      });
  }

  saveContact(): void {
    if (this.contactId) {
      // Update existing contact
      this.http
        .put<any>(
          `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${this.contactId}`,
          this.contact
        )
        .subscribe((data) => {
          alert('Contact updated successfully!');
          this.router.navigate(['/contact']);
        });
    } else {
      // Create new contact
      this.http
        .post<any>(
          'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile',
          this.contact
        )
        .subscribe((data) => {
          alert('Contact created successfully!');
          this.router.navigate(['/contact']);
        });
    }
  }

  onDelete(): void {
    if (this.contactId) {
      this.http
        .delete<any>(
          `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${this.contactId}`
        )
        .subscribe(() => {
          alert('Contact deleted successfully!');
          this.router.navigate(['/contact']);
        });
    }
  }
}
