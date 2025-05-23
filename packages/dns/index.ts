import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DnssecConfigArgs } from "./dnssecConfig";
export type DnssecConfig = import("./dnssecConfig").DnssecConfig;
export const DnssecConfig: typeof import("./dnssecConfig").DnssecConfig = null as any;
utilities.lazyLoad(exports, ["DnssecConfig"], () => require("./dnssecConfig"));

export { GetDnsResourceReferenceByTarResourcesArgs, GetDnsResourceReferenceByTarResourcesResult, GetDnsResourceReferenceByTarResourcesOutputArgs } from "./getDnsResourceReferenceByTarResources";
export const getDnsResourceReferenceByTarResources: typeof import("./getDnsResourceReferenceByTarResources").getDnsResourceReferenceByTarResources = null as any;
export const getDnsResourceReferenceByTarResourcesOutput: typeof import("./getDnsResourceReferenceByTarResources").getDnsResourceReferenceByTarResourcesOutput = null as any;
utilities.lazyLoad(exports, ["getDnsResourceReferenceByTarResources","getDnsResourceReferenceByTarResourcesOutput"], () => require("./getDnsResourceReferenceByTarResources"));

export { GetDnssecConfigArgs, GetDnssecConfigResult, GetDnssecConfigOutputArgs } from "./getDnssecConfig";
export const getDnssecConfig: typeof import("./getDnssecConfig").getDnssecConfig = null as any;
export const getDnssecConfigOutput: typeof import("./getDnssecConfig").getDnssecConfigOutput = null as any;
utilities.lazyLoad(exports, ["getDnssecConfig","getDnssecConfigOutput"], () => require("./getDnssecConfig"));

export { GetRecordSetArgs, GetRecordSetResult, GetRecordSetOutputArgs } from "./getRecordSet";
export const getRecordSet: typeof import("./getRecordSet").getRecordSet = null as any;
export const getRecordSetOutput: typeof import("./getRecordSet").getRecordSetOutput = null as any;
utilities.lazyLoad(exports, ["getRecordSet","getRecordSetOutput"], () => require("./getRecordSet"));

export { GetZoneArgs, GetZoneResult, GetZoneOutputArgs } from "./getZone";
export const getZone: typeof import("./getZone").getZone = null as any;
export const getZoneOutput: typeof import("./getZone").getZoneOutput = null as any;
utilities.lazyLoad(exports, ["getZone","getZoneOutput"], () => require("./getZone"));

export { RecordSetArgs } from "./recordSet";
export type RecordSet = import("./recordSet").RecordSet;
export const RecordSet: typeof import("./recordSet").RecordSet = null as any;
utilities.lazyLoad(exports, ["RecordSet"], () => require("./recordSet"));

export { ZoneArgs } from "./zone";
export type Zone = import("./zone").Zone;
export const Zone: typeof import("./zone").Zone = null as any;
utilities.lazyLoad(exports, ["Zone"], () => require("./zone"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dns:DnssecConfig":
                return new DnssecConfig(name, <any>undefined, { urn })
            case "azure-native:dns:RecordSet":
                return new RecordSet(name, <any>undefined, { urn })
            case "azure-native:dns:Zone":
                return new Zone(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dns", _module)