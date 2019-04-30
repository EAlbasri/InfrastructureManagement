/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewInventoryManagement.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.InventoryGroupFiles.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.InventoryGroupFiles." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

