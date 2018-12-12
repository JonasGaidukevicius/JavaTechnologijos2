package it.akademija.products;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class ProductDetails {
	@Column
	private String image;
	@Column
	private String description;
	@OneToOne(mappedBy="productDetails")
	public Product product;
	
	
	
	public ProductDetails(String image, String description) {
		this.image = image;
		this.description = description;		
	}


	//seteriai ir geteriai
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
}
