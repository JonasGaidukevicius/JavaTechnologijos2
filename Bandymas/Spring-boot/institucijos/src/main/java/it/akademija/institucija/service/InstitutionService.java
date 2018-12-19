package it.akademija.institucija.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.akademija.institucija.Institution;
import it.akademija.institucija.InstitutionData;
import it.akademija.products.Product;
import it.akademija.products.ProductData;
import it.akademija.products.ProductDetails;

@Service
public class InstitutionService {

	@Autowired
	private InstitutionRepository institutionRepository;

	// Institucijų nuskaitymas
	@Transactional(readOnly = true)
	public List<InstitutionData> getFullListOfInstitutions() {
		return institutionRepository.findAll().stream()
				.map((institution) -> new InstitutionData(institution.getName(), institution.getCity(),
						institution.getImage(), institution.getCategory(), institution.getType(),
						institution.getTypeOfType()))
				.collect(Collectors.toList());
	}

	// Vienos institucijos nuskaitymas
	@Transactional(readOnly = true)
	public InstitutionData getInstitutionByName(String name) {
		// System.out.println("------------------ koks čia produktas? -> " +
		// productRepository.findProductById(id).toString());
		Institution currentInstitution = institutionRepository.findInstitutionByName(name);
		InstitutionData institutionToController = new InstitutionData(currentInstitution.getName(),
				currentInstitution.getCity(), currentInstitution.getImage(), currentInstitution.getCategory(),
				currentInstitution.getType(), currentInstitution.getTypeOfType());
		return institutionToController;
	}

	// Naujos institucijos sukūrimas
	@Transactional
	public void createInstitution(String name, String city, String image, String category, String type,
			String typeOfType) {
		Institution newInstitution = new Institution(name, city, image, category, type, typeOfType);
		institutionRepository.save(newInstitution);
	}

	// Esamos institucijos duomenų pakeitimas
	@Transactional
	public void updateInstitution(String currentName, String name, String city, String image, String category,
			String type, String typeOfType) {
		System.out.println("--------------------Atėjau iki čia. Esamas Name yra - " + currentName);
		Institution institutionToUpdate = institutionRepository.findInstitutionByName(currentName);
		System.out.println("------------------Surastos institucijos vardas yra " + institutionToUpdate.getName());
		institutionToUpdate.setName(name);
		institutionToUpdate.setCity(city);
		institutionToUpdate.setImage(image);
		institutionToUpdate.setCategory(category);
		institutionToUpdate.setType(typeOfType);
		institutionToUpdate.setTypeOfType(typeOfType);
		institutionRepository.save(institutionToUpdate);
	}

	// Esamos institucijos ištrynimas (metodas aprašytas Repositorijoje)
	@Transactional
	public void deleteInstitution(String name) {
		institutionRepository.deleteInstitutionByName(name);
	}
}
