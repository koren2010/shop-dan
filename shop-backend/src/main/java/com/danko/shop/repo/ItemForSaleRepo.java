package com.danko.shop.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.danko.shop.entity.ItemForSale;

@Repository
public interface ItemForSaleRepo extends JpaRepository<ItemForSale, Integer> {

}
