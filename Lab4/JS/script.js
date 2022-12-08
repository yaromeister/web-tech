$(function() {
    //hide first div or remove after append using `$(".card:first").remove()`
    $(".card:first").hide()
    $.ajax({
      url: "data/categories.json",
      success: function(result) {
        $.each(result, function(index, item) {
          var cards = $(".card:first").clone() //clone first divs
          var id = item.id;
          var shortName = item.short_name;
          var name = item.name;
          var instruction = item.special_instruction;
          var url = item.url;
          //add values inside divs
          $(cards).find(".card-header").html("user id: " + userId + " - " + "id: " + typeId);
          $(cards).find(".card-title").html(titleId);
          $(cards).find(".card-text").html(bodyId);
          $(cards).show() //show cards
          $(cards).appendTo($(".container")) //append to container
        });
      }
    });
  });

function loadCategories(link) {
    //hide first div or remove after append using `$(".card:first").remove()`
    $(".card:first").hide()
    $.ajax({
      url: link,
      success: function(result) {
        $.each(result.catalog_items, function(index, item) {
          var cards = $(".card:first").clone() //clone first divs
          var id = item.id;
          var shortName = item.short_name;
          var name = item.name;
          var description = item.description;
          var price_retail = item.price_retail;
          var price_wholesale = item.price_wholesale;
          var amount_retail = item.amount_retail;
          var amount_wholesale = item.amount_wholesale;
          //add values inside divs
          $(cards).find(".card-header").html("user id: " + userId + " - " + "id: " + typeId);
          $(cards).find(".card-title").html(titleId);
          $(cards).find(".card-text").html(bodyId);
          $(cards).show() //show cards
          $(cards).appendTo($(".container")) //append to container
        });
      }
    })
    
};