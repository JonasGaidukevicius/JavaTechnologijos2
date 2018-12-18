package it.akademija.institucija.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.akademija.institucija.Institution;
import it.akademija.institucija.InstitutionData;

@Service
public class InstitutionService {
	
	@Autowired
	private InstitutionRepository institutionRepository;
	
	//Institucijų nuskaitymas
	@Transactional(readOnly = true)
	public List<InstitutionData> getFullListOfInstitutions(){
		return institutionRepository.findAll().stream().map((institution) ->
									new InstitutionData(institution.getName(),
														institution.getCity(),
														institution.getImage(),
														institution.getCategory(),
														institution.getType(),
														institution.getTypeOfType()
											)).collect(Collectors.toList());
	}

	//Naujos institucijos sukūrimas
	@Transactional
	public void createInstitution(String name, String city, String image, String category, String type, String typeOfType) {
		Institution newInstitution = new Institution(name, city, image, category, type, typeOfType);
		institutionRepository.save(newInstitution);
	}
}
