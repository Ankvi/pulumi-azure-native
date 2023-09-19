import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Front Door with the specified Front Door name under the specified subscription and resource group.
 * Azure REST API version: 2021-06-01.
 */
export function getFrontDoor(args: GetFrontDoorArgs, opts?: pulumi.InvokeOptions): Promise<GetFrontDoorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getFrontDoor", {
        "frontDoorName": args.frontDoorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFrontDoorArgs {
    /**
     * Name of the Front Door which is globally unique.
     */
    frontDoorName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Front Door represents a collection of backend endpoints to route traffic to along with rules that specify how traffic is sent there.
 */
export interface GetFrontDoorResult {
    /**
     * Backend pools available to routing rules.
     */
    readonly backendPools?: types.outputs.BackendPoolResponse[];
    /**
     * Settings for all backendPools
     */
    readonly backendPoolsSettings?: types.outputs.BackendPoolsSettingsResponse;
    /**
     * The host that each frontendEndpoint must CNAME to.
     */
    readonly cname: string;
    /**
     * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
     */
    readonly enabledState?: string;
    /**
     * Key-Value pair representing additional properties for frontdoor.
     */
    readonly extendedProperties: {[key: string]: string};
    /**
     * A friendly name for the frontDoor
     */
    readonly friendlyName?: string;
    /**
     * The Id of the frontdoor.
     */
    readonly frontdoorId: string;
    /**
     * Frontend endpoints available to routing rules.
     */
    readonly frontendEndpoints?: types.outputs.FrontendEndpointResponse[];
    /**
     * Health probe settings associated with this Front Door instance.
     */
    readonly healthProbeSettings?: types.outputs.HealthProbeSettingsModelResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Load balancing settings associated with this Front Door instance.
     */
    readonly loadBalancingSettings?: types.outputs.LoadBalancingSettingsModelResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning state of the Front Door.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the Front Door.
     */
    readonly resourceState: string;
    /**
     * Routing rules associated with this Front Door.
     */
    readonly routingRules?: types.outputs.RoutingRuleResponse[];
    /**
     * Rules Engine Configurations available to routing rules.
     */
    readonly rulesEngines: types.outputs.RulesEngineResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Front Door with the specified Front Door name under the specified subscription and resource group.
 * Azure REST API version: 2021-06-01.
 */
export function getFrontDoorOutput(args: GetFrontDoorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFrontDoorResult> {
    return pulumi.output(args).apply((a: any) => getFrontDoor(a, opts))
}

export interface GetFrontDoorOutputArgs {
    /**
     * Name of the Front Door which is globally unique.
     */
    frontDoorName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
