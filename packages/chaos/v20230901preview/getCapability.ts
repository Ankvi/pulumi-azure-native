import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Capability resource that extends a Target resource.
 */
export function getCapability(args: GetCapabilityArgs, opts?: pulumi.InvokeOptions): Promise<GetCapabilityResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos/v20230901preview:getCapability", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The standard system metadata of a resource type.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Capability resource that extends a Target resource.
 */
export function getCapabilityOutput(args: GetCapabilityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCapabilityResult> {
    return pulumi.output(args).apply((a: any) => getCapability(a, opts))
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