import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets a Swift Virtual Network connection.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppSwiftVirtualNetworkConnection(args: GetWebAppSwiftVirtualNetworkConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSwiftVirtualNetworkConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppSwiftVirtualNetworkConnection", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppSwiftVirtualNetworkConnectionArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration.
 */
export interface GetWebAppSwiftVirtualNetworkConnectionResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
     */
    readonly subnetResourceId?: string;
    /**
     * A flag that specifies if the scale unit this Web App is on supports Swift integration.
     */
    readonly swiftSupported?: boolean;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets a Swift Virtual Network connection.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppSwiftVirtualNetworkConnectionOutput(args: GetWebAppSwiftVirtualNetworkConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppSwiftVirtualNetworkConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppSwiftVirtualNetworkConnection", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppSwiftVirtualNetworkConnectionOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}