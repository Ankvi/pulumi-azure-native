import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLabArgs, GetLabResult, GetLabOutputArgs } from "./getLab";
export const getLab: typeof import("./getLab").getLab = null as any;
export const getLabOutput: typeof import("./getLab").getLabOutput = null as any;
utilities.lazyLoad(exports, ["getLab","getLabOutput"], () => require("./getLab"));

export { GetStudentArgs, GetStudentResult, GetStudentOutputArgs } from "./getStudent";
export const getStudent: typeof import("./getStudent").getStudent = null as any;
export const getStudentOutput: typeof import("./getStudent").getStudentOutput = null as any;
utilities.lazyLoad(exports, ["getStudent","getStudentOutput"], () => require("./getStudent"));

export { LabArgs } from "./lab";
export type Lab = import("./lab").Lab;
export const Lab: typeof import("./lab").Lab = null as any;
utilities.lazyLoad(exports, ["Lab"], () => require("./lab"));

export { StudentArgs } from "./student";
export type Student = import("./student").Student;
export const Student: typeof import("./student").Student = null as any;
utilities.lazyLoad(exports, ["Student"], () => require("./student"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:education:Lab":
                return new Lab(name, <any>undefined, { urn })
            case "azure-native:education:Student":
                return new Student(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "education", _module)