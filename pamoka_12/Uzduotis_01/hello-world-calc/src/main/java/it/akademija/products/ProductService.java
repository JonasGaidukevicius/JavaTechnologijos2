package it.akademija.products;

import java.util.Collections;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	//Visų produktų gavimas
	@Transactional
	public List<Product> getProducts() {
		//ar aš galiu pakeisti visas null reikšmes į "null"?
		//reikia sugalvoti kodą
		return productRepository.findAll();
	}
	
	//Vieno produkto gavimas
		@Transactional
		public Product getProductById(long id) {
			//ar aš galiu pakeisti visas null reikšmes į "null"?
			//reikia sugalvoti kodą
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

	public ProductRepository getProductRepository() {
		return productRepository;
	}

	public void setProductRepository(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
	
}