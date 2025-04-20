import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements HybridIdentityMetadata GET method.
 *
 * Uses Azure REST API version 2022-12-15-preview.
 */
export function getHybridIdentityMetadatum(args: GetHybridIdentityMetadatumArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridIdentityMetadatumResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getHybridIdentityMetadatum", {
        "metadataName": args.metadataName,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetHybridIdentityMetadatumArgs {
    /**
     * Name of the HybridIdentityMetadata.
     */
    metadataName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the vm.
     */
    virtualMachineName: string;
}

/**
 * Defines the HybridIdentityMetadata.
 */
export interface GetHybridIdentityMetadatumResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity: types.outputs.IdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The Public Key.
     */
    readonly publicKey?: string;
    /**
     * The unique identifier for the resource.
     */
    readonly resourceUid?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Implements HybridIdentityMetadata GET method.
 *
 * Uses Azure REST API version 2022-12-15-preview.
 */
export function getHybridIdentityMetadatumOutput(args: GetHybridIdentityMetadatumOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHybridIdentityMetadatumResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getHybridIdentityMetadatum", {
        "metadataName": args.metadataName,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetHybridIdentityMetadatumOutputArgs {
    /**
     * Name of the HybridIdentityMetadata.
     */
    metadataName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vm.
     */
    virtualMachineName: pulumi.Input<string>;
}