package it.akademija.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	
	// Visų produktų gavimas
	@Transactional(readOnly = true)
	public List<Product> getProducts() {
		// ar aš galiu pakeisti visas null reikšmes į "null"?
		// reikia sugalvoti kodą
		return productRepository.findAll();
	}

	// Vieno produkto gavimas
	@Transactional(readOnly = true)
	public Product getProductById(long id) {
		System.out.println("------------------ koks čia produktas? -> " + productRepository.findProductById(id).toString());
		return productRepository.findProductById(id);
	}

	@Transactional
	public void createProduct(Product product) {
		productRepository.save(product);
	}

	@Transactional
	public void deleteProduct(long id) {
		productRepository.deleteProductById(id);
	}

	@Transactional
	public void updateProduct(Product productToUpdate) {
		productRepository.save(productToUpdate);
	}
	
	@Transactional
	public void createAnotherProduct(String title, double price, int quantity, String image, String description) {
		Product newProduct = new Product(title, new ProductDetails(image, description), price, quantity);
		productRepository.save(newProduct);
	}

	public ProductRepository getProductRepository() {
		return productRepository;
	}

	public void setProductRepository(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

}
