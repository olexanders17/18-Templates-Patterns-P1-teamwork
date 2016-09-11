$(function(){
var $daysSelect = $('.daysList'),
	$monthsSelect = $('.monthList'),
	monthsArr = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
	$yearsSelect = $('.yearsList'),
	index,
	$searchBox = $('.search');

	for (index = 1; index <= 31; index++){
		$daysSelect.append($('<option></option>').val(index).html(index));
	}

	monthsArr.forEach(function (item) {
		$monthsSelect.append($('<option></option>').val(item).html(item));
	});

	for (index = 2016; index >= 1901; index--){
		$yearsSelect.append($('<option></option>').val(index).html(index));
	}

	$searchBox.find('input[type="search"]').on('focus', function () {
		$searchBox.addClass('focusStyle');
	});

	$searchBox.find('input[type="search"]').on('blur', function () {
		$searchBox.removeClass('focusStyle');
	});
});