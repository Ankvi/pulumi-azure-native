import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AppServiceCertificateOrderArgs } from "./appServiceCertificateOrder";
export type AppServiceCertificateOrder = import("./appServiceCertificateOrder").AppServiceCertificateOrder;
export const AppServiceCertificateOrder: typeof import("./appServiceCertificateOrder").AppServiceCertificateOrder = null as any;
utilities.lazyLoad(exports, ["AppServiceCertificateOrder"], () => require("./appServiceCertificateOrder"));

export { AppServiceCertificateOrderCertificateArgs } from "./appServiceCertificateOrderCertificate";
export type AppServiceCertificateOrderCertificate = import("./appServiceCertificateOrderCertificate").AppServiceCertificateOrderCertificate;
export const AppServiceCertificateOrderCertificate: typeof import("./appServiceCertificateOrderCertificate").AppServiceCertificateOrderCertificate = null as any;
utilities.lazyLoad(exports, ["AppServiceCertificateOrderCertificate"], () => require("./appServiceCertificateOrderCertificate"));

export { GetAppServiceCertificateOrderArgs, GetAppServiceCertificateOrderResult, GetAppServiceCertificateOrderOutputArgs } from "./getAppServiceCertificateOrder";
export const getAppServiceCertificateOrder: typeof import("./getAppServiceCertificateOrder").getAppServiceCertificateOrder = null as any;
export const getAppServiceCertificateOrderOutput: typeof import("./getAppServiceCertificateOrder").getAppServiceCertificateOrderOutput = null as any;
utilities.lazyLoad(exports, ["getAppServiceCertificateOrder","getAppServiceCertificateOrderOutput"], () => require("./getAppServiceCertificateOrder"));

export { GetAppServiceCertificateOrderCertificateArgs, GetAppServiceCertificateOrderCertificateResult, GetAppServiceCertificateOrderCertificateOutputArgs } from "./getAppServiceCertificateOrderCertificate";
export const getAppServiceCertificateOrderCertificate: typeof import("./getAppServiceCertificateOrderCertificate").getAppServiceCertificateOrderCertificate = null as any;
export const getAppServiceCertificateOrderCertificateOutput: typeof import("./getAppServiceCertificateOrderCertificate").getAppServiceCertificateOrderCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getAppServiceCertificateOrderCertificate","getAppServiceCertificateOrderCertificateOutput"], () => require("./getAppServiceCertificateOrderCertificate"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:certificateregistration:AppServiceCertificateOrder":
                return new AppServiceCertificateOrder(name, <any>undefined, { urn })
            case "azure-native:certificateregistration:AppServiceCertificateOrderCertificate":
                return new AppServiceCertificateOrderCertificate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "certificateregistration", _module)