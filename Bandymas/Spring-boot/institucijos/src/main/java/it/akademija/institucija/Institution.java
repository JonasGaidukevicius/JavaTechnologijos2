package it.akademija.institucija;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Institution {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(unique=true, nullable=false) 
	private String name;
	private String city;
	private String image;
	private String category;
	private String type;
	private String typeOfType;
	
	public Institution() {
		
	}

	public Institution(String name, String city, String image, String category, String type, String typeOfType) {
		super();
		this.name = name;
		this.city = city;
		this.image = image;
		this.category = category;
		this.type = type;
		this.typeOfType = typeOfType;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTypeOfType() {
		return typeOfType;
	}

	public void setTypeOfType(String typeOfType) {
		this.typeOfType = typeOfType;
	}
	
	
}
