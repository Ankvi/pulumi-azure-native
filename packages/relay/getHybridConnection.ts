import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the description for the specified hybrid connection.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native relay [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHybridConnection(args: GetHybridConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay:getHybridConnection", {
        "hybridConnectionName": args.hybridConnectionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHybridConnectionArgs {
    /**
     * The hybrid connection name.
     */
    hybridConnectionName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Description of hybrid connection resource.
 */
export interface GetHybridConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The time the hybrid connection was created.
     */
    readonly createdAt: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The number of listeners for this hybrid connection. Note that min : 1 and max:25 are supported.
     */
    readonly listenerCount: number;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Returns true if client authorization is needed for this hybrid connection; otherwise, false.
     */
    readonly requiresClientAuthorization?: boolean;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt: string;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    readonly userMetadata?: string;
}
/**
 * Returns the description for the specified hybrid connection.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native relay [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHybridConnectionOutput(args: GetHybridConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHybridConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:relay:getHybridConnection", {
        "hybridConnectionName": args.hybridConnectionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHybridConnectionOutputArgs {
    /**
     * The hybrid connection name.
     */
    hybridConnectionName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}