import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetWebTestArgs, GetWebTestResult, GetWebTestOutputArgs } from "./getWebTest";
export const getWebTest: typeof import("./getWebTest").getWebTest = null as any;
export const getWebTestOutput: typeof import("./getWebTest").getWebTestOutput = null as any;
utilities.lazyLoad(exports, ["getWebTest","getWebTestOutput"], () => require("./getWebTest"));

export { WebTestArgs } from "./webTest";
export type WebTest = import("./webTest").WebTest;
export const WebTest: typeof import("./webTest").WebTest = null as any;
utilities.lazyLoad(exports, ["WebTest"], () => require("./webTest"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20220615:WebTest":
                return new WebTest(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20220615", _module)
