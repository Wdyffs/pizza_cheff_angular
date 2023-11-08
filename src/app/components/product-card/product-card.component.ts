import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product';
import { RmFsDirective } from 'src/app/directives/rm-fs.directive';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RmFsDirective],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements AfterViewInit {
  @ViewChild('fs') el!: ElementRef<HTMLDivElement>; 
  @Input() product!: Product;

  ngAfterViewInit(): void {
    
  }

  onImgClick() {
    this.el.nativeElement.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
