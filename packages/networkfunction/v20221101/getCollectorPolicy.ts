import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the collector policy in a specified Traffic Collector
 */
export function getCollectorPolicy(args: GetCollectorPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetCollectorPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkfunction/v20221101:getCollectorPolicy", {
        "azureTrafficCollectorName": args.azureTrafficCollectorName,
        "collectorPolicyName": args.collectorPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCollectorPolicyArgs {
    /**
     * Azure Traffic Collector name
     */
    azureTrafficCollectorName: string;
    /**
     * Collector Policy Name
     */
    collectorPolicyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Collector policy resource.
 */
export interface GetCollectorPolicyResult {
    /**
     * Emission policies.
     */
    readonly emissionPolicies?: types.outputs.EmissionPoliciesPropertiesFormatResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Ingestion policies.
     */
    readonly ingestionPolicy?: types.outputs.IngestionPolicyPropertiesFormatResponse;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.TrackedResourceResponseSystemData;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the collector policy in a specified Traffic Collector
 */
export function getCollectorPolicyOutput(args: GetCollectorPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCollectorPolicyResult> {
    return pulumi.output(args).apply((a: any) => getCollectorPolicy(a, opts))
}

export interface GetCollectorPolicyOutputArgs {
    /**
     * Azure Traffic Collector name
     */
    azureTrafficCollectorName: pulumi.Input<string>;
    /**
     * Collector Policy Name
     */
    collectorPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}