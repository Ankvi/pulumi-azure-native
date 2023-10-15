import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BotArgs } from "./bot";
export type Bot = import("./bot").Bot;
export const Bot: typeof import("./bot").Bot = null as any;
utilities.lazyLoad(exports, ["Bot"], () => require("./bot"));

export { BotConnectionArgs } from "./botConnection";
export type BotConnection = import("./botConnection").BotConnection;
export const BotConnection: typeof import("./botConnection").BotConnection = null as any;
utilities.lazyLoad(exports, ["BotConnection"], () => require("./botConnection"));

export { ChannelArgs } from "./channel";
export type Channel = import("./channel").Channel;
export const Channel: typeof import("./channel").Channel = null as any;
utilities.lazyLoad(exports, ["Channel"], () => require("./channel"));

export { GetBotArgs, GetBotResult, GetBotOutputArgs } from "./getBot";
export const getBot: typeof import("./getBot").getBot = null as any;
export const getBotOutput: typeof import("./getBot").getBotOutput = null as any;
utilities.lazyLoad(exports, ["getBot","getBotOutput"], () => require("./getBot"));

export { GetBotConnectionArgs, GetBotConnectionResult, GetBotConnectionOutputArgs } from "./getBotConnection";
export const getBotConnection: typeof import("./getBotConnection").getBotConnection = null as any;
export const getBotConnectionOutput: typeof import("./getBotConnection").getBotConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getBotConnection","getBotConnectionOutput"], () => require("./getBotConnection"));

export { GetChannelArgs, GetChannelResult, GetChannelOutputArgs } from "./getChannel";
export const getChannel: typeof import("./getChannel").getChannel = null as any;
export const getChannelOutput: typeof import("./getChannel").getChannelOutput = null as any;
utilities.lazyLoad(exports, ["getChannel","getChannelOutput"], () => require("./getChannel"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { ListBotConnectionServiceProvidersArgs, ListBotConnectionServiceProvidersResult } from "./listBotConnectionServiceProviders";
export const listBotConnectionServiceProviders: typeof import("./listBotConnectionServiceProviders").listBotConnectionServiceProviders = null as any;
export const listBotConnectionServiceProvidersOutput: typeof import("./listBotConnectionServiceProviders").listBotConnectionServiceProvidersOutput = null as any;
utilities.lazyLoad(exports, ["listBotConnectionServiceProviders","listBotConnectionServiceProvidersOutput"], () => require("./listBotConnectionServiceProviders"));

export { ListBotConnectionWithSecretsArgs, ListBotConnectionWithSecretsResult, ListBotConnectionWithSecretsOutputArgs } from "./listBotConnectionWithSecrets";
export const listBotConnectionWithSecrets: typeof import("./listBotConnectionWithSecrets").listBotConnectionWithSecrets = null as any;
export const listBotConnectionWithSecretsOutput: typeof import("./listBotConnectionWithSecrets").listBotConnectionWithSecretsOutput = null as any;
utilities.lazyLoad(exports, ["listBotConnectionWithSecrets","listBotConnectionWithSecretsOutput"], () => require("./listBotConnectionWithSecrets"));

export { ListChannelWithKeysArgs, ListChannelWithKeysResult, ListChannelWithKeysOutputArgs } from "./listChannelWithKeys";
export const listChannelWithKeys: typeof import("./listChannelWithKeys").listChannelWithKeys = null as any;
export const listChannelWithKeysOutput: typeof import("./listChannelWithKeys").listChannelWithKeysOutput = null as any;
utilities.lazyLoad(exports, ["listChannelWithKeys","listChannelWithKeysOutput"], () => require("./listChannelWithKeys"));

export { ListQnAMakerEndpointKeyArgs, ListQnAMakerEndpointKeyResult, ListQnAMakerEndpointKeyOutputArgs } from "./listQnAMakerEndpointKey";
export const listQnAMakerEndpointKey: typeof import("./listQnAMakerEndpointKey").listQnAMakerEndpointKey = null as any;
export const listQnAMakerEndpointKeyOutput: typeof import("./listQnAMakerEndpointKey").listQnAMakerEndpointKeyOutput = null as any;
utilities.lazyLoad(exports, ["listQnAMakerEndpointKey","listQnAMakerEndpointKeyOutput"], () => require("./listQnAMakerEndpointKey"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20180712 from "./v20180712";
import * as v20200602 from "./v20200602";
import * as v20210301 from "./v20210301";
import * as v20210501preview from "./v20210501preview";
import * as v20220615preview from "./v20220615preview";
import * as v20220915 from "./v20220915";
import * as v20230915preview from "./v20230915preview";

export {
    v20180712,
    v20200602,
    v20210301,
    v20210501preview,
    v20220615preview,
    v20220915,
    v20230915preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:botservice:Bot":
                return new Bot(name, <any>undefined, { urn })
            case "azure-native:botservice:BotConnection":
                return new BotConnection(name, <any>undefined, { urn })
            case "azure-native:botservice:Channel":
                return new Channel(name, <any>undefined, { urn })
            case "azure-native:botservice:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "botservice", _module)
