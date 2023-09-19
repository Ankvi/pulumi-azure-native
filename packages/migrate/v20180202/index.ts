import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssessmentArgs } from "./assessment";
export type Assessment = import("./assessment").Assessment;
export const Assessment: typeof import("./assessment").Assessment = null as any;
utilities.lazyLoad(exports, ["Assessment"], () => require("./assessment"));

export { GetAssessmentArgs, GetAssessmentResult, GetAssessmentOutputArgs } from "./getAssessment";
export const getAssessment: typeof import("./getAssessment").getAssessment = null as any;
export const getAssessmentOutput: typeof import("./getAssessment").getAssessmentOutput = null as any;
utilities.lazyLoad(exports, ["getAssessment","getAssessmentOutput"], () => require("./getAssessment"));

export { GetGroupArgs, GetGroupResult, GetGroupOutputArgs } from "./getGroup";
export const getGroup: typeof import("./getGroup").getGroup = null as any;
export const getGroupOutput: typeof import("./getGroup").getGroupOutput = null as any;
utilities.lazyLoad(exports, ["getGroup","getGroupOutput"], () => require("./getGroup"));

export { GetProjectArgs, GetProjectResult, GetProjectOutputArgs } from "./getProject";
export const getProject: typeof import("./getProject").getProject = null as any;
export const getProjectOutput: typeof import("./getProject").getProjectOutput = null as any;
utilities.lazyLoad(exports, ["getProject","getProjectOutput"], () => require("./getProject"));

export { GetProjectKeysArgs, GetProjectKeysResult, GetProjectKeysOutputArgs } from "./getProjectKeys";
export const getProjectKeys: typeof import("./getProjectKeys").getProjectKeys = null as any;
export const getProjectKeysOutput: typeof import("./getProjectKeys").getProjectKeysOutput = null as any;
utilities.lazyLoad(exports, ["getProjectKeys","getProjectKeysOutput"], () => require("./getProjectKeys"));

export { GroupArgs } from "./group";
export type Group = import("./group").Group;
export const Group: typeof import("./group").Group = null as any;
utilities.lazyLoad(exports, ["Group"], () => require("./group"));

export { ProjectArgs } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:migrate/v20180202:Assessment":
                return new Assessment(name, <any>undefined, { urn })
            case "azure-native:migrate/v20180202:Group":
                return new Group(name, <any>undefined, { urn })
            case "azure-native:migrate/v20180202:Project":
                return new Project(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "migrate/v20180202", _module)
