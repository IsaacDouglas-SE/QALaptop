package com.nationwide.groupproject.repos;
import java.sql.Date;
import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nationwide.groupproject.data.Cards;

public interface CardsRepo extends JpaRepository<Cards,String> {
	
	public ArrayList<Cards> findAllCardsThisMonth();
	
}