package com.merliontechs.repository;

import com.merliontechs.domain.Sales;
import com.merliontechs.service.dto.SalesDTO;

import java.util.List;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Sales entity.
 */
//@SuppressWarnings("unused")
@Repository
public interface SalesRepository extends JpaRepository<Sales, Long> {

	@Query("SELECT new com.merliontechs.service.dto.SalesDTO(COUNT(id) as num, date) FROM Sales WHERE state = 'DELIVERED' group by date ORDER BY date ASC")
    public List<SalesDTO> getNumSalesDeliv();
	
	
	@Query("SELECT new com.merliontechs.service.dto.SalesDTO(COUNT(id) as num, date) FROM Sales group by date ORDER BY date ASC")
    public List<SalesDTO> getNumSales();

	
	
	@Query("SELECT new com.merliontechs.service.dto.SalesDTO(COUNT(s.product) as num, p.name as name) from Sales s INNER JOIN s.product p GROUP BY p.name ORDER BY COUNT(s.product) DESC")
	public List<SalesDTO> getTopProduct(Pageable pageable);
	
	
	@Query("SELECT new com.merliontechs.service.dto.SalesDTO(SUM(p.price) as totalProd, p.name as name) FROM Sales s INNER JOIN s.product p GROUP BY p.name ORDER BY SUM(p.price) DESC")
	public List<SalesDTO> getTopProductsProfit(Pageable pageable);
	
	
	
}
