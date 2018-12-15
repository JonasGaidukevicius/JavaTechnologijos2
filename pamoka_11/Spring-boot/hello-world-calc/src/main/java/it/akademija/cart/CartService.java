package it.akademija.cart;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.akademija.products.Product;

@Service
public class CartService {
	@Autowired
	private CartRepository cartRepository;

	@Transactional
	public Cart getCart(String username) {
		return cartRepository.findCartByUsername(username);
	}

	@Transactional
	public void addProductToCart(Cart cart, long productId, String productTitle, int quantity) {

		Cart currentCart = new Cart();
		if (cartRepository.findCartByUsername(cart.getUsername()) == null) {
			currentCart.setUsername(cart.getUsername());
		} else {
			currentCart = cartRepository.findCartByUsername(cart.getUsername());
		}

		currentCart.addProduct(new Product(productId, productTitle, quantity));
		cartRepository.save(currentCart);

	}

	// 1 versija - ji neveikia taip kaip reikia
	// @Transactional
	// public void deleteProductFromCart(long id) {
	// cartRepository.deleteCartById(id);
	// }

	// 2 varsija - neprisimenu kaip jį parašiau, bet jis irgi nedirbtų taip kaip
	// reikia
	/*
	 * public void deleteProductFromCart(String user, long id) { Cart currentCart =
	 * new Cart(); if(cartRepository.findCartByUsername(user) == null) {
	 * currentCart.setUsername(user); } else { currentCart =
	 * cartRepository.findCartByUsername(user); } currentCart.deleteProduct(id);
	 * 
	 * cartRepository.save(currentCart); }
	 */

	// 3 versija - darau kaip reikia
	public void deleteProductFromCart(String user, long id) {
		//Cart currentCart = new Cart();
		if (cartRepository.existsByUsername(user)) {
			Cart currentCart = cartRepository.findCartByUsername(user);
			int position = -1;
			if(currentCart.getProducts().size() != 0) {
				for (int i = 0; i < currentCart.getProducts().size(); i++) {
					if(currentCart.getProducts().get(i).getId() == id) {
						position = i;
						break;
					}
				}
				if(position != -1) {
					currentCart.getProducts().remove(position);
					cartRepository.save(currentCart);
				}
			}
		}	
	}
}
