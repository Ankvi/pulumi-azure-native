import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specified connection created by this subscription.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2022-01-01, 2022-02-01-preview, 2022-04-01-preview, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSubscriptionNetworkManagerConnection(args: GetSubscriptionNetworkManagerConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetSubscriptionNetworkManagerConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getSubscriptionNetworkManagerConnection", {
        "networkManagerConnectionName": args.networkManagerConnectionName,
    }, opts);
}

export interface GetSubscriptionNetworkManagerConnectionArgs {
    /**
     * Name for the network manager connection.
     */
    networkManagerConnectionName: string;
}

/**
 * The Network Manager Connection resource
 */
export interface GetSubscriptionNetworkManagerConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A description of the network manager connection.
     */
    readonly description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Network Manager Id.
     */
    readonly networkManagerId?: string;
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
 * Get a specified connection created by this subscription.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2022-01-01, 2022-02-01-preview, 2022-04-01-preview, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSubscriptionNetworkManagerConnectionOutput(args: GetSubscriptionNetworkManagerConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSubscriptionNetworkManagerConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getSubscriptionNetworkManagerConnection", {
        "networkManagerConnectionName": args.networkManagerConnectionName,
    }, opts);
}

export interface GetSubscriptionNetworkManagerConnectionOutputArgs {
    /**
     * Name for the network manager connection.
     */
    networkManagerConnectionName: pulumi.Input<string>;
}