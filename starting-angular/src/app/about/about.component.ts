import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  id: any = ""

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
  }

  goHome(): void{
    this.router.navigate(["/"])
  }

}
