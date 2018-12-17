package it.akademija.cart.productquantity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import it.akademija.products.Product;

@Entity
public class ProductQuantityInCart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@OneToOne
	private Product productInCart;
	private int quantity;
	
	public ProductQuantityInCart() {
	}
	
	public ProductQuantityInCart(Product productInCart, int quantity) {
		this.productInCart = productInCart;
		this.quantity = quantity;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Product getProductInCart() {
		return productInCart;
	}
	public void setProductInCart(Product productInCart) {
		this.productInCart = productInCart;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}
