import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { ListSiteIdentifiersAssignedToHostNameArgs, ListSiteIdentifiersAssignedToHostNameResult, ListSiteIdentifiersAssignedToHostNameOutputArgs } from "./listSiteIdentifiersAssignedToHostName";
export const listSiteIdentifiersAssignedToHostName: typeof import("./listSiteIdentifiersAssignedToHostName").listSiteIdentifiersAssignedToHostName = null as any;
export const listSiteIdentifiersAssignedToHostNameOutput: typeof import("./listSiteIdentifiersAssignedToHostName").listSiteIdentifiersAssignedToHostNameOutput = null as any;
utilities.lazyLoad(exports, ["listSiteIdentifiersAssignedToHostName","listSiteIdentifiersAssignedToHostNameOutput"], () => require("./listSiteIdentifiersAssignedToHostName"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20160301:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20160301", _module)
