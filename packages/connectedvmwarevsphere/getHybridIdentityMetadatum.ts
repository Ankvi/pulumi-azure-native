import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements HybridIdentityMetadata GET method.
 * Azure REST API version: 2022-07-15-preview.
 *
 * Other available API versions: 2023-03-01-preview.
 */
export function getHybridIdentityMetadatum(args: GetHybridIdentityMetadatumArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridIdentityMetadatumResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getHybridIdentityMetadatum", {
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
     * The Resource Group Name.
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity: types.outputs.IdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the Public Key.
     */
    readonly publicKey?: string;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Gets or sets the Vm Id.
     */
    readonly vmId?: string;
}
/**
 * Implements HybridIdentityMetadata GET method.
 * Azure REST API version: 2022-07-15-preview.
 *
 * Other available API versions: 2023-03-01-preview.
 */
export function getHybridIdentityMetadatumOutput(args: GetHybridIdentityMetadatumOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHybridIdentityMetadatumResult> {
    return pulumi.output(args).apply((a: any) => getHybridIdentityMetadatum(a, opts))
}

export interface GetHybridIdentityMetadatumOutputArgs {
    /**
     * Name of the HybridIdentityMetadata.
     */
    metadataName: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vm.
     */
    virtualMachineName: pulumi.Input<string>;
}
