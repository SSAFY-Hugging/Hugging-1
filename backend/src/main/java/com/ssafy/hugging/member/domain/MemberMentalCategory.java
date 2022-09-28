package com.ssafy.hugging.member.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class MemberMentalCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private MentalCategory category;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "memberId")
	private Member member;
}
