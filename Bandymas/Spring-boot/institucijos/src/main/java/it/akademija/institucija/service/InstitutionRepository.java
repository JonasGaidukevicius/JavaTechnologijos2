package it.akademija.institucija.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import it.akademija.institucija.Institution;
import it.akademija.products.Product;
import it.akademija.products.ProductRepository;

public interface InstitutionRepository extends JpaRepository<Institution, Long> {

	
	
}
