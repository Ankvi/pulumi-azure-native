import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a DataSetMapping in a shareSubscription
 */
export function getSynapseWorkspaceSqlPoolTableDataSetMapping(args: GetSynapseWorkspaceSqlPoolTableDataSetMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetSynapseWorkspaceSqlPoolTableDataSetMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20210801:getSynapseWorkspaceSqlPoolTableDataSetMapping", {
        "accountName": args.accountName,
        "dataSetMappingName": args.dataSetMappingName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetSynapseWorkspaceSqlPoolTableDataSetMappingArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The name of the dataSetMapping.
     */
    dataSetMappingName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: string;
}

/**
 * A Synapse Workspace Sql Pool Table data set mapping
 */
export interface GetSynapseWorkspaceSqlPoolTableDataSetMappingResult {
    /**
     * The id of the source data set.
     */
    readonly dataSetId: string;
    /**
     * Gets the status of the data set mapping.
     */
    readonly dataSetMappingStatus: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set mapping.
     * Expected value is 'SynapseWorkspaceSqlPoolTable'.
     */
    readonly kind: "SynapseWorkspaceSqlPoolTable";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Provisioning state of the data set mapping.
     */
    readonly provisioningState: string;
    /**
     * Resource id of the Synapse Workspace SQL Pool Table
     */
    readonly synapseWorkspaceSqlPoolTableResourceId: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.datashare.v20210801.SystemDataResponse;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
/**
 * Get a DataSetMapping in a shareSubscription
 */
export function getSynapseWorkspaceSqlPoolTableDataSetMappingOutput(args: GetSynapseWorkspaceSqlPoolTableDataSetMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSynapseWorkspaceSqlPoolTableDataSetMappingResult> {
    return pulumi.output(args).apply((a: any) => getSynapseWorkspaceSqlPoolTableDataSetMapping(a, opts))
}

export interface GetSynapseWorkspaceSqlPoolTableDataSetMappingOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSetMapping.
     */
    dataSetMappingName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: pulumi.Input<string>;
}
