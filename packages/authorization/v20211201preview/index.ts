import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessReviewHistoryDefinitionByIdArgs } from "./accessReviewHistoryDefinitionById";
export type AccessReviewHistoryDefinitionById = import("./accessReviewHistoryDefinitionById").AccessReviewHistoryDefinitionById;
export const AccessReviewHistoryDefinitionById: typeof import("./accessReviewHistoryDefinitionById").AccessReviewHistoryDefinitionById = null as any;
utilities.lazyLoad(exports, ["AccessReviewHistoryDefinitionById"], () => require("./accessReviewHistoryDefinitionById"));

export { AccessReviewScheduleDefinitionByIdArgs } from "./accessReviewScheduleDefinitionById";
export type AccessReviewScheduleDefinitionById = import("./accessReviewScheduleDefinitionById").AccessReviewScheduleDefinitionById;
export const AccessReviewScheduleDefinitionById: typeof import("./accessReviewScheduleDefinitionById").AccessReviewScheduleDefinitionById = null as any;
utilities.lazyLoad(exports, ["AccessReviewScheduleDefinitionById"], () => require("./accessReviewScheduleDefinitionById"));

export { GetAccessReviewHistoryDefinitionByIdArgs, GetAccessReviewHistoryDefinitionByIdResult, GetAccessReviewHistoryDefinitionByIdOutputArgs } from "./getAccessReviewHistoryDefinitionById";
export const getAccessReviewHistoryDefinitionById: typeof import("./getAccessReviewHistoryDefinitionById").getAccessReviewHistoryDefinitionById = null as any;
export const getAccessReviewHistoryDefinitionByIdOutput: typeof import("./getAccessReviewHistoryDefinitionById").getAccessReviewHistoryDefinitionByIdOutput = null as any;
utilities.lazyLoad(exports, ["getAccessReviewHistoryDefinitionById","getAccessReviewHistoryDefinitionByIdOutput"], () => require("./getAccessReviewHistoryDefinitionById"));

export { GetAccessReviewScheduleDefinitionByIdArgs, GetAccessReviewScheduleDefinitionByIdResult, GetAccessReviewScheduleDefinitionByIdOutputArgs } from "./getAccessReviewScheduleDefinitionById";
export const getAccessReviewScheduleDefinitionById: typeof import("./getAccessReviewScheduleDefinitionById").getAccessReviewScheduleDefinitionById = null as any;
export const getAccessReviewScheduleDefinitionByIdOutput: typeof import("./getAccessReviewScheduleDefinitionById").getAccessReviewScheduleDefinitionByIdOutput = null as any;
utilities.lazyLoad(exports, ["getAccessReviewScheduleDefinitionById","getAccessReviewScheduleDefinitionByIdOutput"], () => require("./getAccessReviewScheduleDefinitionById"));

export { GetScopeAccessReviewHistoryDefinitionByIdArgs, GetScopeAccessReviewHistoryDefinitionByIdResult, GetScopeAccessReviewHistoryDefinitionByIdOutputArgs } from "./getScopeAccessReviewHistoryDefinitionById";
export const getScopeAccessReviewHistoryDefinitionById: typeof import("./getScopeAccessReviewHistoryDefinitionById").getScopeAccessReviewHistoryDefinitionById = null as any;
export const getScopeAccessReviewHistoryDefinitionByIdOutput: typeof import("./getScopeAccessReviewHistoryDefinitionById").getScopeAccessReviewHistoryDefinitionByIdOutput = null as any;
utilities.lazyLoad(exports, ["getScopeAccessReviewHistoryDefinitionById","getScopeAccessReviewHistoryDefinitionByIdOutput"], () => require("./getScopeAccessReviewHistoryDefinitionById"));

export { GetScopeAccessReviewScheduleDefinitionByIdArgs, GetScopeAccessReviewScheduleDefinitionByIdResult, GetScopeAccessReviewScheduleDefinitionByIdOutputArgs } from "./getScopeAccessReviewScheduleDefinitionById";
export const getScopeAccessReviewScheduleDefinitionById: typeof import("./getScopeAccessReviewScheduleDefinitionById").getScopeAccessReviewScheduleDefinitionById = null as any;
export const getScopeAccessReviewScheduleDefinitionByIdOutput: typeof import("./getScopeAccessReviewScheduleDefinitionById").getScopeAccessReviewScheduleDefinitionByIdOutput = null as any;
utilities.lazyLoad(exports, ["getScopeAccessReviewScheduleDefinitionById","getScopeAccessReviewScheduleDefinitionByIdOutput"], () => require("./getScopeAccessReviewScheduleDefinitionById"));

export { ScopeAccessReviewHistoryDefinitionByIdArgs } from "./scopeAccessReviewHistoryDefinitionById";
export type ScopeAccessReviewHistoryDefinitionById = import("./scopeAccessReviewHistoryDefinitionById").ScopeAccessReviewHistoryDefinitionById;
export const ScopeAccessReviewHistoryDefinitionById: typeof import("./scopeAccessReviewHistoryDefinitionById").ScopeAccessReviewHistoryDefinitionById = null as any;
utilities.lazyLoad(exports, ["ScopeAccessReviewHistoryDefinitionById"], () => require("./scopeAccessReviewHistoryDefinitionById"));

export { ScopeAccessReviewScheduleDefinitionByIdArgs } from "./scopeAccessReviewScheduleDefinitionById";
export type ScopeAccessReviewScheduleDefinitionById = import("./scopeAccessReviewScheduleDefinitionById").ScopeAccessReviewScheduleDefinitionById;
export const ScopeAccessReviewScheduleDefinitionById: typeof import("./scopeAccessReviewScheduleDefinitionById").ScopeAccessReviewScheduleDefinitionById = null as any;
utilities.lazyLoad(exports, ["ScopeAccessReviewScheduleDefinitionById"], () => require("./scopeAccessReviewScheduleDefinitionById"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:authorization/v20211201preview:AccessReviewHistoryDefinitionById":
                return new AccessReviewHistoryDefinitionById(name, <any>undefined, { urn })
            case "azure-native:authorization/v20211201preview:AccessReviewScheduleDefinitionById":
                return new AccessReviewScheduleDefinitionById(name, <any>undefined, { urn })
            case "azure-native:authorization/v20211201preview:ScopeAccessReviewHistoryDefinitionById":
                return new ScopeAccessReviewHistoryDefinitionById(name, <any>undefined, { urn })
            case "azure-native:authorization/v20211201preview:ScopeAccessReviewScheduleDefinitionById":
                return new ScopeAccessReviewScheduleDefinitionById(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "authorization/v20211201preview", _module)
