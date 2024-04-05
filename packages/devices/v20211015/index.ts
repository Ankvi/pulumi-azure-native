import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DpsCertificateArgs } from "./dpsCertificate";
export type DpsCertificate = import("./dpsCertificate").DpsCertificate;
export const DpsCertificate: typeof import("./dpsCertificate").DpsCertificate = null as any;
utilities.lazyLoad(exports, ["DpsCertificate"], () => require("./dpsCertificate"));

export { GetDpsCertificateArgs, GetDpsCertificateResult, GetDpsCertificateOutputArgs } from "./getDpsCertificate";
export const getDpsCertificate: typeof import("./getDpsCertificate").getDpsCertificate = null as any;
export const getDpsCertificateOutput: typeof import("./getDpsCertificate").getDpsCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getDpsCertificate","getDpsCertificateOutput"], () => require("./getDpsCertificate"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:devices/v20211015:DpsCertificate":
                return new DpsCertificate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devices/v20211015", _module)