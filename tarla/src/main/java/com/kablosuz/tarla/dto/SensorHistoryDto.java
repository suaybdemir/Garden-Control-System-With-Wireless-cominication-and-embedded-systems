package com.kablosuz.tarla.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SensorHistoryDto {

	private Long sensorHistoryId;

	private float soilHumidity;

	private float temperature;

	private int rainSensorValue;
	
	private String waterPumpStatus;
	
	private String timestamp;

}
