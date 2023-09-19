import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { CommitmentPlanArgs } from "./commitmentPlan";
export type CommitmentPlan = import("./commitmentPlan").CommitmentPlan;
export const CommitmentPlan: typeof import("./commitmentPlan").CommitmentPlan = null as any;
utilities.lazyLoad(exports, ["CommitmentPlan"], () => require("./commitmentPlan"));

export { CommitmentPlanAssociationArgs } from "./commitmentPlanAssociation";
export type CommitmentPlanAssociation = import("./commitmentPlanAssociation").CommitmentPlanAssociation;
export const CommitmentPlanAssociation: typeof import("./commitmentPlanAssociation").CommitmentPlanAssociation = null as any;
utilities.lazyLoad(exports, ["CommitmentPlanAssociation"], () => require("./commitmentPlanAssociation"));

export { DeploymentArgs } from "./deployment";
export type Deployment = import("./deployment").Deployment;
export const Deployment: typeof import("./deployment").Deployment = null as any;
utilities.lazyLoad(exports, ["Deployment"], () => require("./deployment"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetCommitmentPlanArgs, GetCommitmentPlanResult, GetCommitmentPlanOutputArgs } from "./getCommitmentPlan";
export const getCommitmentPlan: typeof import("./getCommitmentPlan").getCommitmentPlan = null as any;
export const getCommitmentPlanOutput: typeof import("./getCommitmentPlan").getCommitmentPlanOutput = null as any;
utilities.lazyLoad(exports, ["getCommitmentPlan","getCommitmentPlanOutput"], () => require("./getCommitmentPlan"));

export { GetCommitmentPlanAssociationArgs, GetCommitmentPlanAssociationResult, GetCommitmentPlanAssociationOutputArgs } from "./getCommitmentPlanAssociation";
export const getCommitmentPlanAssociation: typeof import("./getCommitmentPlanAssociation").getCommitmentPlanAssociation = null as any;
export const getCommitmentPlanAssociationOutput: typeof import("./getCommitmentPlanAssociation").getCommitmentPlanAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getCommitmentPlanAssociation","getCommitmentPlanAssociationOutput"], () => require("./getCommitmentPlanAssociation"));

export { GetDeploymentArgs, GetDeploymentResult, GetDeploymentOutputArgs } from "./getDeployment";
export const getDeployment: typeof import("./getDeployment").getDeployment = null as any;
export const getDeploymentOutput: typeof import("./getDeployment").getDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getDeployment","getDeploymentOutput"], () => require("./getDeployment"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetSharedCommitmentPlanArgs, GetSharedCommitmentPlanResult, GetSharedCommitmentPlanOutputArgs } from "./getSharedCommitmentPlan";
export const getSharedCommitmentPlan: typeof import("./getSharedCommitmentPlan").getSharedCommitmentPlan = null as any;
export const getSharedCommitmentPlanOutput: typeof import("./getSharedCommitmentPlan").getSharedCommitmentPlanOutput = null as any;
utilities.lazyLoad(exports, ["getSharedCommitmentPlan","getSharedCommitmentPlanOutput"], () => require("./getSharedCommitmentPlan"));

export { ListAccountKeysArgs, ListAccountKeysResult, ListAccountKeysOutputArgs } from "./listAccountKeys";
export const listAccountKeys: typeof import("./listAccountKeys").listAccountKeys = null as any;
export const listAccountKeysOutput: typeof import("./listAccountKeys").listAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listAccountKeys","listAccountKeysOutput"], () => require("./listAccountKeys"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { SharedCommitmentPlanArgs } from "./sharedCommitmentPlan";
export type SharedCommitmentPlan = import("./sharedCommitmentPlan").SharedCommitmentPlan;
export const SharedCommitmentPlan: typeof import("./sharedCommitmentPlan").SharedCommitmentPlan = null as any;
utilities.lazyLoad(exports, ["SharedCommitmentPlan"], () => require("./sharedCommitmentPlan"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:cognitiveservices/v20230501:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:cognitiveservices/v20230501:CommitmentPlan":
                return new CommitmentPlan(name, <any>undefined, { urn })
            case "azure-native:cognitiveservices/v20230501:CommitmentPlanAssociation":
                return new CommitmentPlanAssociation(name, <any>undefined, { urn })
            case "azure-native:cognitiveservices/v20230501:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "azure-native:cognitiveservices/v20230501:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:cognitiveservices/v20230501:SharedCommitmentPlan":
                return new SharedCommitmentPlan(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cognitiveservices/v20230501", _module)
