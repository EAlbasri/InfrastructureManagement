﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPublishedServiceManagement.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ServiceProviderPublicIPFiles.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ServiceProviderPublicIPFiles." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

