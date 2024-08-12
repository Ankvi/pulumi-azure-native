import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EmployeeArgs } from "./employee";
export type Employee = import("./employee").Employee;
export const Employee: typeof import("./employee").Employee = null as any;
utilities.lazyLoad(exports, ["Employee"], () => require("./employee"));

export { GetEmployeeArgs, GetEmployeeResult, GetEmployeeOutputArgs } from "./getEmployee";
export const getEmployee: typeof import("./getEmployee").getEmployee = null as any;
export const getEmployeeOutput: typeof import("./getEmployee").getEmployeeOutput = null as any;
utilities.lazyLoad(exports, ["getEmployee","getEmployeeOutput"], () => require("./getEmployee"));




const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:contoso:Employee":
                return new Employee(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "contoso", _module)