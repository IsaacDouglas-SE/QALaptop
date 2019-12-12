package com.nationwide.groupproject.services;


import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nationwide.groupproject.data.Cards;
import com.nationwide.groupproject.repos.CardsRepo;

@Component
public class CardsService {
	
	@Autowired
	private CardsRepo repo;
	
	public ArrayList<Cards> findAllCardsThisMonth() {
		try {
			return repo.findAllCardsThisMonth();
		}
		catch(Exception e) {
			System.out.println(e);
			return null;
		}
	}

}
