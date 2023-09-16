import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ListBotConnectionServiceProvidersArgs, ListBotConnectionServiceProvidersResult } from "./listBotConnectionServiceProviders";
export const listBotConnectionServiceProviders: typeof import("./listBotConnectionServiceProviders").listBotConnectionServiceProviders = null as any;
export const listBotConnectionServiceProvidersOutput: typeof import("./listBotConnectionServiceProviders").listBotConnectionServiceProvidersOutput = null as any;
utilities.lazyLoad(exports, ["listBotConnectionServiceProviders","listBotConnectionServiceProvidersOutput"], () => require("./listBotConnectionServiceProviders"));

export { ListQnAMakerEndpointKeyArgs, ListQnAMakerEndpointKeyResult, ListQnAMakerEndpointKeyOutputArgs } from "./listQnAMakerEndpointKey";
export const listQnAMakerEndpointKey: typeof import("./listQnAMakerEndpointKey").listQnAMakerEndpointKey = null as any;
export const listQnAMakerEndpointKeyOutput: typeof import("./listQnAMakerEndpointKey").listQnAMakerEndpointKeyOutput = null as any;
utilities.lazyLoad(exports, ["listQnAMakerEndpointKey","listQnAMakerEndpointKeyOutput"], () => require("./listQnAMakerEndpointKey"));

