package com.kablosuz.tarla.service.abstracts;

import java.util.List;

import com.kablosuz.tarla.dto.SensorHistoryDto;
import com.kablosuz.tarla.dto.SensorHistoryDtoIU;
import com.kablosuz.tarla.model.SensorHistory;

public interface ISensorHistoryService {
	
	public SensorHistoryDto create(SensorHistoryDtoIU sensorHistoryDtoIU);
	
	List<SensorHistoryDto> findTop12ByOrderByTimestampDesc();

}
