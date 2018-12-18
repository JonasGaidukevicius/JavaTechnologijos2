package it.akademija.cart;

import it.akademija.products.Product;

public class ProductQuantityInCartData {
	private Product productInCart;
	private int quantity;
	
	public ProductQuantityInCartData(Product productInCart, int quantity) {
		this.productInCart = productInCart;
		this.quantity = quantity;
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
