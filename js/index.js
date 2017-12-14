$(document).ready(function() {

  var dataArray = [];

  loadData();


  function loadData() {
    $.ajax({
      type: 'GET',
      url: './data/response.json',
      success: function(data) {
        dataArray = data;
        dataArray.forEach(function(item) {
          printItem(item);
        });
      },
      error: function() {
        console.log("Internal Server Error. Not possible to load exercises data.");
      }
    });
  }

  function printItem(item) {
      let item_elem = $('<div class="item">');

      if (item.selected) {
        item_elem.addClass('selected');
      } else {
        item_elem.addClass('unselected');
      }

      item_elem
        .append(
          $('<div class="content-wrapper">')
          .append(
            $('<div class="left-content">')
            .append(
              $('<p class="circle">')
            )
            .append(
              $('<span class="item-name">').text(item.menuOption.name)
            )
          )
          .append(
            $('<div class="right-content">')
            .append(
              $('<span class="price">').text('\u00A3' + item.menuOption.price)
            )
            .append(
              $('<div class="edit-delete-wrapper">')
            .append(
              $('<button type="button" class="edit-icon editable">')
              .append(
                $('<img src="img/icons/edit-icon.svg" alt="edit-icon">')
              ).on('click', function(e){
                var content =
                $('<div class="save-cancel-wrapper">')
                .append(

                  $('<button type="button" id="save-item" class="save-icon">')
                    .append(
                      $('<img src="img/icons/save-icon.svg" alt="save-icon">')
                    ).on('click', saveEditItem),
                  $('<button type="button" class="cancel-icon">')
                    .append(
                      $('<img src="img/icons/cancel-icon.svg"$ alt="cancel-icon">')
                    )
                )
                $(this).parent().replaceWith(content);
                content.parent();
                var kek = content.parent().parent().parent();
                // debugger;
                kek.find('span.item-name, span.price')
                  .css({
                    border: "1px solid red"
                  });

                $('span.item-name, span.price').bind('click',function(){
                  // debugger;
                    $('span.item-name').addClass('add-item-name');
                     $(this).attr('contentEditable',true);
                 });
              }),
            )
            .append(
              $('<button type="button" class="delete-icon" data-toggle="modal" data-target="#deleteModal">')
              .append(
                $('<img src="img/icons/delete-icon.svg" alt="delete-icon">')
              ).on('click', function(){
                $('#deleteItemModal').modal('show');
                  $('#delete-item-yes').on('click', function(){
                  item_elem.remove();
                })
              }),
            )
           )
          )

        ).appendTo($('#milk .item-container'));
  }


  var addNewItem = function(){
    $(this).addClass('hidden');
    $('<div class="item unselected">')
    .addClass('added-item')
    .append(
      $('<div class="content-wrapper">')
      .append(
        $('<div class="left-content">')
        .append(
          $('<p class="circle">'),
          $('<input placeholder="Name" id="add-item-name" class="item-name add-item-name">')
        )
      )
      .append(
        $('<div class="right-content">')
        .append(
          $('<input placeholder="Price" id="add-item-price" class="price add-item-price"  pattern="[0-9]">'),
          $('<span class="currency"></span>'),
          $('<p></p>'),
          $('<div class="save-cancel-wrapper">')
          .append(
            $('<button type="button" id="save-item" class="save-icon">')
              .append(
                $('<img src="img/icons/save-icon.svg" alt="save-icon">')
              ).on('click', saveNewItem),
            $('<button type="button" class="cancel-icon">')
              .append(
                $('<img src="img/icons/cancel-icon.svg" alt="cancel-icon">')
              )
          )
        )
      )

    ).insertBefore($(this));
  }

var saveNewItem = function(){

  var item_price =  $('#add-item-price').val();
  var item_name =  $('#add-item-name').val();

  var newItem = {
      "menuOption": {
          "optionType": "MILK",
          "name": item_name,
          "price": item_price
      },
      "selected": false
  }

  // $.ajax({
  //   type: 'POST',
  //   url: './data/response.json',
  //   data: newItem,
  //   success: function(data) {
          console.log(newItem);
          dataArray.push(newItem);
          $('.added-item').remove();
          $('.add-new').removeClass('hidden');
          printItem(newItem);
          //dataArray.push(data); // new item with ID
          //printItem(data);
          console.log(dataArray);
          // append
  //   },
  //   error: function() {
  //     console.log("Internal Server Error. Not possible to load exercises data.");
  //   }
  // });
}
var saveEditItem = function(){

}
$('.add-new').on('click', addNewItem);
});
