import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrivateRecordSetArgs, GetPrivateRecordSetResult, GetPrivateRecordSetOutputArgs } from "./getPrivateRecordSet";
export const getPrivateRecordSet: typeof import("./getPrivateRecordSet").getPrivateRecordSet = null as any;
export const getPrivateRecordSetOutput: typeof import("./getPrivateRecordSet").getPrivateRecordSetOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateRecordSet","getPrivateRecordSetOutput"], () => require("./getPrivateRecordSet"));

export { GetPrivateZoneArgs, GetPrivateZoneResult, GetPrivateZoneOutputArgs } from "./getPrivateZone";
export const getPrivateZone: typeof import("./getPrivateZone").getPrivateZone = null as any;
export const getPrivateZoneOutput: typeof import("./getPrivateZone").getPrivateZoneOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateZone","getPrivateZoneOutput"], () => require("./getPrivateZone"));

export { GetVirtualNetworkLinkArgs, GetVirtualNetworkLinkResult, GetVirtualNetworkLinkOutputArgs } from "./getVirtualNetworkLink";
export const getVirtualNetworkLink: typeof import("./getVirtualNetworkLink").getVirtualNetworkLink = null as any;
export const getVirtualNetworkLinkOutput: typeof import("./getVirtualNetworkLink").getVirtualNetworkLinkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkLink","getVirtualNetworkLinkOutput"], () => require("./getVirtualNetworkLink"));

export { PrivateRecordSetArgs } from "./privateRecordSet";
export type PrivateRecordSet = import("./privateRecordSet").PrivateRecordSet;
export const PrivateRecordSet: typeof import("./privateRecordSet").PrivateRecordSet = null as any;
utilities.lazyLoad(exports, ["PrivateRecordSet"], () => require("./privateRecordSet"));

export { PrivateZoneArgs } from "./privateZone";
export type PrivateZone = import("./privateZone").PrivateZone;
export const PrivateZone: typeof import("./privateZone").PrivateZone = null as any;
utilities.lazyLoad(exports, ["PrivateZone"], () => require("./privateZone"));

export { VirtualNetworkLinkArgs } from "./virtualNetworkLink";
export type VirtualNetworkLink = import("./virtualNetworkLink").VirtualNetworkLink;
export const VirtualNetworkLink: typeof import("./virtualNetworkLink").VirtualNetworkLink = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkLink"], () => require("./virtualNetworkLink"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:privatedns:PrivateRecordSet":
                return new PrivateRecordSet(name, <any>undefined, { urn })
            case "azure-native:privatedns:PrivateZone":
                return new PrivateZone(name, <any>undefined, { urn })
            case "azure-native:privatedns:VirtualNetworkLink":
                return new VirtualNetworkLink(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "privatedns", _module)