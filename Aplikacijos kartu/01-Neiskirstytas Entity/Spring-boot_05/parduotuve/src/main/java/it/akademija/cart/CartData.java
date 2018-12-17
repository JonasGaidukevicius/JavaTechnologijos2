package it.akademija.cart;

import java.util.ArrayList;
import java.util.List;

import it.akademija.cart.productquantity.ProductQuantityInCart;
import it.akademija.products.Product;

public class CartData {
	
	private String username;
	//private List<Product> products = new ArrayList<Product>();
	private List<ProductQuantityInCart> productQuantityInCart= new ArrayList<ProductQuantityInCart>();
	
	//konstruktorius
	public CartData() {
		
	}
	
	
	public CartData(String username, List<ProductQuantityInCart> productQuantityInCart) {
		super();
		this.username = username;
		this.productQuantityInCart = productQuantityInCart;
	}

	//geteriai ir seteriai
	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public List<ProductQuantityInCart> getProductQuantityInCart() {
		return productQuantityInCart;
	}


	public void setProductQuantityInCart(List<ProductQuantityInCart> productQuantityInCart) {
		this.productQuantityInCart = productQuantityInCart;
	}


	
	/* Kito lauko seteriai ir geteriai
	public List<Product> getProducts() {
		return products;
	}


	public void setProducts(List<Product> products) {
		this.products = products;
	}*/
	
	
}
