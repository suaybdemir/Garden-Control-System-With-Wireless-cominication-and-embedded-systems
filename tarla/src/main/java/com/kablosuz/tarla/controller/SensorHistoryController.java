package com.kablosuz.tarla.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kablosuz.tarla.dto.SensorHistoryDto;
import com.kablosuz.tarla.dto.SensorHistoryDtoIU;
import com.kablosuz.tarla.service.concretes.SensorHistoryService;

@RestController
@CrossOrigin
@RequestMapping(path="/sensor-history")
public class SensorHistoryController {
	
	@Autowired
	private SensorHistoryService sensorHistoryService;
	
	@PostMapping
	public ResponseEntity<SensorHistoryDto> create(@RequestBody SensorHistoryDtoIU sensorHistoryDtoIU) {
		return new ResponseEntity<SensorHistoryDto>(this.sensorHistoryService.create(sensorHistoryDtoIU),HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<SensorHistoryDto>> findTop12ByOrderByTimestampDesc(){
		return new ResponseEntity<List<SensorHistoryDto>>(this.sensorHistoryService.findTop12ByOrderByTimestampDesc(),HttpStatus.OK);
	}

}
