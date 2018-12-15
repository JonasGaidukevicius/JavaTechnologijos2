package it.akademija.cart;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import it.akademija.products.Product;

@Entity
public final class Cart {
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Id
	private String username;
	@ManyToMany(cascade = {CascadeType.ALL})
	private List<Product> products = new ArrayList<Product>();
	
	public Cart() {
	}

	public Cart(String  username) {
		this.username = username;
	}
	
	// toliau - get ir set metodai

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	public void addProduct(Product product) {
		this.products.add(product);
	}
	
	public void deleteProduct(long id) {
		int position = -1;
		if (products.size() != 0) {
			for (int i = 0; i< this.products.size(); i++) {
				if(products.get(0).getId() == id) {
					position = i;
					break;
				}
			}
		}
		if(position != -1) {
			products.remove(position);
		}
	}
}
