import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ServiceGateway resource.
 *
 * Uses Azure REST API version 2025-05-01.
 *
 * Other available API versions: 2025-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ServiceGateway extends pulumi.CustomResource {
    /**
     * Get an existing ServiceGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceGateway {
        return new ServiceGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ServiceGateway';

    /**
     * Returns true if the given object is an instance of ServiceGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceGateway.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    declare public /*out*/ readonly etag: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    declare public readonly location: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the service gateway resource.
     */
    declare public /*out*/ readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource GUID property of the service gateway resource.
     */
    declare public /*out*/ readonly resourceGuid: pulumi.Output<string>;
    /**
     * Route Target address of Service gateway
     */
    declare public readonly routeTargetAddress: pulumi.Output<types.outputs.RouteTargetAddressPropertiesFormatResponse | undefined>;
    /**
     * Route Target address V6 of Service gateway
     */
    declare public readonly routeTargetAddressV6: pulumi.Output<types.outputs.RouteTargetAddressPropertiesFormatResponse | undefined>;
    /**
     * The service gateway SKU.
     */
    declare public readonly sku: pulumi.Output<types.outputs.ServiceGatewaySkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    declare public readonly tags: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;
    /**
     * Reference to an existing virtual network.
     */
    declare public readonly virtualNetwork: pulumi.Output<types.outputs.VirtualNetworkResponse | undefined>;
    /**
     * A list of availability zones denoting the zone in which service gateway should be deployed.
     *
     * - The zone values must be provided as strings representing numeric identifiers like "1", "2", "3" etc.
     */
    declare public readonly zones: pulumi.Output<string[] | undefined>;

    /**
     * Create a ServiceGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args?.location;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["routeTargetAddress"] = args ? (args.routeTargetAddress ? pulumi.output(args.routeTargetAddress).apply(types.inputs.routeTargetAddressPropertiesFormatArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["routeTargetAddressV6"] = args ? (args.routeTargetAddressV6 ? pulumi.output(args.routeTargetAddressV6).apply(types.inputs.routeTargetAddressPropertiesFormatArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["serviceGatewayName"] = args?.serviceGatewayName;
            resourceInputs["sku"] = args?.sku;
            resourceInputs["tags"] = args?.tags;
            resourceInputs["virtualNetwork"] = args ? (args.virtualNetwork ? pulumi.output(args.virtualNetwork).apply(types.inputs.commonVirtualNetworkArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["zones"] = args?.zones;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["routeTargetAddress"] = undefined /*out*/;
            resourceInputs["routeTargetAddressV6"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20250501:ServiceGateway" }, { type: "azure-native:network/v20250701:ServiceGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServiceGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServiceGateway resource.
 */
export interface ServiceGatewayArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Route Target address of Service gateway
     */
    routeTargetAddress?: pulumi.Input<types.inputs.RouteTargetAddressPropertiesFormatArgs>;
    /**
     * Route Target address V6 of Service gateway
     */
    routeTargetAddressV6?: pulumi.Input<types.inputs.RouteTargetAddressPropertiesFormatArgs>;
    /**
     * The name of the service gateway.
     */
    serviceGatewayName?: pulumi.Input<string>;
    /**
     * The service gateway SKU.
     */
    sku?: pulumi.Input<types.inputs.ServiceGatewaySkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Reference to an existing virtual network.
     */
    virtualNetwork?: pulumi.Input<types.inputs.CommonVirtualNetworkArgs>;
    /**
     * A list of availability zones denoting the zone in which service gateway should be deployed.
     *
     * - The zone values must be provided as strings representing numeric identifiers like "1", "2", "3" etc.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}