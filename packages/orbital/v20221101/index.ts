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

export { GetContactArgs, GetContactResult, GetContactOutputArgs } from "./getContact";
export const getContact: typeof import("./getContact").getContact = null as any;
export const getContactOutput: typeof import("./getContact").getContactOutput = null as any;
utilities.lazyLoad(exports, ["getContact","getContactOutput"], () => require("./getContact"));

export { GetContactProfileArgs, GetContactProfileResult, GetContactProfileOutputArgs } from "./getContactProfile";
export const getContactProfile: typeof import("./getContactProfile").getContactProfile = null as any;
export const getContactProfileOutput: typeof import("./getContactProfile").getContactProfileOutput = null as any;
utilities.lazyLoad(exports, ["getContactProfile","getContactProfileOutput"], () => require("./getContactProfile"));

export { GetSpacecraftArgs, GetSpacecraftResult, GetSpacecraftOutputArgs } from "./getSpacecraft";
export const getSpacecraft: typeof import("./getSpacecraft").getSpacecraft = null as any;
export const getSpacecraftOutput: typeof import("./getSpacecraft").getSpacecraftOutput = null as any;
utilities.lazyLoad(exports, ["getSpacecraft","getSpacecraftOutput"], () => require("./getSpacecraft"));

export { ListSpacecraftAvailableContactsArgs, ListSpacecraftAvailableContactsResult, ListSpacecraftAvailableContactsOutputArgs } from "./listSpacecraftAvailableContacts";
export const listSpacecraftAvailableContacts: typeof import("./listSpacecraftAvailableContacts").listSpacecraftAvailableContacts = null as any;
export const listSpacecraftAvailableContactsOutput: typeof import("./listSpacecraftAvailableContacts").listSpacecraftAvailableContactsOutput = null as any;
utilities.lazyLoad(exports, ["listSpacecraftAvailableContacts","listSpacecraftAvailableContactsOutput"], () => require("./listSpacecraftAvailableContacts"));

export { SpacecraftArgs } from "./spacecraft";
export type Spacecraft = import("./spacecraft").Spacecraft;
export const Spacecraft: typeof import("./spacecraft").Spacecraft = null as any;
utilities.lazyLoad(exports, ["Spacecraft"], () => require("./spacecraft"));


// Export enums:
export * from "../types/enums/v20221101";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:orbital/v20221101:Contact":
                return new Contact(name, <any>undefined, { urn })
            case "azure-native:orbital/v20221101:ContactProfile":
                return new ContactProfile(name, <any>undefined, { urn })
            case "azure-native:orbital/v20221101:Spacecraft":
                return new Spacecraft(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "orbital/v20221101", _module)
