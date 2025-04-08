import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a failover group.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2017-10-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInstanceFailoverGroup(args: GetInstanceFailoverGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceFailoverGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getInstanceFailoverGroup", {
        "failoverGroupName": args.failoverGroupName,
        "locationName": args.locationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstanceFailoverGroupArgs {
    /**
     * The name of the failover group.
     */
    failoverGroupName: string;
    /**
     * The name of the region where the resource is located.
     */
    locationName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * An instance failover group.
 */
export interface GetInstanceFailoverGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * List of managed instance pairs in the failover group.
     */
    readonly managedInstancePairs: types.outputs.ManagedInstancePairInfoResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Partner region information for the failover group.
     */
    readonly partnerRegions: types.outputs.PartnerRegionInfoResponse[];
    /**
     * Read-only endpoint of the failover group instance.
     */
    readonly readOnlyEndpoint?: types.outputs.InstanceFailoverGroupReadOnlyEndpointResponse;
    /**
     * Read-write endpoint of the failover group instance.
     */
    readonly readWriteEndpoint: types.outputs.InstanceFailoverGroupReadWriteEndpointResponse;
    /**
     * Local replication role of the failover group instance.
     */
    readonly replicationRole: string;
    /**
     * Replication state of the failover group instance.
     */
    readonly replicationState: string;
    /**
     * Type of the geo-secondary instance. Set 'Standby' if the instance is used as a DR option only.
     */
    readonly secondaryType?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a failover group.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2017-10-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInstanceFailoverGroupOutput(args: GetInstanceFailoverGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInstanceFailoverGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getInstanceFailoverGroup", {
        "failoverGroupName": args.failoverGroupName,
        "locationName": args.locationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstanceFailoverGroupOutputArgs {
    /**
     * The name of the failover group.
     */
    failoverGroupName: pulumi.Input<string>;
    /**
     * The name of the region where the resource is located.
     */
    locationName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}