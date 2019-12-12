package com.nationwide.groupproject.controllers;

import java.sql.Date;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nationwide.groupproject.data.Cards;
import com.nationwide.groupproject.services.CardsService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CardsController {
	
	@Autowired
	private CardsService service;
	
	@GetMapping("/findAllCardsThisMonth")
	public ArrayList<Cards> findAllCardsThisMonth() {
		return service.findAllCardsThisMonth();
	}
}