import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified replica.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-08-01-preview, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getReplica(args: GetReplicaArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appconfiguration:getReplica", {
        "configStoreName": args.configStoreName,
        "replicaName": args.replicaName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetReplicaArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: string;
    /**
     * The name of the replica.
     */
    replicaName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The replica resource.
 */
export interface GetReplicaResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The URI of the replica where the replica API will be available.
     */
    readonly endpoint: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The location of the replica.
     */
    readonly location?: string;
    /**
     * The name of the replica.
     */
    readonly name: string;
    /**
     * The provisioning state of the replica.
     */
    readonly provisioningState: string;
    /**
     * Resource system metadata.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified replica.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-08-01-preview, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appconfiguration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getReplicaOutput(args: GetReplicaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReplicaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appconfiguration:getReplica", {
        "configStoreName": args.configStoreName,
        "replicaName": args.replicaName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetReplicaOutputArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: pulumi.Input<string>;
    /**
     * The name of the replica.
     */
    replicaName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}