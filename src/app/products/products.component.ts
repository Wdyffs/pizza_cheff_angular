import { Component } from '@angular/core';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, ProductCardComponent]
})
export class ProductsComponent {
  products: Product[] = [
    {
      imgSrc: "assets/images/pizzas/pizza1.png",
      title: "Мясная Делюкс",
      description:
        "Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы",
    },
    {
      imgSrc: "assets/images/pizzas/pizza2.png",
      title: "Морская Премиум",
      description: "Перец, сыр, креветки, кальмары, мидии, лосось",
    },
    {
      imgSrc: "assets/images/pizzas/pizza3.png",
      title: "Бекон и Сосиски",
      description: "Бекон, сыр, сосиски, ананас, томатная паста",
    },
    {
      imgSrc: "assets/images/pizzas/pizza4.png",
      title: "Куриная Делюкс",
      description:
        "Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста",
    },
    {
      imgSrc: "assets/images/pizzas/pizza5.png",
      title: "Барбекю Премиум",
      description:
        "Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили",
    },
    {
      imgSrc: "assets/images/pizzas/pizza6.png",
      title: "Пепперони Дабл",
      description: "Пепперони, сыр, колбаса 2 видов: обжаренная и вареная",
    },
    {
      imgSrc: "assets/images/pizzas/pizza7.png",
      title: "Куриное трио",
      description:
        "Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы",
    },
    {
      imgSrc: "assets/images/pizzas/pizza8.png",
      title: "Сырная",
      description: "Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный",
    },
  ];


}
