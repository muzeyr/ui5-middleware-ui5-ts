"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSONModel_1 = require("sap/ui/model/json/JSONModel");
var BindingMode_1 = require("sap/ui/model/BindingMode");
var Device_1 = require("sap/ui/Device");
exports.default = {
    createDeviceModel: function () {
        var oModel = new JSONModel_1.default(Device_1.default);
        oModel.setDefaultBindingMode(BindingMode_1.default.OneWay);
        return oModel;
    }
};
