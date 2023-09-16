import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetIngestionSettingArgs, GetIngestionSettingResult, GetIngestionSettingOutputArgs } from "./getIngestionSetting";
export const getIngestionSetting: typeof import("./getIngestionSetting").getIngestionSetting = null as any;
export const getIngestionSettingOutput: typeof import("./getIngestionSetting").getIngestionSettingOutput = null as any;
utilities.lazyLoad(exports, ["getIngestionSetting","getIngestionSettingOutput"], () => require("./getIngestionSetting"));

export { IngestionSettingArgs } from "./ingestionSetting";
export type IngestionSetting = import("./ingestionSetting").IngestionSetting;
export const IngestionSetting: typeof import("./ingestionSetting").IngestionSetting = null as any;
utilities.lazyLoad(exports, ["IngestionSetting"], () => require("./ingestionSetting"));

export { ListIngestionSettingConnectionStringsArgs, ListIngestionSettingConnectionStringsResult, ListIngestionSettingConnectionStringsOutputArgs } from "./listIngestionSettingConnectionStrings";
export const listIngestionSettingConnectionStrings: typeof import("./listIngestionSettingConnectionStrings").listIngestionSettingConnectionStrings = null as any;
export const listIngestionSettingConnectionStringsOutput: typeof import("./listIngestionSettingConnectionStrings").listIngestionSettingConnectionStringsOutput = null as any;
utilities.lazyLoad(exports, ["listIngestionSettingConnectionStrings","listIngestionSettingConnectionStringsOutput"], () => require("./listIngestionSettingConnectionStrings"));

export { ListIngestionSettingTokensArgs, ListIngestionSettingTokensResult, ListIngestionSettingTokensOutputArgs } from "./listIngestionSettingTokens";
export const listIngestionSettingTokens: typeof import("./listIngestionSettingTokens").listIngestionSettingTokens = null as any;
export const listIngestionSettingTokensOutput: typeof import("./listIngestionSettingTokens").listIngestionSettingTokensOutput = null as any;
utilities.lazyLoad(exports, ["listIngestionSettingTokens","listIngestionSettingTokensOutput"], () => require("./listIngestionSettingTokens"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20210115preview:IngestionSetting":
                return new IngestionSetting(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20210115preview", _module)
