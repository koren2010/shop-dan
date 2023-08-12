package com.danko.cartbackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.danko.cartbackend.entity.CartItem;

@Repository
public interface CartRepo extends JpaRepository<CartItem , Integer>{

}
