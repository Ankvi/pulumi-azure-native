import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified express route circuit.
 */
export function getExpressRouteCircuit(args: GetExpressRouteCircuitArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20181201:getExpressRouteCircuit", {
        "circuitName": args.circuitName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitArgs {
    /**
     * The name of express route circuit.
     */
    circuitName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * ExpressRouteCircuit resource
 */
export interface GetExpressRouteCircuitResult {
    /**
     * Allow classic operations
     */
    readonly allowClassicOperations?: boolean;
    /**
     * Flag to enable Global Reach on the circuit.
     */
    readonly allowGlobalReach?: boolean;
    /**
     * The list of authorizations.
     */
    readonly authorizations?: types.outputs.ExpressRouteCircuitAuthorizationResponse[];
    /**
     * The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
     */
    readonly bandwidthInGbps?: number;
    /**
     * The CircuitProvisioningState state of the resource.
     */
    readonly circuitProvisioningState?: string;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
     */
    readonly expressRoutePort?: types.outputs.SubResourceResponse;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag?: string;
    /**
     * Flag denoting Global reach status.
     */
    readonly globalReachEnabled?: boolean;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The list of peerings.
     */
    readonly peerings?: types.outputs.ExpressRouteCircuitPeeringResponse[];
    /**
     * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * The ServiceKey.
     */
    readonly serviceKey?: string;
    /**
     * The ServiceProviderNotes.
     */
    readonly serviceProviderNotes?: string;
    /**
     * The ServiceProviderProperties.
     */
    readonly serviceProviderProperties?: types.outputs.ExpressRouteCircuitServiceProviderPropertiesResponse;
    /**
     * The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
     */
    readonly serviceProviderProvisioningState?: string;
    /**
     * The SKU.
     */
    readonly sku?: types.outputs.ExpressRouteCircuitSkuResponse;
    /**
     * The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
     */
    readonly stag: number;
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
 * Gets information about the specified express route circuit.
 */
export function getExpressRouteCircuitOutput(args: GetExpressRouteCircuitOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressRouteCircuitResult> {
    return pulumi.output(args).apply((a: any) => getExpressRouteCircuit(a, opts))
}

export interface GetExpressRouteCircuitOutputArgs {
    /**
     * The name of express route circuit.
     */
    circuitName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
