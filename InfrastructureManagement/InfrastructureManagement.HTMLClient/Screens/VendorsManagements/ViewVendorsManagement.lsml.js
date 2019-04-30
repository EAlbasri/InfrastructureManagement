/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewVendorsManagement.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.VendorFiles.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.VendorFiles." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

