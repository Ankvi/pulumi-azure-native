import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPacketCoreControlPlaneArgs, GetPacketCoreControlPlaneResult, GetPacketCoreControlPlaneOutputArgs } from "./getPacketCoreControlPlane";
export const getPacketCoreControlPlane: typeof import("./getPacketCoreControlPlane").getPacketCoreControlPlane = null as any;
export const getPacketCoreControlPlaneOutput: typeof import("./getPacketCoreControlPlane").getPacketCoreControlPlaneOutput = null as any;
utilities.lazyLoad(exports, ["getPacketCoreControlPlane","getPacketCoreControlPlaneOutput"], () => require("./getPacketCoreControlPlane"));

export { GetSimArgs, GetSimResult, GetSimOutputArgs } from "./getSim";
export const getSim: typeof import("./getSim").getSim = null as any;
export const getSimOutput: typeof import("./getSim").getSimOutput = null as any;
utilities.lazyLoad(exports, ["getSim","getSimOutput"], () => require("./getSim"));

export { PacketCoreControlPlaneArgs } from "./packetCoreControlPlane";
export type PacketCoreControlPlane = import("./packetCoreControlPlane").PacketCoreControlPlane;
export const PacketCoreControlPlane: typeof import("./packetCoreControlPlane").PacketCoreControlPlane = null as any;
utilities.lazyLoad(exports, ["PacketCoreControlPlane"], () => require("./packetCoreControlPlane"));

export { SimArgs } from "./sim";
export type Sim = import("./sim").Sim;
export const Sim: typeof import("./sim").Sim = null as any;
utilities.lazyLoad(exports, ["Sim"], () => require("./sim"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:mobilenetwork/v20220301preview:PacketCoreControlPlane":
                return new PacketCoreControlPlane(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20220301preview:Sim":
                return new Sim(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "mobilenetwork/v20220301preview", _module)