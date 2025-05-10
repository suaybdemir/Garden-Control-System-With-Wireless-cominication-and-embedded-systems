package com.kablosuz.tarla.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="sensor_history")
public class SensorHistory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long sensorHistoryId;
	
	private float soilHumidity;
	
	private float temperature;
	
	private int rainSensorValue;
	
	private String waterPumpStatus;
	
	@Column(nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime timestamp;
	
	

}
