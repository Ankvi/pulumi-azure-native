import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Provides the details of the backup policies associated to Recovery Services Vault. This is an asynchronous
 * operation. Status of the operation can be fetched using GetPolicyOperationResult API.
 */
export function getProtectionPolicy(args: GetProtectionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectionPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230401:getProtectionPolicy", {
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetProtectionPolicyArgs {
    /**
     * Backup policy information to be fetched.
     */
    policyName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    vaultName: string;
}

/**
 * Base class for backup policy. Workload-specific backup policies are derived from this class.
 */
export interface GetProtectionPolicyResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * ProtectionPolicyResource properties
     */
    readonly properties: types.outputs.AzureFileShareProtectionPolicyResponse | types.outputs.AzureIaaSVMProtectionPolicyResponse | types.outputs.AzureSqlProtectionPolicyResponse | types.outputs.AzureVmWorkloadProtectionPolicyResponse | types.outputs.GenericProtectionPolicyResponse | types.outputs.MabProtectionPolicyResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Provides the details of the backup policies associated to Recovery Services Vault. This is an asynchronous
 * operation. Status of the operation can be fetched using GetPolicyOperationResult API.
 */
export function getProtectionPolicyOutput(args: GetProtectionPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtectionPolicyResult> {
    return pulumi.output(args).apply((a: any) => getProtectionPolicy(a, opts))
}

export interface GetProtectionPolicyOutputArgs {
    /**
     * Backup policy information to be fetched.
     */
    policyName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}
