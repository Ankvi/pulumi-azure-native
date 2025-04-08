import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Capability resource that extends a Target resource.
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-04-15-preview, 2023-09-01-preview, 2023-10-27-preview, 2023-11-01, 2024-01-01, 2024-11-01-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapability(args: GetCapabilityArgs, opts?: pulumi.InvokeOptions): Promise<GetCapabilityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos:getCapability", {
        "capabilityName": args.capabilityName,
        "parentProviderNamespace": args.parentProviderNamespace,
        "parentResourceName": args.parentResourceName,
        "parentResourceType": args.parentResourceType,
        "resourceGroupName": args.resourceGroupName,
        "targetName": args.targetName,
    }, opts);
}

export interface GetCapabilityArgs {
    /**
     * String that represents a Capability resource name.
     */
    capabilityName: string;
    /**
     * String that represents a resource provider namespace.
     */
    parentProviderNamespace: string;
    /**
     * String that represents a resource name.
     */
    parentResourceName: string;
    /**
     * String that represents a resource type.
     */
    parentResourceType: string;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: string;
    /**
     * String that represents a Target resource name.
     */
    targetName: string;
}

/**
 * Model that represents a Capability resource.
 */
export interface GetCapabilityResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of a capability resource.
     */
    readonly properties: types.outputs.CapabilityPropertiesResponse;
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
 * Get a Capability resource that extends a Target resource.
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-04-15-preview, 2023-09-01-preview, 2023-10-27-preview, 2023-11-01, 2024-01-01, 2024-11-01-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapabilityOutput(args: GetCapabilityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCapabilityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:chaos:getCapability", {
        "capabilityName": args.capabilityName,
        "parentProviderNamespace": args.parentProviderNamespace,
        "parentResourceName": args.parentResourceName,
        "parentResourceType": args.parentResourceType,
        "resourceGroupName": args.resourceGroupName,
        "targetName": args.targetName,
    }, opts);
}

export interface GetCapabilityOutputArgs {
    /**
     * String that represents a Capability resource name.
     */
    capabilityName: pulumi.Input<string>;
    /**
     * String that represents a resource provider namespace.
     */
    parentProviderNamespace: pulumi.Input<string>;
    /**
     * String that represents a resource name.
     */
    parentResourceName: pulumi.Input<string>;
    /**
     * String that represents a resource type.
     */
    parentResourceType: pulumi.Input<string>;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * String that represents a Target resource name.
     */
    targetName: pulumi.Input<string>;
}