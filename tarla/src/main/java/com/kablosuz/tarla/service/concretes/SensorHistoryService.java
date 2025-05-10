package com.kablosuz.tarla.service.concretes;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kablosuz.tarla.dto.SensorHistoryDto;
import com.kablosuz.tarla.dto.SensorHistoryDtoIU;
import com.kablosuz.tarla.model.SensorHistory;
import com.kablosuz.tarla.repository.SensorHistoryRepository;
import com.kablosuz.tarla.service.abstracts.ISensorHistoryService;

@Service
public class SensorHistoryService implements ISensorHistoryService{
	
	@Autowired
	private SensorHistoryRepository sensorHistoryRepository;
	
	public SensorHistoryDto convertToDto(SensorHistory sensorHistory) {
		
		SensorHistoryDto sensorHistoryDto = new SensorHistoryDto();
		BeanUtils.copyProperties(sensorHistory, sensorHistoryDto);
		if (sensorHistory.getTimestamp() != null) {
	        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	        sensorHistoryDto.setTimestamp(sensorHistory.getTimestamp().format(formatter));
	    }
		return sensorHistoryDto;
			
		
	}

	@Override
	public SensorHistoryDto create(SensorHistoryDtoIU sensorHistoryDtoIU) {
		
		SensorHistory sensorHistory = new SensorHistory();
		BeanUtils.copyProperties(sensorHistoryDtoIU, sensorHistory);
		
		SensorHistory savedSensorHistory = this.sensorHistoryRepository.save(sensorHistory);
		
		SensorHistoryDto sensorHistoryDto = convertToDto(savedSensorHistory);
		
		return sensorHistoryDto;
		
	}

	@Override
	public List<SensorHistoryDto> findTop12ByOrderByTimestampDesc() {
		
		List<SensorHistory> sensorHistories = this.sensorHistoryRepository.findTop12ByOrderByTimestampDesc();	
		List<SensorHistoryDto> sensorHistoryDtos = new ArrayList<>();
		
		for(SensorHistory sensorHistory:sensorHistories) {
			SensorHistoryDto sensorHistoryDto = convertToDto(sensorHistory);
			sensorHistoryDtos.add(sensorHistoryDto);
		}
		
		return sensorHistoryDtos;
	}

}
