import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric managed application resource created or in the process of being created in the Service Fabric cluster resource.
 * Azure REST API version: 2023-03-01-preview.
 */
export function getManagedClusterApplication(args: GetManagedClusterApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getManagedClusterApplication", {
        "applicationName": args.applicationName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedClusterApplicationArgs {
    /**
     * The name of the application resource.
     */
    applicationName: string;
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The application resource.
 */
export interface GetManagedClusterApplicationResult {
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * Describes the managed identities for an Azure resource.
     */
    readonly identity?: types.outputs.ManagedIdentityResponse;
    /**
     * Resource location depends on the parent resource.
     */
    readonly location?: string;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    readonly managedIdentities?: types.outputs.ApplicationUserAssignedIdentityResponse[];
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * List of application parameters with overridden values from their default values specified in the application manifest.
     */
    readonly parameters?: {[key: string]: string};
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
    /**
     * Describes the policy for a monitored application upgrade.
     */
    readonly upgradePolicy?: types.outputs.ApplicationUpgradePolicyResponse;
    /**
     * The version of the application type as defined in the application manifest.
     * This name must be the full Arm Resource ID for the referenced application type version.
     */
    readonly version?: string;
}
/**
 * Get a Service Fabric managed application resource created or in the process of being created in the Service Fabric cluster resource.
 * Azure REST API version: 2023-03-01-preview.
 */
export function getManagedClusterApplicationOutput(args: GetManagedClusterApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedClusterApplicationResult> {
    return pulumi.output(args).apply((a: any) => getManagedClusterApplication(a, opts))
}

export interface GetManagedClusterApplicationOutputArgs {
    /**
     * The name of the application resource.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
