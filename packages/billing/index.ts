import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssociatedTenantArgs } from "./associatedTenant";
export type AssociatedTenant = import("./associatedTenant").AssociatedTenant;
export const AssociatedTenant: typeof import("./associatedTenant").AssociatedTenant = null as any;
utilities.lazyLoad(exports, ["AssociatedTenant"], () => require("./associatedTenant"));

export { BillingProfileArgs } from "./billingProfile";
export type BillingProfile = import("./billingProfile").BillingProfile;
export const BillingProfile: typeof import("./billingProfile").BillingProfile = null as any;
utilities.lazyLoad(exports, ["BillingProfile"], () => require("./billingProfile"));

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

export { GetAssociatedTenantArgs, GetAssociatedTenantResult, GetAssociatedTenantOutputArgs } from "./getAssociatedTenant";
export const getAssociatedTenant: typeof import("./getAssociatedTenant").getAssociatedTenant = null as any;
export const getAssociatedTenantOutput: typeof import("./getAssociatedTenant").getAssociatedTenantOutput = null as any;
utilities.lazyLoad(exports, ["getAssociatedTenant","getAssociatedTenantOutput"], () => require("./getAssociatedTenant"));

export { GetBillingProfileArgs, GetBillingProfileResult, GetBillingProfileOutputArgs } from "./getBillingProfile";
export const getBillingProfile: typeof import("./getBillingProfile").getBillingProfile = null as any;
export const getBillingProfileOutput: typeof import("./getBillingProfile").getBillingProfileOutput = null as any;
utilities.lazyLoad(exports, ["getBillingProfile","getBillingProfileOutput"], () => require("./getBillingProfile"));

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

export { GetInvoiceSectionArgs, GetInvoiceSectionResult, GetInvoiceSectionOutputArgs } from "./getInvoiceSection";
export const getInvoiceSection: typeof import("./getInvoiceSection").getInvoiceSection = null as any;
export const getInvoiceSectionOutput: typeof import("./getInvoiceSection").getInvoiceSectionOutput = null as any;
utilities.lazyLoad(exports, ["getInvoiceSection","getInvoiceSectionOutput"], () => require("./getInvoiceSection"));

export { InvoiceSectionArgs } from "./invoiceSection";
export type InvoiceSection = import("./invoiceSection").InvoiceSection;
export const InvoiceSection: typeof import("./invoiceSection").InvoiceSection = null as any;
utilities.lazyLoad(exports, ["InvoiceSection"], () => require("./invoiceSection"));

export { ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionArgs, ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionResult, ListBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutputArgs } from "./listBillingAccountInvoiceSectionsByCreateSubscriptionPermission";
export const listBillingAccountInvoiceSectionsByCreateSubscriptionPermission: typeof import("./listBillingAccountInvoiceSectionsByCreateSubscriptionPermission").listBillingAccountInvoiceSectionsByCreateSubscriptionPermission = null as any;
export const listBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutput: typeof import("./listBillingAccountInvoiceSectionsByCreateSubscriptionPermission").listBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutput = null as any;
utilities.lazyLoad(exports, ["listBillingAccountInvoiceSectionsByCreateSubscriptionPermission","listBillingAccountInvoiceSectionsByCreateSubscriptionPermissionOutput"], () => require("./listBillingAccountInvoiceSectionsByCreateSubscriptionPermission"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:billing:AssociatedTenant":
                return new AssociatedTenant(name, <any>undefined, { urn })
            case "azure-native:billing:BillingProfile":
                return new BillingProfile(name, <any>undefined, { urn })
            case "azure-native:billing:BillingRoleAssignmentByBillingAccount":
                return new BillingRoleAssignmentByBillingAccount(name, <any>undefined, { urn })
            case "azure-native:billing:BillingRoleAssignmentByDepartment":
                return new BillingRoleAssignmentByDepartment(name, <any>undefined, { urn })
            case "azure-native:billing:BillingRoleAssignmentByEnrollmentAccount":
                return new BillingRoleAssignmentByEnrollmentAccount(name, <any>undefined, { urn })
            case "azure-native:billing:InvoiceSection":
                return new InvoiceSection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "billing", _module)