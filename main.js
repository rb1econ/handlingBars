var productsData = {
  productsList: [
    {
      title: "Super Mario World",
      cost: 11.25,
      image: "http://ecx.images-amazon.com/images/I/31QRKPQ24FL._AA160_.jpg",
      details: {
        players: "1-2",
        levels: "74 different areas in 7 different castles"
      }
    },
    {
      title: "Donkey Kong Country",
      cost: 12.45,
      image: "http://ecx.images-amazon.com/images/I/31ACJPWHBVL._AA160_.jpg",
      sale: 5.00,
      details: {
        characters: "Donkey Kong and Diddy Kong",
        enemies: "Kremlings"
      }
    },
    {
      title: "Street Fighter II",
      cost: 4.94,
      image: "http://ecx.images-amazon.com/images/I/51aqQ0RJtxL._AA160_.jpg",
      details: {
        description: 'Get dirty with the nasty street fighters in the multi-player Street Fighter II.'
      }
    }
  ]
};



$(document).on('ready', function() {

  var $handlingBars = $('#handleYourBars').html();

  productsData.productsList.map(function(item){
    
    var context = {title: item.title, cost: item.sale || item.cost, image: item.image, details: item.details};
    // if(item.sale){
    //   _.extend(item, {discount: 'ON SALE FROM ' +item.cost});
    //   console.log('there is a sale on: ', item);
    // }
    // else{
    //   _.extend(item, {discount: '...'});
    // }
   
    var template = Handlebars.compile($handlingBars);
    var html = template(context);
    console.log('END of map ',item);


    $('#product-container').append(html);
  });
});