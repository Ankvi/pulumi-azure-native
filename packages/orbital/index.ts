import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ContactArgs } from "./contact";
export type Contact = import("./contact").Contact;
export const Contact: typeof import("./contact").Contact = null as any;
utilities.lazyLoad(exports, ["Contact"], () => require("./contact"));

export { ContactProfileArgs } from "./contactProfile";
export type ContactProfile = import("./contactProfile").ContactProfile;
export const ContactProfile: typeof import("./contactProfile").ContactProfile = null as any;
utilities.lazyLoad(exports, ["ContactProfile"], () => require("./contactProfile"));

export { EdgeSiteArgs } from "./edgeSite";
export type EdgeSite = import("./edgeSite").EdgeSite;
export const EdgeSite: typeof import("./edgeSite").EdgeSite = null as any;
utilities.lazyLoad(exports, ["EdgeSite"], () => require("./edgeSite"));

export { GetContactArgs, GetContactResult, GetContactOutputArgs } from "./getContact";
export const getContact: typeof import("./getContact").getContact = null as any;
export const getContactOutput: typeof import("./getContact").getContactOutput = null as any;
utilities.lazyLoad(exports, ["getContact","getContactOutput"], () => require("./getContact"));

export { GetContactProfileArgs, GetContactProfileResult, GetContactProfileOutputArgs } from "./getContactProfile";
export const getContactProfile: typeof import("./getContactProfile").getContactProfile = null as any;
export const getContactProfileOutput: typeof import("./getContactProfile").getContactProfileOutput = null as any;
utilities.lazyLoad(exports, ["getContactProfile","getContactProfileOutput"], () => require("./getContactProfile"));

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

export { GetSpacecraftArgs, GetSpacecraftResult, GetSpacecraftOutputArgs } from "./getSpacecraft";
export const getSpacecraft: typeof import("./getSpacecraft").getSpacecraft = null as any;
export const getSpacecraftOutput: typeof import("./getSpacecraft").getSpacecraftOutput = null as any;
utilities.lazyLoad(exports, ["getSpacecraft","getSpacecraftOutput"], () => require("./getSpacecraft"));

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

export { ListSpacecraftAvailableContactsArgs, ListSpacecraftAvailableContactsResult, ListSpacecraftAvailableContactsOutputArgs } from "./listSpacecraftAvailableContacts";
export const listSpacecraftAvailableContacts: typeof import("./listSpacecraftAvailableContacts").listSpacecraftAvailableContacts = null as any;
export const listSpacecraftAvailableContactsOutput: typeof import("./listSpacecraftAvailableContacts").listSpacecraftAvailableContactsOutput = null as any;
utilities.lazyLoad(exports, ["listSpacecraftAvailableContacts","listSpacecraftAvailableContactsOutput"], () => require("./listSpacecraftAvailableContacts"));

export { SpacecraftArgs } from "./spacecraft";
export type Spacecraft = import("./spacecraft").Spacecraft;
export const Spacecraft: typeof import("./spacecraft").Spacecraft = null as any;
utilities.lazyLoad(exports, ["Spacecraft"], () => require("./spacecraft"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:orbital:Contact":
                return new Contact(name, <any>undefined, { urn })
            case "azure-native:orbital:ContactProfile":
                return new ContactProfile(name, <any>undefined, { urn })
            case "azure-native:orbital:EdgeSite":
                return new EdgeSite(name, <any>undefined, { urn })
            case "azure-native:orbital:GroundStation":
                return new GroundStation(name, <any>undefined, { urn })
            case "azure-native:orbital:L2Connection":
                return new L2Connection(name, <any>undefined, { urn })
            case "azure-native:orbital:Spacecraft":
                return new Spacecraft(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "orbital", _module)