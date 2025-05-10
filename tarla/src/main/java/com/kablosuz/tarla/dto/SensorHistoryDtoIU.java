package com.kablosuz.tarla.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SensorHistoryDtoIU {
	
	private float soilHumidity;

	private float temperature;

	private int rainSensorValue;
	
	private String waterPumpStatus;
	
	private LocalDateTime timestamp;

}
