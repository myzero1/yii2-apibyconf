var apibyconfOptionsStr = $("#apibyconfoptions").text();
var apibyconfpositionStr = $("#apibyconfposition").text();
apibyconfOptionsStr = apibyconfOptionsStr.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
var apibyconfpositionStr = apibyconfpositionStr.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
var apibyconfposition = JSON.parse(apibyconfpositionStr);
var apibyconfpositionOld = JSON.parse(apibyconfpositionStr);

if (apibyconfOptionsStr != '') {
  apibyconfOptions = JSON.parse(apibyconfOptionsStr);
  var schemaRefs = apibyconfOptions['schemaRefs'];
  window.jsoneditorOldJson = apibyconfOptions['json'];
} else {
  var schemaRefs = schemas;
}

schemas['schema']['properties']['myGroup']['properties']['currentUser']['enum'] = schemaRefs['schema']['properties']['myGroup']['properties']['currentUser']['enum'];

// create the editor
var defaultOptions = {
    schema: schemas['schema'],
    schemaRefs: schemaRefs,
    mode: 'tree',
    modes: ['view', 'tree'],
    enableSort: false,
    enableTransform: false,
    templates: templates,
    // onValidate: onValidate,
    onEditable: onEditable,
    onCreateMenu: onCreateMenu,
    // onNodeName: onNodeName,
    onClassName: onClassName,
    onChangeJSON: onChangeJSON,
    onError: onError,
    onSelectionChange: onSelectionChange,
    onEvent: onEvent

};

var container = document.getElementById('jsoneditor');
window.jsoneditorCanUpdateOldJson = true;
var editor = new JSONEditor(container, defaultOptions, window.jsoneditorOldJson);

// for set position
while(apibyconfposition.length > 0){
    if (editor.node.findNodeByPath(apibyconfposition) != undefined) {
        editor.node.findNodeByPath(apibyconfposition).expand(false);
    }
    apibyconfposition.pop();
}
editor.setSelection({path: apibyconfpositionOld});

// for style
var style = `
<style>
    // .jsoneditor-dragarea{
    //     display:none;
    // }
    .jsoneditor-button.jsoneditor-contextmenu{
        display:none;
    }
    // .apibyconf-hide-node-id{
    //     display:none;
    // }
    // .apibyconf-hide-add_item_click_before_icon{
    //     display:none;
    // }
    // .jsoneditor-collapse-all, .jsoneditor-expand-all{
    //     display:none;
    // }
</style>
`;
$("body").append(style);

// for init 
showContextmenu();
adjustBackground();


$(document).on("click",".jsoneditor-expand-all",function(){
    showContextmenu();
    adjustBackground();
    $(".apibyconf-hide-add_item_click_before_icon").parents('tr').hide();
});



$(document).on("click","#jsoneditor",function(){
    var treepath = $('.jsoneditor-treepath').text();
    treepath = treepath.split('►');
    treepath.shift();
    var last = treepath[treepath.length-1];
    if (last == "") {
        treepath.pop();
    }

    document.getElementById("generator-position").value = JSON.stringify(treepath);
});