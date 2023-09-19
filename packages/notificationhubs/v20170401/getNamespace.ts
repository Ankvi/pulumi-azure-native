import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the description for the specified namespace.
 */
export function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20170401:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceArgs {
    /**
     * The namespace name.
     */
    namespaceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Description of a Namespace resource.
 */
export interface GetNamespaceResult {
    /**
     * The time the namespace was created.
     */
    readonly createdAt?: string;
    /**
     * Whether or not the namespace is set as Critical.
     */
    readonly critical?: boolean;
    /**
     * Data center for the namespace
     */
    readonly dataCenter?: string;
    /**
     * Whether or not the namespace is currently enabled.
     */
    readonly enabled?: boolean;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Identifier for Azure Insights metrics
     */
    readonly metricId: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The namespace type.
     */
    readonly namespaceType?: string;
    /**
     * Provisioning state of the Namespace.
     */
    readonly provisioningState?: string;
    /**
     * Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
     */
    readonly region?: string;
    /**
     * ScaleUnit where the namespace gets created
     */
    readonly scaleUnit?: string;
    /**
     * Endpoint you can use to perform NotificationHub operations.
     */
    readonly serviceBusEndpoint?: string;
    /**
     * The sku of the created namespace
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
     */
    readonly status?: string;
    /**
     * The Id of the Azure subscription associated with the namespace.
     */
    readonly subscriptionId?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt?: string;
}
/**
 * Returns the description for the specified namespace.
 */
export function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getNamespace(a, opts))
}

export interface GetNamespaceOutputArgs {
    /**
     * The namespace name.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
