/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewServiceProviderManagement.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ServiceProviderFiles.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ServiceProviderFiles." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

