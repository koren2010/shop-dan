package com.danko.cartbackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danko.cartbackend.entity.CartItem;
import com.danko.cartbackend.entity.ItemForSale;
import com.danko.cartbackend.repo.CartRepo;
import com.danko.cartbackend.repo.ItemForSaleRepo;

@RestController
@CrossOrigin
public class Controller {

	@Autowired
	CartRepo cartRepo;
	@Autowired
	ItemForSaleRepo shopRepo;
	
	@GetMapping(value = "/cart")
	public List<CartItem> getCart() {
		List<CartItem> items = cartRepo.findAll();
		return items;
	}
	
	@GetMapping(value = "/shop")
	public List<ItemForSale> getShop(){
		return shopRepo.findAll();
	}
	
}
