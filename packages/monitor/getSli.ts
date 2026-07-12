import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an SLI resource.
 *
 * Uses Azure REST API version 2025-03-01-preview.
 */
export function getSli(args: GetSliArgs, opts?: pulumi.InvokeOptions): Promise<GetSliResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getSli", {
        "serviceGroupName": args.serviceGroupName,
        "sliName": args.sliName,
    }, opts);
}

export interface GetSliArgs {
    /**
     * The name of the service group.
     */
    serviceGroupName: string;
    /**
     * Name of the SLI that is given by the user.
     */
    sliName: string;
}

/**
 * Represents an SLI resource within the ProviderHub.
 */
export interface GetSliResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.SliResourceResponse;
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
 * Gets an SLI resource.
 *
 * Uses Azure REST API version 2025-03-01-preview.
 */
export function getSliOutput(args: GetSliOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSliResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getSli", {
        "serviceGroupName": args.serviceGroupName,
        "sliName": args.sliName,
    }, opts);
}

export interface GetSliOutputArgs {
    /**
     * The name of the service group.
     */
    serviceGroupName: pulumi.Input<string>;
    /**
     * Name of the SLI that is given by the user.
     */
    sliName: pulumi.Input<string>;
}