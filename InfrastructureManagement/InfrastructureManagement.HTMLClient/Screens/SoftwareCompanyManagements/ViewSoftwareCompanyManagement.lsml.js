/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewSoftwareCompanyManagement.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.SoftwareCompanyFiles.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.SoftwareCompanyFiles." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

