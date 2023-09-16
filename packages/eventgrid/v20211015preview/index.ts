import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EventChannelArgs } from "./eventChannel";
export type EventChannel = import("./eventChannel").EventChannel;
export const EventChannel: typeof import("./eventChannel").EventChannel = null as any;
utilities.lazyLoad(exports, ["EventChannel"], () => require("./eventChannel"));

export { GetEventChannelArgs, GetEventChannelResult, GetEventChannelOutputArgs } from "./getEventChannel";
export const getEventChannel: typeof import("./getEventChannel").getEventChannel = null as any;
export const getEventChannelOutput: typeof import("./getEventChannel").getEventChannelOutput = null as any;
utilities.lazyLoad(exports, ["getEventChannel","getEventChannelOutput"], () => require("./getEventChannel"));

export { GetPartnerDestinationArgs, GetPartnerDestinationResult, GetPartnerDestinationOutputArgs } from "./getPartnerDestination";
export const getPartnerDestination: typeof import("./getPartnerDestination").getPartnerDestination = null as any;
export const getPartnerDestinationOutput: typeof import("./getPartnerDestination").getPartnerDestinationOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerDestination","getPartnerDestinationOutput"], () => require("./getPartnerDestination"));

export { GetPartnerRegistrationArgs, GetPartnerRegistrationResult, GetPartnerRegistrationOutputArgs } from "./getPartnerRegistration";
export const getPartnerRegistration: typeof import("./getPartnerRegistration").getPartnerRegistration = null as any;
export const getPartnerRegistrationOutput: typeof import("./getPartnerRegistration").getPartnerRegistrationOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerRegistration","getPartnerRegistrationOutput"], () => require("./getPartnerRegistration"));

export { PartnerDestinationArgs } from "./partnerDestination";
export type PartnerDestination = import("./partnerDestination").PartnerDestination;
export const PartnerDestination: typeof import("./partnerDestination").PartnerDestination = null as any;
utilities.lazyLoad(exports, ["PartnerDestination"], () => require("./partnerDestination"));

export { PartnerRegistrationArgs } from "./partnerRegistration";
export type PartnerRegistration = import("./partnerRegistration").PartnerRegistration;
export const PartnerRegistration: typeof import("./partnerRegistration").PartnerRegistration = null as any;
utilities.lazyLoad(exports, ["PartnerRegistration"], () => require("./partnerRegistration"));


// Export enums:
export * from "../types/enums/v20211015preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:eventgrid/v20211015preview:EventChannel":
                return new EventChannel(name, <any>undefined, { urn })
            case "azure-native:eventgrid/v20211015preview:PartnerDestination":
                return new PartnerDestination(name, <any>undefined, { urn })
            case "azure-native:eventgrid/v20211015preview:PartnerRegistration":
                return new PartnerRegistration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "eventgrid/v20211015preview", _module)
