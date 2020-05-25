import { AxiosStatic } from "axios";

declare module "redaxios" {
	const redaxios: AxiosStatic;
	export default redaxios;
}
