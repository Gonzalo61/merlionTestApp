package com.merliontechs.service.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class SalesDTO {
	private long num;
    private LocalDate date;
    private String name;
    private BigDecimal totalProd;
    
    public SalesDTO(long num, LocalDate date) {
    	this.num = num;
        this.date = date;
    	
    }
    
    public SalesDTO(long num, String name) { 
    	this.num = num;
    	this.name = name;
    	
    }
    
    public SalesDTO(BigDecimal totalProd, String name) {
    	this.totalProd = totalProd;
    	this.name = name;
    	
    }

	public long getNum() {
		return num;
	}

	public void setNum(long num) {
		this.num = num;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getTotalProd() {
		return totalProd;
	}

	public void setTotalProd(BigDecimal totalProd) {
		this.totalProd = totalProd;
	}
    
    
	
}
