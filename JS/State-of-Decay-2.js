//变量
var currentPage = '首页';

//排序函数
//name排序函数
var compare = function(obj1, obj2){
	var val1 = obj1.name;
	var val2 = obj2.name;
	if (val1 < val2){
		return -1;
	} else if (val1 > val2){
		return 1;
	} else {
		return 0;
	}
}
//caliber排序函数
var compareCaliber = function(obj1, obj2){
	var val1 = obj1;
	var val2 = obj2;
	if (val1 < val2){
		return -1;
	} else if (val1 > val2){
		return 1;
	} else {
		return 0;
	}
}

$(function(){
	
	
	// 点击导航
	$('li').click(function(){
		$('#secondPage').css('display', 'block');
		$('#secondPageContent').empty();
		$('.container').hide();
		$(this).children('.liName').addClass('selected');
		currentPage = $('.selected').text();
		if(currentPage == '武器'){
			$('#filterWeapon').removeClass('hide');
		}
		if(currentPage == '车辆'){
			// $('#filterHave, #filterVehicle').removeClass('hide');
			$('#filterVehicle').removeClass('hide');
		}
		if(currentPage == '物品'){
			$('#filterHave, #filterObject').removeClass('hide');
		}
		if(currentPage == '任务'){
			$('#filterMission').removeClass('hide');
		}
		if(currentPage == '性格'){
			$('#filterTrait, #filterTrait2').removeClass('hide');
		}
		if(currentPage == '技能'){
			$('#filterSkill').removeClass('hide');
		}
		if(currentPage == '基地'){
			$('#filterBase').removeClass('hide');
		}
		if(currentPage == '关于'){
			$('#secondPageHeaderName').text($('.selected').text());
		} else {
			$('#secondPageHeaderName').text($('.selected').text() + '信息');
		}
	});
	
	//点击返回
	$('#returnMainPage').click(function(){
		if($('#pageInfo').hasClass('hide')){
			//返回导航
			currentPage = '首页';
			$('.filterType').addClass('hide');
			$('.selected').removeClass('selected');
			$('#secondPage').css('display', 'none');
			$('.logo').css('display', 'block');
			$('.container').show();
		} else {
			//返回二级页面
			if($('.selected').text() == '关于'){
				$('#secondPageHeaderName').text($('.selected').text());
			} else {
				$('#secondPageHeaderName').text($('.selected').text() + '信息');
			}
			$('#pageInfo').addClass('hide');
			$('#secondPageContent').css('display', 'block');
			$('#secondPageHeaderName').show();
		}
	});
	
	//点击二级页面名
	$('#secondPageHeaderName').click(function(){
		if($('.selected').text() == '关于'){
			return;
		}
		$('#secondPageHeaderName').hide();
		$('#pageInfo').removeClass('hide');
		$('.secondPageContent').css('display', 'none');
	});
	
	//点击范围
	$('.secondPageFilter').click(function(){
		$('.filter').slideToggle('fast');
		if($('#slidePicture').hasClass('up')){
			$('#slidePicture').removeClass('up').addClass('down');
		} else {
			$('#slidePicture').removeClass('down').addClass('up');
		}
	});
	
	//点击筛选项
	$('.filterItem').click(function(){
		$('#secondPageContent').empty();
		$(this).toggleClass('filterSelected').siblings().removeClass('filterSelected')
		$(this).siblings().children().removeClass('filterSelected');
		$(this).siblings('.secondFilter').hide();
		if($(this).hasClass('filterSelected')){
			$(this).next('.secondFilter').slideToggle();
		}
	})

	$('.secondPageContent').on('click', '.contentBox', function(){
		$(this).children('.detailContentBox').slideToggle();
	})

	
	//点击filter选项
	//武器-近战武器
	function createCloseCombatWeaponContentBox(array){
		$.each(array, function(key, val){
			$('#secondPageContent').append(
				"<div class='contentBox'>" +
					"<div class='twoThird'>" + val.name + "</div>" + 
					"<div class='three'>" + val.type + "</div>" + 
					"<div class='clear'></div>" + 
					"<div class='detailContentBox hide'>" + 
						"<div class='full description'>" + val.description + "<br>" + val.cnDescription + "</div>" + 
						"<div class='clear'></div>" + 
					"</div>" + 
				"</div>");
		})
	}


	$('#closeCombatWeapon').click(function(){
		if($(this).hasClass('filterSelected')){
			createCloseCombatWeaponContentBox(closeCombatWeaponList);
		} else {
			$('.secondPageContent').empty();
		}
	})

	//武器-格斗武器
	function createMeleeWeaponContentBox(array){
		$.each(array, function(key, val){
			$('#secondPageContent').append(
				"<div class='contentBox'>" +
					"<div class='half'>" + val.name + "</div>" + 
					"<div class='half'>" + val.secondType + "</div>" + 
					"<div class='clear'></div>" + 
					"<div class='detailContentBox hide borderTop'>" + 
						"<div class='half'>Salvage: </div><div class='half'>" + val.salvage + "</div><div class='clear'></div>" +
						"<div class='full description'>" + val.description + "<br>" + val.cnDescription + "</div>" + 
						"<div class='clear'></div>" + 
					"</div>" + 
				"</div>");
		})
	}


	$('#meleeWeapon, #blunt, #bladed').click(function(){
		var meleeWeaponFilterList = [];
		if($('#blunt').hasClass('filterSelected')){
			$.each(meleeWeaponList, function(key, val){
				if(val.secondType == '钝器'){
					meleeWeaponFilterList.push(val);
				}
			})
			createMeleeWeaponContentBox(meleeWeaponFilterList);
		} else if($('#bladed').hasClass('filterSelected')){
			$.each(meleeWeaponList, function(key, val){
				if(val.secondType == '锐器'){
					meleeWeaponFilterList.push(val);
				}
			})
			createMeleeWeaponContentBox(meleeWeaponFilterList);
		} else if($('#meleeWeapon').hasClass('filterSelected')){
			createMeleeWeaponContentBox(meleeWeaponList);
		} else {
			$('.secondPageContent').empty();
		}
	})	
		
//武器-远程武器
function createRangedWeaponContentBox(array){
	$.each(array, function(key, val){
		$('#secondPageContent').append(
			"<div class='contentBox'>" +
				"<div class='half'>" + val.name + "</div>" + 
				"<div class='half'>" + val.secondType + "</div>" + 
				"<div class='clear'></div>" + 
				"<div class='detailContentBox hide borderTop'>" + 
					"<div class='half borderTop'>口径: </div><div class='half borderTop'>" + val.caliber + "</div><div class='clear'></div>" +
					"<div class='half borderTop'>容量: </div><div class='half borderTop'>" + val.capacity + "</div><div class='clear'></div>" +
					"<div class='half borderTop'>Salvage: </div><div class='half borderTop'>" + val.salvage + "</div><div class='clear'></div>" +
					"<div class='full description borderTop'>" + val.description + "<br>" + val.cnDescription + "</div>" + 
					"<div class='clear'></div>" + 
				"</div>" + 
			"</div>");
	})
}


$('#rangedWeapon, #rangedWeaponType > div').click(function(){
	var rangedWeaponFilterList = [];
	if($('#pistol').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '手枪'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#revolver').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '左轮手枪'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#assaultPistol').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '突击手枪'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#rifle').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '步枪'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#assault').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '突击步枪'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#antiMetarielRifle').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '反器材步枪'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#shotgun').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '霰弹枪'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#launcher').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '发射器'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#cannon').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.secondType == '榴弹炮'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#xovee').hasClass('filterSelected')){
		$.each(rangedWeaponList, function(key, val){
			if(val.name == 'Xovee'){
				rangedWeaponFilterList.push(val);
			}
		})
		createRangedWeaponContentBox(rangedWeaponFilterList);
	} else if($('#rangedWeapon').hasClass('filterSelected')){
		createRangedWeaponContentBox(rangedWeaponList);
	} else {
		$('.secondPageContent').empty();
	}
})	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});