import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  
  @Input() product: Product | undefined;

}
