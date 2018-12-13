package it.akademija.cart;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import it.akademija.products.Product;
import it.akademija.products.ProductDetails;

//Tai yra DTO - data transfer object.
//Skirta tam, kad butu galima pernesti duomenis (is kur?) i (i kur?)
@Entity
public final class Cart {
	@Id
	private long id;
	@Column
	private String title;
	@Column
	private String image;
	private String username;
	@ManyToMany(cascade = {CascadeType.MERGE, CascadeType.DETACH})
	private List<Product> product;
	
	public Cart() {
	}

	public Cart(long id, String title, String image, String username
			
			) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.username = username;
	}
	
	// toliau - get ir set metodai

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}
}
