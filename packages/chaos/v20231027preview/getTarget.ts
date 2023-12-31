import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Target resource that extends a tracked regional resource.
 */
export function getTarget(args: GetTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetTargetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos/v20231027preview:getTarget", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The system metadata of the target resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Target resource that extends a tracked regional resource.
 */
export function getTargetOutput(args: GetTargetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTargetResult> {
    return pulumi.output(args).apply((a: any) => getTarget(a, opts))
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
