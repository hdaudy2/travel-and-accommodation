import { Component } from '@angular/core';
import { blogData } from '../../../../data/footer';

@Component({
  selector: 'app-latest-blog-vertical',
  templateUrl: './latest-blog-vertical.component.html',
  styleUrls: ['./latest-blog-vertical.component.scss'],
  standalone: false
})

export class LatestBlogVerticalComponent {

  public blogData = blogData
  public isBlogData: boolean = false;

  openBlog() {
    this.isBlogData = !this.isBlogData;
  }
}
