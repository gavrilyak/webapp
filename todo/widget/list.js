define([
  "dojo/query",
  "dojo/dom-construct",
  "dojo/text!./list/item.html",
  "dojo/text!./list.html",
  "dojo/dom",
  "dojo/NodeList-manipulate", "dojo/NodeList-traverse","dojo/NodeList-dom"
  //"dojo/NodeList-html", //will get parser
  //"lla/Destroy"
], function(
  query,
  construct,
  itemHtml,
  listHtml,
  dom
){

function Destroy(){
  return 0;   
}

function Item(basePath, opts){
  var div       = construct.toDom(String.trim(itemHtml));
  var span      = query('span', div);
  var button    = query('button', div);
  var listeners = listen();

  function edit(){
    var input = prompt('Edit to-do item:', span.text());
    if (!input) return;
    span.text(input)
  }

  function destroy(){
    construct.destroy(div);
  }

  function refresh(data){
    span.text(data);
  }

  function listen(){
    return [
      span.on("click", edit),
      button.on("click", destroy)
    ]
  }

  return {
    div : div,
    destroy  : Destroy(divsteners, div)
  }
}

function List(basePath, opts){
  var div       = construct.toDom(listHtml.trim());
  var button    = query('button',div);
  var ul        = query('ul', div);
  var listeners = listen();

  //query(div).on("click", (function(){ alert("Kliked"); })

  function addItem(){
    ul.append(Item(basePath + "item").div);
  }


  function something(evt){
    console.log("Some route" + evt.params.id);
  }

  function serverMessage(message){
    console.log("Server:" + message);
  }

  function showError(error){
    console.log("Error:" + error);
  }

  function listen(){
    return [
      button.on("click", addItem),
      //router.subscribe(basePath + "/something:id", something),
      //topic.subscribe(basePath  + "/some/server/message", serverMessage),
      //store.on("start", showLoading),
      //store.on("final", hideLoading),
      //store.on("error", showError),
      //store.on("data", refresh)
    ]
  }

  return {
    div: div
  }
}
return List;
});
