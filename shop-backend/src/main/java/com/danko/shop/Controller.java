package com.danko.shop;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danko.shop.entity.CartItem;
import com.danko.shop.entity.ItemForSale;
import com.danko.shop.repo.CartRepo;
import com.danko.shop.repo.ItemForSaleRepo;

@RestController
@CrossOrigin
public class Controller {

	@Autowired
	CartRepo cartRepo;
	@Autowired
	ItemForSaleRepo shopRepo;
	
	
//	SHOP 
	
	
	@GetMapping(value = "/shop")
	public List<ItemForSale> getShop(){
		return shopRepo.findAll();
	}
	
	
//	 CART
	
	
	@GetMapping(value = "/cart")
	public List<CartItem> getCart() {
		List<CartItem> items = cartRepo.findAll();
		return items;
	}
	
	
	@PostMapping(value = "/cart")
	public void addItemToCart(int itemId, int count) {
		cartRepo.save(new CartItem(shopRepo.findById(itemId).get(), count));

//		cartRepo.save(new CartItem(itemId, 1));
	}
	
	@DeleteMapping(value = "/cart")
	public void deleteItem(int itemId) {
		cartRepo.deleteById(itemId);
	}
	
//	@PutMapping(value = "/cart")
//	public void updateItem(int itemId, int count) {
//		deleteItem(itemId);
//		addItemToCart(itemId, count);
//	}
//	
	@PutMapping(value = "/cart")
	public void updateCart(List<CartItem> cart) {
		for (CartItem item : cart) {
			cartRepo.save(item);
		}
	}
}
