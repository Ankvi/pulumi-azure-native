import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CommunicationsGatewayArgs } from "./communicationsGateway";
export type CommunicationsGateway = import("./communicationsGateway").CommunicationsGateway;
export const CommunicationsGateway: typeof import("./communicationsGateway").CommunicationsGateway = null as any;
utilities.lazyLoad(exports, ["CommunicationsGateway"], () => require("./communicationsGateway"));

export { GetCommunicationsGatewayArgs, GetCommunicationsGatewayResult, GetCommunicationsGatewayOutputArgs } from "./getCommunicationsGateway";
export const getCommunicationsGateway: typeof import("./getCommunicationsGateway").getCommunicationsGateway = null as any;
export const getCommunicationsGatewayOutput: typeof import("./getCommunicationsGateway").getCommunicationsGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getCommunicationsGateway","getCommunicationsGatewayOutput"], () => require("./getCommunicationsGateway"));

export { GetTestLineArgs, GetTestLineResult, GetTestLineOutputArgs } from "./getTestLine";
export const getTestLine: typeof import("./getTestLine").getTestLine = null as any;
export const getTestLineOutput: typeof import("./getTestLine").getTestLineOutput = null as any;
utilities.lazyLoad(exports, ["getTestLine","getTestLineOutput"], () => require("./getTestLine"));

export { TestLineArgs } from "./testLine";
export type TestLine = import("./testLine").TestLine;
export const TestLine: typeof import("./testLine").TestLine = null as any;
utilities.lazyLoad(exports, ["TestLine"], () => require("./testLine"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:voiceservices/v20230403:CommunicationsGateway":
                return new CommunicationsGateway(name, <any>undefined, { urn })
            case "azure-native:voiceservices/v20230403:TestLine":
                return new TestLine(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "voiceservices/v20230403", _module)