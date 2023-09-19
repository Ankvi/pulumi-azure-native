import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Azure Traffic Collector in a specified resource group
 */
export function getAzureTrafficCollector(args: GetAzureTrafficCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureTrafficCollectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkfunction/v20220801:getAzureTrafficCollector", {
        "azureTrafficCollectorName": args.azureTrafficCollectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureTrafficCollectorArgs {
    /**
     * Azure Traffic Collector name
     */
    azureTrafficCollectorName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Azure Traffic Collector resource.
 */
export interface GetAzureTrafficCollectorResult {
    /**
     * Collector Policies for Azure Traffic Collector.
     */
    readonly collectorPolicies?: types.outputs.CollectorPolicyResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the application rule collection resource.
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
    /**
     * The virtualHub to which the Azure Traffic Collector belongs.
     */
    readonly virtualHub?: types.outputs.ResourceReferenceResponse;
}
/**
 * Gets the specified Azure Traffic Collector in a specified resource group
 */
export function getAzureTrafficCollectorOutput(args: GetAzureTrafficCollectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureTrafficCollectorResult> {
    return pulumi.output(args).apply((a: any) => getAzureTrafficCollector(a, opts))
}

export interface GetAzureTrafficCollectorOutputArgs {
    /**
     * Azure Traffic Collector name
     */
    azureTrafficCollectorName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
