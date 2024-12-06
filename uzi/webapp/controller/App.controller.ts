import BaseController from "./BaseController";

/**
 * @namespace uzi.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		console.log("uzi oninit")
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
	}
}
