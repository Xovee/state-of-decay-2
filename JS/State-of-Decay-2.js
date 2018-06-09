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
		$('.container').hide();
		$(this).children('.liName').addClass('selected');
		currentPage = $('.selected').text();
		if(currentPage == '武器'){
			$('#filterHave, #filterWeapon').removeClass('hide');
		}
		if(currentPage == '车辆'){
			$('#filterHave, #filterVehicle').removeClass('hide');
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
	
	//点击筛选
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
		$(this).toggleClass('filterSelected').siblings().removeClass('filterSelected')
		$(this).siblings().children().removeClass('filterSelected');
		$(this).siblings('.secondFilter').hide();
		if($(this).hasClass('filterSelected')){
			$(this).next('.secondFilter').slideToggle();
		}
	})

	$('.contentBox').click(function(){
		$(this).children('.detailContentBox').slideToggle('fast');
	})
	
	//点击filter选项
	//武器-近战武器
	function createCloseCombatWeaponContentBox(array){
		$('#secondPageContent').empty();
		$.each(array, function(key, val){
			$('#secondPageContent').append("<div class='contentBox'><div class='twoThird'>" + val.name + "</div><div class='three'>" 
			+ val.type + "</div><div class='clear'></div><div class='detailContentBox hide'><div class='full description'>" + 
			val.description + "<br>" + val.cnDescription + "</div><div class='clear'></div></div></div>");
		})
	}

	$('#closeCombatWeapon').click(function(){
		createCloseCombatWeaponContentBox(closeCombatWeaponList);
	})

	
		


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});