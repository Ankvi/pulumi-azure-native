import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BillingRoleAssignmentByBillingAccountArgs } from "./billingRoleAssignmentByBillingAccount";
export type BillingRoleAssignmentByBillingAccount = import("./billingRoleAssignmentByBillingAccount").BillingRoleAssignmentByBillingAccount;
export const BillingRoleAssignmentByBillingAccount: typeof import("./billingRoleAssignmentByBillingAccount").BillingRoleAssignmentByBillingAccount = null as any;
utilities.lazyLoad(exports, ["BillingRoleAssignmentByBillingAccount"], () => require("./billingRoleAssignmentByBillingAccount"));

export { BillingRoleAssignmentByDepartmentArgs } from "./billingRoleAssignmentByDepartment";
export type BillingRoleAssignmentByDepartment = import("./billingRoleAssignmentByDepartment").BillingRoleAssignmentByDepartment;
export const BillingRoleAssignmentByDepartment: typeof import("./billingRoleAssignmentByDepartment").BillingRoleAssignmentByDepartment = null as any;
utilities.lazyLoad(exports, ["BillingRoleAssignmentByDepartment"], () => require("./billingRoleAssignmentByDepartment"));

export { BillingRoleAssignmentByEnrollmentAccountArgs } from "./billingRoleAssignmentByEnrollmentAccount";
export type BillingRoleAssignmentByEnrollmentAccount = import("./billingRoleAssignmentByEnrollmentAccount").BillingRoleAssignmentByEnrollmentAccount;
export const BillingRoleAssignmentByEnrollmentAccount: typeof import("./billingRoleAssignmentByEnrollmentAccount").BillingRoleAssignmentByEnrollmentAccount = null as any;
utilities.lazyLoad(exports, ["BillingRoleAssignmentByEnrollmentAccount"], () => require("./billingRoleAssignmentByEnrollmentAccount"));

export { GetBillingRoleAssignmentByBillingAccountArgs, GetBillingRoleAssignmentByBillingAccountResult, GetBillingRoleAssignmentByBillingAccountOutputArgs } from "./getBillingRoleAssignmentByBillingAccount";
export const getBillingRoleAssignmentByBillingAccount: typeof import("./getBillingRoleAssignmentByBillingAccount").getBillingRoleAssignmentByBillingAccount = null as any;
export const getBillingRoleAssignmentByBillingAccountOutput: typeof import("./getBillingRoleAssignmentByBillingAccount").getBillingRoleAssignmentByBillingAccountOutput = null as any;
utilities.lazyLoad(exports, ["getBillingRoleAssignmentByBillingAccount","getBillingRoleAssignmentByBillingAccountOutput"], () => require("./getBillingRoleAssignmentByBillingAccount"));

export { GetBillingRoleAssignmentByDepartmentArgs, GetBillingRoleAssignmentByDepartmentResult, GetBillingRoleAssignmentByDepartmentOutputArgs } from "./getBillingRoleAssignmentByDepartment";
export const getBillingRoleAssignmentByDepartment: typeof import("./getBillingRoleAssignmentByDepartment").getBillingRoleAssignmentByDepartment = null as any;
export const getBillingRoleAssignmentByDepartmentOutput: typeof import("./getBillingRoleAssignmentByDepartment").getBillingRoleAssignmentByDepartmentOutput = null as any;
utilities.lazyLoad(exports, ["getBillingRoleAssignmentByDepartment","getBillingRoleAssignmentByDepartmentOutput"], () => require("./getBillingRoleAssignmentByDepartment"));

export { GetBillingRoleAssignmentByEnrollmentAccountArgs, GetBillingRoleAssignmentByEnrollmentAccountResult, GetBillingRoleAssignmentByEnrollmentAccountOutputArgs } from "./getBillingRoleAssignmentByEnrollmentAccount";
export const getBillingRoleAssignmentByEnrollmentAccount: typeof import("./getBillingRoleAssignmentByEnrollmentAccount").getBillingRoleAssignmentByEnrollmentAccount = null as any;
export const getBillingRoleAssignmentByEnrollmentAccountOutput: typeof import("./getBillingRoleAssignmentByEnrollmentAccount").getBillingRoleAssignmentByEnrollmentAccountOutput = null as any;
utilities.lazyLoad(exports, ["getBillingRoleAssignmentByEnrollmentAccount","getBillingRoleAssignmentByEnrollmentAccountOutput"], () => require("./getBillingRoleAssignmentByEnrollmentAccount"));

export { ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionArgs, ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult, ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutputArgs } from "./listBillingAccountInvoiceSectionsByCreateSubscriptionPermission";
export const listBillingAccountInvoiceSectionsByCreateSubscriptionPermission: typeof import("./listBillingAccountInvoiceSectionsByCreateSubscriptionPermission").listBillingAccountInvoiceSectionsByCreateSubscriptionPermission = null as any;
export const listBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutput: typeof import("./listBillingAccountInvoiceSectionsByCreateSubscriptionPermission").listBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutput = null as any;
utilities.lazyLoad(exports, ["listBillingAccountInvoiceSectionsByCreateSubscriptionPermission","listBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutput"], () => require("./listBillingAccountInvoiceSectionsByCreateSubscriptionPermission"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:billing/v20191001preview:BillingRoleAssignmentByBillingAccount":
                return new BillingRoleAssignmentByBillingAccount(name, <any>undefined, { urn })
            case "azure-native:billing/v20191001preview:BillingRoleAssignmentByDepartment":
                return new BillingRoleAssignmentByDepartment(name, <any>undefined, { urn })
            case "azure-native:billing/v20191001preview:BillingRoleAssignmentByEnrollmentAccount":
                return new BillingRoleAssignmentByEnrollmentAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "billing/v20191001preview", _module)
