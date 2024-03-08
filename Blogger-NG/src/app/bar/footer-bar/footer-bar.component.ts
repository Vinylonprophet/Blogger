import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/service/bar.service';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent implements OnInit {
  footerContent: any = []

  constructor(private barService: BarService) { }

  ngOnInit(): void {
    this.barService.getFooterBar().subscribe((content: any) => {
      this.footerContent = content.data;
    });
  }
}
