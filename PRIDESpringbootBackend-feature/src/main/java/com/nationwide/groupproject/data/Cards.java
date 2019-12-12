package com.nationwide.groupproject.data;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "cards")
@NamedQuery(name = "Cards.findAllCardsThisMonth",
			query= "Select c from Cards c where month(c.senddate) = month(now())")
public class Cards{
	@Id
	private String rempno;
	private String rname;
	private String rmempno;
	private String sempno;
	private String sname;
	private String category;
	private Date senddate;
	private String message;
	private String picurl;
	
	public Cards() {
		super();
	}

	public Cards(String rempno, String rname, String rmempno, String sempno, String sname, String category,
			Date senddate, String message, String picurl) {
		super();
		this.rempno = rempno;
		this.rname = rname;
		this.rmempno = rmempno;
		this.sempno = sempno;
		this.sname = sname;
		this.category = category;
		this.senddate = senddate;
		this.message = message;
		this.picurl = picurl;
	}

	public String getRempno() {
		return rempno;
	}

	public void setRempno(String rempno) {
		this.rempno = rempno;
	}

	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}

	public String getRmempno() {
		return rmempno;
	}

	public void setRmempno(String rmempno) {
		this.rmempno = rmempno;
	}

	public String getSempno() {
		return sempno;
	}

	public void setSempno(String sempno) {
		this.sempno = sempno;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Date getSenddate() {
		return senddate;
	}

	public void setSenddate(Date senddate) {
		this.senddate = senddate;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getPicurl() {
		return picurl;
	}

	public void setPicurl(String picurl) {
		this.picurl = picurl;
	}
	
}