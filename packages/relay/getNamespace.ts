import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the description for the specified namespace.
 * Azure REST API version: 2021-11-01.
 */
export function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceArgs {
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
 * Description of a namespace resource.
 */
export interface GetNamespaceResult {
    /**
     * The time the namespace was created.
     */
    readonly createdAt: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Identifier for Azure Insights metrics.
     */
    readonly metricId: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections?: types.outputs.relay.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the Namespace.
     */
    readonly provisioningState: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Endpoint you can use to perform Service Bus operations.
     */
    readonly serviceBusEndpoint: string;
    /**
     * SKU of the namespace.
     */
    readonly sku?: types.outputs.relay.SkuResponse;
    /**
     * Status of the Namespace.
     */
    readonly status: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.relay.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt: string;
}
/**
 * Returns the description for the specified namespace.
 * Azure REST API version: 2021-11-01.
 */
export function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getNamespace(a, opts))
}

export interface GetNamespaceOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
