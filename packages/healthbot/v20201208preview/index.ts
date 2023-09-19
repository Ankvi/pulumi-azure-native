import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BotArgs } from "./bot";
export type Bot = import("./bot").Bot;
export const Bot: typeof import("./bot").Bot = null as any;
utilities.lazyLoad(exports, ["Bot"], () => require("./bot"));

export { GetBotArgs, GetBotResult, GetBotOutputArgs } from "./getBot";
export const getBot: typeof import("./getBot").getBot = null as any;
export const getBotOutput: typeof import("./getBot").getBotOutput = null as any;
utilities.lazyLoad(exports, ["getBot","getBotOutput"], () => require("./getBot"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:healthbot/v20201208preview:Bot":
                return new Bot(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "healthbot/v20201208preview", _module)
