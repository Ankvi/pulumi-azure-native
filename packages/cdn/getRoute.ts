import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2020-09-01, 2023-07-01-preview.
 */
export function getRoute(args: GetRouteArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getRoute", {
        "endpointName": args.endpointName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "routeName": args.routeName,
    }, opts);
}

export interface GetRouteArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: string;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the routing rule.
     */
    routeName: string;
}

/**
 * Friendly Routes name mapping to the any Routes or secret related information.
 */
export interface GetRouteResult {
    /**
     * The caching configuration for this route. To disable caching, do not provide a cacheConfiguration object.
     */
    readonly cacheConfiguration?: types.outputs.AfdRouteCacheConfigurationResponse;
    /**
     * Domains referenced by this endpoint.
     */
    readonly customDomains?: types.outputs.ActivatedResourceReferenceResponse[];
    readonly deploymentStatus: string;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    readonly enabledState?: string;
    /**
     * The name of the endpoint which holds the route.
     */
    readonly endpointName: string;
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    readonly forwardingProtocol?: string;
    /**
     * Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
     */
    readonly httpsRedirect?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * whether this route will be linked to the default endpoint domain.
     */
    readonly linkToDefaultDomain?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * A reference to the origin group.
     */
    readonly originGroup: types.outputs.ResourceReferenceResponse;
    /**
     * A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
     */
    readonly originPath?: string;
    /**
     * The route patterns of the rule.
     */
    readonly patternsToMatch?: string[];
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * rule sets referenced by this endpoint.
     */
    readonly ruleSets?: types.outputs.ResourceReferenceResponse[];
    /**
     * List of supported protocols for this route.
     */
    readonly supportedProtocols?: string[];
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2020-09-01, 2023-07-01-preview.
 */
export function getRouteOutput(args: GetRouteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouteResult> {
    return pulumi.output(args).apply((a: any) => getRoute(a, opts))
}

export interface GetRouteOutputArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the routing rule.
     */
    routeName: pulumi.Input<string>;
}