package it.akademija.institucija;

public class InstitutionData {
	
	private String name;
	private String city;
	private String image;
	private String category;
	private String type;
	private String typeOfType;
	
	public InstitutionData () {
		
	}

	public InstitutionData(String name, String city, String image, String category, String type, String typeOfType) {
		super();
		this.name = name;
		this.city = city;
		this.image = image;
		this.category = category;
		this.type = type;
		this.typeOfType = typeOfType;
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
