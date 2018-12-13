package it.akademija.cart;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
	@Autowired
	private CartRepository cartRepository;
	
	@Transactional
	public List<Cart> getCart(String username) {
		return cartRepository.findCartByUsername(username);
	}

	@Transactional
	public void addProductToCart(Cart cart) {
		cartRepository.save(cart);
	}

	@Transactional
	public void deleteProductFromCart(long id) {
		cartRepository.delete(new Cart(id, "", "", ""));
	}

}
