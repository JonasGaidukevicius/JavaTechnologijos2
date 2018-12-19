package it.akademija.institucija.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import it.akademija.institucija.InstitutionData;
import it.akademija.institucija.service.InstitutionService;
import it.akademija.products.CreateProductCommand;
import it.akademija.products.ProductData;
import it.akademija.products.ProductService;

@RestController
@Api(value = "institution")
@RequestMapping(value = "/institutions")
public class InstitutionController {

	private final InstitutionService institutionService;

	// konstruktorius
	@Autowired
	public InstitutionController(InstitutionService institutionService) {
		this.institutionService = institutionService;
	}

	// Visų institucijų gavimas
	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get institution list", notes = "Returns list of existing institutions")
	public List<InstitutionData> getInstitutionList() {
		return institutionService.getFullListOfInstitutions();
	}

	// vienos institucijos gavimas
	@RequestMapping(path = "/{name}", method = RequestMethod.GET)
	@ApiOperation(value = "Get institution", notes = "Returns selected institution")
	public InstitutionData getInstitutionByName(
			@ApiParam(value = "Institution name", required = true) @Valid @PathVariable final String name) {

		return institutionService.getInstitutionByName(name);
	}

	// naujos institucijos suvedimas
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create new institution", notes = "Creates new institution with provided data")
	public void createProduct(
			@ApiParam(value = "Institution data", required = true) @Valid @RequestBody final CreateInstitutionCommand cic) {

		institutionService.createInstitution(cic.getName(), cic.getCity(), cic.getImage(), cic.getCategory(),
				cic.getType(), cic.getTypeOfType());
	}

	// institucijos atnaujinimas
	@RequestMapping(path = "/{oldName}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)
	@ApiOperation(value = "Edit institution", notes = "Change selected institution's data")

	public void updateProduct(
			@ApiParam(value = "Institution name", required = true) @Valid @PathVariable final String oldName,
			@ApiParam(value = "Institution data", required = true) @Valid @RequestBody final CreateInstitutionCommand cic) {

		institutionService.updateInstitution(oldName, cic.getName(), cic.getCity(), cic.getImage(), cic.getCategory(),
				cic.getType(), cic.getTypeOfType());

	}

	// institucijos trynimas------------------------------------------

	@RequestMapping(path = "/{name}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete institution", notes = "Deletes selected institution")
	public void deleteInstitution(@PathVariable final String name) {
		institutionService.deleteInstitution(name);
		System.out.println("Deleting institution: " + name);
	}

}
