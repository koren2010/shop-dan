package com.danko.shop.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.danko.shop.entity.CartItem;
import com.danko.shop.entity.ItemForSale;

@Repository
public interface CartRepo extends JpaRepository<CartItem , Integer>{

//	public void addItem(int itemId);
}
