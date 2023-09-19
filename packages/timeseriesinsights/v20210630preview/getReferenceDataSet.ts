import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the reference data set with the specified name in the specified environment.
 */
export function getReferenceDataSet(args: GetReferenceDataSetArgs, opts?: pulumi.InvokeOptions): Promise<GetReferenceDataSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:timeseriesinsights/v20210630preview:getReferenceDataSet", {
        "environmentName": args.environmentName,
        "referenceDataSetName": args.referenceDataSetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetReferenceDataSetArgs {
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: string;
    /**
     * The name of the Time Series Insights reference data set associated with the specified environment.
     */
    referenceDataSetName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * A reference data set provides metadata about the events in an environment. Metadata in the reference data set will be joined with events as they are read from event sources. The metadata that makes up the reference data set is uploaded or modified through the Time Series Insights data plane APIs.
 */
export interface GetReferenceDataSetResult {
    /**
     * The time the resource was created.
     */
    readonly creationTime: string;
    /**
     * The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
     */
    readonly dataStringComparisonBehavior?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The list of key properties for the reference data set.
     */
    readonly keyProperties: types.outputs.ReferenceDataSetKeyPropertyResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the reference data set with the specified name in the specified environment.
 */
export function getReferenceDataSetOutput(args: GetReferenceDataSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReferenceDataSetResult> {
    return pulumi.output(args).apply((a: any) => getReferenceDataSet(a, opts))
}

export interface GetReferenceDataSetOutputArgs {
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the Time Series Insights reference data set associated with the specified environment.
     */
    referenceDataSetName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
