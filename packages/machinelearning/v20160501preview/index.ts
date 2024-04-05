import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CommitmentPlanArgs } from "./commitmentPlan";
export type CommitmentPlan = import("./commitmentPlan").CommitmentPlan;
export const CommitmentPlan: typeof import("./commitmentPlan").CommitmentPlan = null as any;
utilities.lazyLoad(exports, ["CommitmentPlan"], () => require("./commitmentPlan"));

export { GetCommitmentPlanArgs, GetCommitmentPlanResult, GetCommitmentPlanOutputArgs } from "./getCommitmentPlan";
export const getCommitmentPlan: typeof import("./getCommitmentPlan").getCommitmentPlan = null as any;
export const getCommitmentPlanOutput: typeof import("./getCommitmentPlan").getCommitmentPlanOutput = null as any;
utilities.lazyLoad(exports, ["getCommitmentPlan","getCommitmentPlanOutput"], () => require("./getCommitmentPlan"));

export { GetWebServiceArgs, GetWebServiceResult, GetWebServiceOutputArgs } from "./getWebService";
export const getWebService: typeof import("./getWebService").getWebService = null as any;
export const getWebServiceOutput: typeof import("./getWebService").getWebServiceOutput = null as any;
utilities.lazyLoad(exports, ["getWebService","getWebServiceOutput"], () => require("./getWebService"));

export { WebServiceArgs } from "./webService";
export type WebService = import("./webService").WebService;
export const WebService: typeof import("./webService").WebService = null as any;
utilities.lazyLoad(exports, ["WebService"], () => require("./webService"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearning/v20160501preview:CommitmentPlan":
                return new CommitmentPlan(name, <any>undefined, { urn })
            case "azure-native:machinelearning/v20160501preview:WebService":
                return new WebService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearning/v20160501preview", _module)