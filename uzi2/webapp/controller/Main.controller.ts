import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace uzi2.controller
 */
export default class Main extends BaseController {
	
	public onInit(): void {
		console.log("tsapp2 loaded");
	}

	public sayHello(): void {
		MessageBox.show("Hello World!");
	}
}
