import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Network Connectivity Configuration, specified by the resource group, network manager name, and connectivity Configuration name
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2021-02-01-preview, 2022-01-01, 2022-02-01-preview, 2022-04-01-preview, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectivityConfiguration(args: GetConnectivityConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectivityConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getConnectivityConfiguration", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectivityConfigurationArgs {
    /**
     * The name of the network manager connectivity configuration.
     */
    configurationName: string;
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The network manager connectivity configuration resource
 */
export interface GetConnectivityConfigurationResult {
    /**
     * Groups for configuration
     */
    readonly appliesToGroups: types.outputs.ConnectivityGroupItemResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Connectivity topology type.
     */
    readonly connectivityTopology: string;
    /**
     * Flag if need to remove current existing peerings.
     */
    readonly deleteExistingPeering?: string;
    /**
     * A description of the connectivity configuration.
     */
    readonly description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * List of hubItems
     */
    readonly hubs?: types.outputs.HubResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Flag if global mesh is supported.
     */
    readonly isGlobal?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the connectivity configuration resource.
     */
    readonly provisioningState: string;
    /**
     * Unique identifier for this resource.
     */
    readonly resourceGuid: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Network Connectivity Configuration, specified by the resource group, network manager name, and connectivity Configuration name
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2021-02-01-preview, 2022-01-01, 2022-02-01-preview, 2022-04-01-preview, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectivityConfigurationOutput(args: GetConnectivityConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectivityConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getConnectivityConfiguration", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectivityConfigurationOutputArgs {
    /**
     * The name of the network manager connectivity configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}