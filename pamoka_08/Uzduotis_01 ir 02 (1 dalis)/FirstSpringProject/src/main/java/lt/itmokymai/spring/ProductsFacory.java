package lt.itmokymai.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProductsFacory {
	@Bean
	public Product samsung1() {
	return new Product();
	}
	
	@Bean
	public Product samsung2() {
	return new Product();
	}
	
	@Bean
	public Product samsung3() {
	return new Product("Mano");
	}
	
}
