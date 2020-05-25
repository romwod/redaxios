import { AxiosStatic } from "axios";

declare module "redaxios" {
	const redaxios: AxiosStatic;
	export default redaxios;
}

export {
	AxiosTransformer,
	AxiosAdapter,
	AxiosBasicCredentials,
	AxiosProxyConfig,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
	AxiosPromise,
	CancelStatic,
	Cancel,
	Canceler,
	CancelTokenStatic,
	CancelToken,
	CancelTokenSource,
	AxiosInterceptorManager,
	AxiosInstance,
	AxiosStatic,
} from "axios";
