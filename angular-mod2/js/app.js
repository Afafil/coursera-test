/**
 * Created by Alice on 9/8/2017.
 */
(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);



ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {

  var ToBuy = this;
  ToBuy.itemsToBuy = ShoppingListService.getItemsToBuy();

  ToBuy.BuyItem = function (itemIndex) {
      ShoppingListService.BuyItem(itemIndex);
  }
}




AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {

   var AlreadyBought = this;
   AlreadyBought.ItemsBought = ShoppingListService.getItemsBought();

}

function ShoppingListService() {

   var service = this;

   // List of shopping items
   var itemsToBuy = [
         {name: "cookies", quantity: 5},
         {name: "healthy snacks", quantity: 6},
         {name: "soda", quantity: 2},
         {name: "milk", quantity: 3},
         {name: "donuts", quantity: 10}
       ];

   var itemsBought = [];

   service.BuyItem = function (itemIndex) {
       // add this tem to ItemsBought List and remove from ItemsToBuy
       var item = {
           name: itemsToBuy[itemIndex].name,
           quantity: itemsToBuy[itemIndex].quantity
       };
       itemsBought.push(item);
       itemsToBuy.splice(itemIndex, 1);
   };

    var something = "something";
    service.getSomething = function () {
        return something;
    };

   service.getItemsToBuy = function () {
       return itemsToBuy;
   };

   service.getItemsBought = function () {
       return itemsBought;
   };

}



})();
