var item_template="<li class='{{class}}'>{{num}}.{{name}}({{date}})</li>";
var data_url="https://awiclass.monoame.com/api/command.php?type=get&name=tododata";
var tododata;

$.ajax(
	{
		url: data_url,
			success: function(res){
				tododata=JSON.parse(res);
				for(var i=0;i<tododata.length;i++){
					var item=tododata[i];
					var now_class="";
					if(item.done==true){
						now_class="done";
					}
					var now_item=item_template.replace("{{name}}",item.name)
					.replace("{{num}}",i+1)
					.replace("{{date}}",item.date)
					.replace("{{class}}",now_class);
					$("#listitem").append(now_item);
				}
			}
	}
);