import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EdgeSiteArgs } from "./edgeSite";
export type EdgeSite = import("./edgeSite").EdgeSite;
export const EdgeSite: typeof import("./edgeSite").EdgeSite = null as any;
utilities.lazyLoad(exports, ["EdgeSite"], () => require("./edgeSite"));

export { GetEdgeSiteArgs, GetEdgeSiteResult, GetEdgeSiteOutputArgs } from "./getEdgeSite";
export const getEdgeSite: typeof import("./getEdgeSite").getEdgeSite = null as any;
export const getEdgeSiteOutput: typeof import("./getEdgeSite").getEdgeSiteOutput = null as any;
utilities.lazyLoad(exports, ["getEdgeSite","getEdgeSiteOutput"], () => require("./getEdgeSite"));

export { GetGroundStationArgs, GetGroundStationResult, GetGroundStationOutputArgs } from "./getGroundStation";
export const getGroundStation: typeof import("./getGroundStation").getGroundStation = null as any;
export const getGroundStationOutput: typeof import("./getGroundStation").getGroundStationOutput = null as any;
utilities.lazyLoad(exports, ["getGroundStation","getGroundStationOutput"], () => require("./getGroundStation"));

export { GetL2ConnectionArgs, GetL2ConnectionResult, GetL2ConnectionOutputArgs } from "./getL2Connection";
export const getL2Connection: typeof import("./getL2Connection").getL2Connection = null as any;
export const getL2ConnectionOutput: typeof import("./getL2Connection").getL2ConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getL2Connection","getL2ConnectionOutput"], () => require("./getL2Connection"));

export { GroundStationArgs } from "./groundStation";
export type GroundStation = import("./groundStation").GroundStation;
export const GroundStation: typeof import("./groundStation").GroundStation = null as any;
utilities.lazyLoad(exports, ["GroundStation"], () => require("./groundStation"));

export { L2ConnectionArgs } from "./l2connection";
export type L2Connection = import("./l2connection").L2Connection;
export const L2Connection: typeof import("./l2connection").L2Connection = null as any;
utilities.lazyLoad(exports, ["L2Connection"], () => require("./l2connection"));

export { ListEdgeSiteL2ConnectionsArgs, ListEdgeSiteL2ConnectionsResult, ListEdgeSiteL2ConnectionsOutputArgs } from "./listEdgeSiteL2Connections";
export const listEdgeSiteL2Connections: typeof import("./listEdgeSiteL2Connections").listEdgeSiteL2Connections = null as any;
export const listEdgeSiteL2ConnectionsOutput: typeof import("./listEdgeSiteL2Connections").listEdgeSiteL2ConnectionsOutput = null as any;
utilities.lazyLoad(exports, ["listEdgeSiteL2Connections","listEdgeSiteL2ConnectionsOutput"], () => require("./listEdgeSiteL2Connections"));

export { ListGroundStationL2ConnectionsArgs, ListGroundStationL2ConnectionsResult, ListGroundStationL2ConnectionsOutputArgs } from "./listGroundStationL2Connections";
export const listGroundStationL2Connections: typeof import("./listGroundStationL2Connections").listGroundStationL2Connections = null as any;
export const listGroundStationL2ConnectionsOutput: typeof import("./listGroundStationL2Connections").listGroundStationL2ConnectionsOutput = null as any;
utilities.lazyLoad(exports, ["listGroundStationL2Connections","listGroundStationL2ConnectionsOutput"], () => require("./listGroundStationL2Connections"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:orbital/v20240301preview:EdgeSite":
                return new EdgeSite(name, <any>undefined, { urn })
            case "azure-native:orbital/v20240301preview:GroundStation":
                return new GroundStation(name, <any>undefined, { urn })
            case "azure-native:orbital/v20240301preview:L2Connection":
                return new L2Connection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "orbital/v20240301preview", _module)