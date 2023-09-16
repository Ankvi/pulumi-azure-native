import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets details about the specified dedicated capacity.
 */
export function getCapacityDetails(args: GetCapacityDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:powerbidedicated/v20210101:getCapacityDetails", {
        "dedicatedCapacityName": args.dedicatedCapacityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCapacityDetailsArgs {
    /**
     * The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
     */
    dedicatedCapacityName: string;
    /**
     * The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: string;
}

/**
 * Represents an instance of a Dedicated Capacity resource.
 */
export interface GetCapacityDetailsResult {
    /**
     * A collection of Dedicated capacity administrators
     */
    readonly administration?: types.outputs.powerbidedicated.v20210101.DedicatedCapacityAdministratorsResponse;
    /**
     * Capacity name
     */
    readonly friendlyName: string;
    /**
     * An identifier that represents the PowerBI Dedicated resource.
     */
    readonly id: string;
    /**
     * Location of the PowerBI Dedicated resource.
     */
    readonly location: string;
    /**
     * Specifies the generation of the Power BI Embedded capacity. If no value is specified, the default value 'Gen2' is used. [Learn More](https://docs.microsoft.com/power-bi/developer/embedded/power-bi-embedded-generation-2)
     */
    readonly mode?: string;
    /**
     * The name of the PowerBI Dedicated resource.
     */
    readonly name: string;
    /**
     * The current deployment state of PowerBI Dedicated resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * The SKU of the PowerBI Dedicated capacity resource.
     */
    readonly sku: types.outputs.powerbidedicated.v20210101.CapacitySkuResponse;
    /**
     * The current state of PowerBI Dedicated resource. The state is to indicate more states outside of resource provisioning.
     */
    readonly state: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData?: types.outputs.powerbidedicated.v20210101.SystemDataResponse;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Tenant ID for the capacity. Used for creating Pro Plus capacity.
     */
    readonly tenantId: string;
    /**
     * The type of the PowerBI Dedicated resource.
     */
    readonly type: string;
}
/**
 * Gets details about the specified dedicated capacity.
 */
export function getCapacityDetailsOutput(args: GetCapacityDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCapacityDetailsResult> {
    return pulumi.output(args).apply((a: any) => getCapacityDetails(a, opts))
}

export interface GetCapacityDetailsOutputArgs {
    /**
     * The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
     */
    dedicatedCapacityName: pulumi.Input<string>;
    /**
     * The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
}
