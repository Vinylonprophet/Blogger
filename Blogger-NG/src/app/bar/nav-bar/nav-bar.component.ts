import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BarService } from 'src/app/service/bar.service';
import { SearchComponent } from 'src/app/component/search/search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef | undefined;
  navContent: any = [];

  constructor(private BarService: BarService, private componentFactoryResolver: ComponentFactoryResolver, private router: Router) { }

  ngOnInit(): void {
    this.BarService.getNavContent().subscribe((content: any) => {
      this.navContent = content.data;
    })
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SearchComponent);
    const componentRef = this.container!.createComponent(componentFactory);
    componentRef.instance.closing.subscribe(() => {
      this.container?.clear();
    })
  }

  navPart(title: any) {
    // const part = main.toLocaleLowerCase()
    if (title.link === null) {
      if (title.subtitle === null) {
        const main = title.main.toLocaleLowerCase();
        switch (main) {
          case ('article'):
            this.router.navigate(['/' + main + '/0']);
            break;
          case ('video'):
            this.router.navigate(['/' + main + '/0']);
            break;
          case ('project'):
            this.router.navigate(['/' + main + '/0']);
            break;
          default:
            console.log("未研发完毕！敬请期待！")
        }
      }
    }
  }
}
