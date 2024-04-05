import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ListApplianceClusterCustomerUserCredentialArgs, ListApplianceClusterCustomerUserCredentialResult, ListApplianceClusterCustomerUserCredentialOutputArgs } from "./listApplianceClusterCustomerUserCredential";
export const listApplianceClusterCustomerUserCredential: typeof import("./listApplianceClusterCustomerUserCredential").listApplianceClusterCustomerUserCredential = null as any;
export const listApplianceClusterCustomerUserCredentialOutput: typeof import("./listApplianceClusterCustomerUserCredential").listApplianceClusterCustomerUserCredentialOutput = null as any;
utilities.lazyLoad(exports, ["listApplianceClusterCustomerUserCredential","listApplianceClusterCustomerUserCredentialOutput"], () => require("./listApplianceClusterCustomerUserCredential"));