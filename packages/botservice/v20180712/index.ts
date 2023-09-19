import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EnterpriseChannelArgs } from "./enterpriseChannel";
export type EnterpriseChannel = import("./enterpriseChannel").EnterpriseChannel;
export const EnterpriseChannel: typeof import("./enterpriseChannel").EnterpriseChannel = null as any;
utilities.lazyLoad(exports, ["EnterpriseChannel"], () => require("./enterpriseChannel"));

export { GetEnterpriseChannelArgs, GetEnterpriseChannelResult, GetEnterpriseChannelOutputArgs } from "./getEnterpriseChannel";
export const getEnterpriseChannel: typeof import("./getEnterpriseChannel").getEnterpriseChannel = null as any;
export const getEnterpriseChannelOutput: typeof import("./getEnterpriseChannel").getEnterpriseChannelOutput = null as any;
utilities.lazyLoad(exports, ["getEnterpriseChannel","getEnterpriseChannelOutput"], () => require("./getEnterpriseChannel"));

export { ListBotConnectionServiceProvidersArgs, ListBotConnectionServiceProvidersResult } from "./listBotConnectionServiceProviders";
export const listBotConnectionServiceProviders: typeof import("./listBotConnectionServiceProviders").listBotConnectionServiceProviders = null as any;
export const listBotConnectionServiceProvidersOutput: typeof import("./listBotConnectionServiceProviders").listBotConnectionServiceProvidersOutput = null as any;
utilities.lazyLoad(exports, ["listBotConnectionServiceProviders","listBotConnectionServiceProvidersOutput"], () => require("./listBotConnectionServiceProviders"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:botservice/v20180712:EnterpriseChannel":
                return new EnterpriseChannel(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "botservice/v20180712", _module)
