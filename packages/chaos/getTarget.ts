import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Target resource that extends a tracked regional resource.
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-04-15-preview, 2023-09-01-preview, 2023-10-27-preview, 2023-11-01, 2024-01-01, 2024-11-01-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTarget(args: GetTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetTargetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos:getTarget", {
        "parentProviderNamespace": args.parentProviderNamespace,
        "parentResourceName": args.parentResourceName,
        "parentResourceType": args.parentResourceType,
        "resourceGroupName": args.resourceGroupName,
        "targetName": args.targetName,
    }, opts);
}

export interface GetTargetArgs {
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
 * Model that represents a Target resource.
 */
export interface GetTargetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Location of the target resource.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of the target resource.
     */
    readonly properties: any;
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
 * Get a Target resource that extends a tracked regional resource.
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-04-15-preview, 2023-09-01-preview, 2023-10-27-preview, 2023-11-01, 2024-01-01, 2024-11-01-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTargetOutput(args: GetTargetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTargetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:chaos:getTarget", {
        "parentProviderNamespace": args.parentProviderNamespace,
        "parentResourceName": args.parentResourceName,
        "parentResourceType": args.parentResourceType,
        "resourceGroupName": args.resourceGroupName,
        "targetName": args.targetName,
    }, opts);
}

export interface GetTargetOutputArgs {
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