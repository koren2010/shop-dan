package com.danko.cartbackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.danko.cartbackend.entity.ItemForSale;

@Repository
public interface ItemForSaleRepo extends JpaRepository<ItemForSale, Integer> {

}
