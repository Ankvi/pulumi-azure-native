import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPacketCaptureArgs, GetPacketCaptureResult, GetPacketCaptureOutputArgs } from "./getPacketCapture";
export const getPacketCapture: typeof import("./getPacketCapture").getPacketCapture = null as any;
export const getPacketCaptureOutput: typeof import("./getPacketCapture").getPacketCaptureOutput = null as any;
utilities.lazyLoad(exports, ["getPacketCapture","getPacketCaptureOutput"], () => require("./getPacketCapture"));

export { GetPrivateRecordSetArgs, GetPrivateRecordSetResult, GetPrivateRecordSetOutputArgs } from "./getPrivateRecordSet";
export const getPrivateRecordSet: typeof import("./getPrivateRecordSet").getPrivateRecordSet = null as any;
export const getPrivateRecordSetOutput: typeof import("./getPrivateRecordSet").getPrivateRecordSetOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateRecordSet","getPrivateRecordSetOutput"], () => require("./getPrivateRecordSet"));

export { GetPrivateZoneArgs, GetPrivateZoneResult, GetPrivateZoneOutputArgs } from "./getPrivateZone";
export const getPrivateZone: typeof import("./getPrivateZone").getPrivateZone = null as any;
export const getPrivateZoneOutput: typeof import("./getPrivateZone").getPrivateZoneOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateZone","getPrivateZoneOutput"], () => require("./getPrivateZone"));

export { GetSubnetArgs, GetSubnetResult, GetSubnetOutputArgs } from "./getSubnet";
export const getSubnet: typeof import("./getSubnet").getSubnet = null as any;
export const getSubnetOutput: typeof import("./getSubnet").getSubnetOutput = null as any;
utilities.lazyLoad(exports, ["getSubnet","getSubnetOutput"], () => require("./getSubnet"));

export { GetVirtualHubArgs, GetVirtualHubResult, GetVirtualHubOutputArgs } from "./getVirtualHub";
export const getVirtualHub: typeof import("./getVirtualHub").getVirtualHub = null as any;
export const getVirtualHubOutput: typeof import("./getVirtualHub").getVirtualHubOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualHub","getVirtualHubOutput"], () => require("./getVirtualHub"));

export { GetVirtualNetworkLinkArgs, GetVirtualNetworkLinkResult, GetVirtualNetworkLinkOutputArgs } from "./getVirtualNetworkLink";
export const getVirtualNetworkLink: typeof import("./getVirtualNetworkLink").getVirtualNetworkLink = null as any;
export const getVirtualNetworkLinkOutput: typeof import("./getVirtualNetworkLink").getVirtualNetworkLinkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkLink","getVirtualNetworkLinkOutput"], () => require("./getVirtualNetworkLink"));

export { PacketCaptureArgs } from "./packetCapture";
export type PacketCapture = import("./packetCapture").PacketCapture;
export const PacketCapture: typeof import("./packetCapture").PacketCapture = null as any;
utilities.lazyLoad(exports, ["PacketCapture"], () => require("./packetCapture"));

export { PrivateRecordSetArgs } from "./privateRecordSet";
export type PrivateRecordSet = import("./privateRecordSet").PrivateRecordSet;
export const PrivateRecordSet: typeof import("./privateRecordSet").PrivateRecordSet = null as any;
utilities.lazyLoad(exports, ["PrivateRecordSet"], () => require("./privateRecordSet"));

export { PrivateZoneArgs } from "./privateZone";
export type PrivateZone = import("./privateZone").PrivateZone;
export const PrivateZone: typeof import("./privateZone").PrivateZone = null as any;
utilities.lazyLoad(exports, ["PrivateZone"], () => require("./privateZone"));

export { SubnetArgs } from "./subnet";
export type Subnet = import("./subnet").Subnet;
export const Subnet: typeof import("./subnet").Subnet = null as any;
utilities.lazyLoad(exports, ["Subnet"], () => require("./subnet"));

export { VirtualHubArgs } from "./virtualHub";
export type VirtualHub = import("./virtualHub").VirtualHub;
export const VirtualHub: typeof import("./virtualHub").VirtualHub = null as any;
utilities.lazyLoad(exports, ["VirtualHub"], () => require("./virtualHub"));

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
            case "azure-native:network/v20200601:PacketCapture":
                return new PacketCapture(name, <any>undefined, { urn })
            case "azure-native:network/v20200601:PrivateRecordSet":
                return new PrivateRecordSet(name, <any>undefined, { urn })
            case "azure-native:network/v20200601:PrivateZone":
                return new PrivateZone(name, <any>undefined, { urn })
            case "azure-native:network/v20200601:Subnet":
                return new Subnet(name, <any>undefined, { urn })
            case "azure-native:network/v20200601:VirtualHub":
                return new VirtualHub(name, <any>undefined, { urn })
            case "azure-native:network/v20200601:VirtualNetworkLink":
                return new VirtualNetworkLink(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20200601", _module)