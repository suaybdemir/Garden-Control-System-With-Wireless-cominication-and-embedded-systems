package com.kablosuz.tarla.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.kablosuz.tarla.model.SensorHistory;

@Repository
public interface SensorHistoryRepository extends JpaRepository<SensorHistory, Long>{
	
	public List<SensorHistory> findTop12ByOrderByTimestampDesc();

}
