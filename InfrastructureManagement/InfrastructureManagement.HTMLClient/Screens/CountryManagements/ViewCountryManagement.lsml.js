/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCountryManagement.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.CountryFiles.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.CountryFiles." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

