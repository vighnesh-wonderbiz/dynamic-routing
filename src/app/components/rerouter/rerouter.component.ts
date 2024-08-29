import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rerouter',
  templateUrl: './rerouter.component.html',
  styleUrl: './rerouter.component.css',
})
export class RerouterComponent {
  currentPath: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      this.currentPath = urlSegments.map((segment) => segment.path).join('/');
    });
  }
}
