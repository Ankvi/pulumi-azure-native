import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private link service by resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateLinkService(args: GetPrivateLinkServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPrivateLinkService", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPrivateLinkServiceArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the private link service.
     */
    serviceName: string;
}

/**
 * Private link service resource.
 */
export interface GetPrivateLinkServiceResult {
    /**
     * The alias of the private link service.
     */
    readonly alias: string;
    /**
     * The auto-approval list of the private link service.
     */
    readonly autoApproval?: types.outputs.PrivateLinkServicePropertiesResponseAutoApproval;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The destination IP address of the private link service.
     */
    readonly destinationIPAddress?: string;
    /**
     * Whether the private link service is enabled for proxy protocol or not.
     */
    readonly enableProxyProtocol?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of the load balancer.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The list of Fqdn.
     */
    readonly fqdns?: string[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * An array of private link service IP configurations.
     */
    readonly ipConfigurations?: types.outputs.PrivateLinkServiceIpConfigurationResponse[];
    /**
     * An array of references to the load balancer IP configurations.
     */
    readonly loadBalancerFrontendIpConfigurations?: types.outputs.FrontendIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * An array of references to the network interfaces created for this private link service.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfaceResponse[];
    /**
     * An array of list about connections to the private endpoint.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state of the private link service resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The visibility list of the private link service.
     */
    readonly visibility?: types.outputs.PrivateLinkServicePropertiesResponseVisibility;
}
/**
 * Gets the specified private link service by resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateLinkServiceOutput(args: GetPrivateLinkServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateLinkServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getPrivateLinkService", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPrivateLinkServiceOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the private link service.
     */
    serviceName: pulumi.Input<string>;
}