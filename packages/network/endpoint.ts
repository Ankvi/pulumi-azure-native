import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a Traffic Manager endpoint.
 * Azure REST API version: 2022-04-01. Prior API version in Azure Native 1.x: 2018-08-01.
 *
 * Other available API versions: 2022-04-01-preview.
 */
export class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Endpoint {
        return new Endpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:Endpoint';

    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Endpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Endpoint.__pulumiType;
    }

    /**
     * If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method.
     */
    public readonly alwaysServe!: pulumi.Output<string | undefined>;
    /**
     * List of custom headers.
     */
    public readonly customHeaders!: pulumi.Output<types.outputs.EndpointPropertiesResponseCustomHeaders[] | undefined>;
    /**
     * Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
     */
    public readonly endpointLocation!: pulumi.Output<string | undefined>;
    /**
     * The monitoring status of the endpoint.
     */
    public readonly endpointMonitorStatus!: pulumi.Output<string | undefined>;
    /**
     * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
     */
    public readonly endpointStatus!: pulumi.Output<string | undefined>;
    /**
     * The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
     */
    public readonly geoMapping!: pulumi.Output<string[] | undefined>;
    /**
     * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    public readonly minChildEndpoints!: pulumi.Output<number | undefined>;
    /**
     * The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    public readonly minChildEndpointsIPv4!: pulumi.Output<number | undefined>;
    /**
     * The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    public readonly minChildEndpointsIPv6!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
     */
    public readonly subnets!: pulumi.Output<types.outputs.EndpointPropertiesResponseSubnets[] | undefined>;
    /**
     * The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
     */
    public readonly target!: pulumi.Output<string | undefined>;
    /**
     * The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
     */
    public readonly targetResourceId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
     */
    public readonly weight!: pulumi.Output<number | undefined>;

    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endpointType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointType'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["alwaysServe"] = args ? args.alwaysServe : undefined;
            resourceInputs["customHeaders"] = args ? args.customHeaders : undefined;
            resourceInputs["endpointLocation"] = args ? args.endpointLocation : undefined;
            resourceInputs["endpointMonitorStatus"] = args ? args.endpointMonitorStatus : undefined;
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["endpointStatus"] = args ? args.endpointStatus : undefined;
            resourceInputs["endpointType"] = args ? args.endpointType : undefined;
            resourceInputs["geoMapping"] = args ? args.geoMapping : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["minChildEndpoints"] = args ? args.minChildEndpoints : undefined;
            resourceInputs["minChildEndpointsIPv4"] = args ? args.minChildEndpointsIPv4 : undefined;
            resourceInputs["minChildEndpointsIPv6"] = args ? args.minChildEndpointsIPv6 : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnets"] = args ? args.subnets : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        } else {
            resourceInputs["alwaysServe"] = undefined /*out*/;
            resourceInputs["customHeaders"] = undefined /*out*/;
            resourceInputs["endpointLocation"] = undefined /*out*/;
            resourceInputs["endpointMonitorStatus"] = undefined /*out*/;
            resourceInputs["endpointStatus"] = undefined /*out*/;
            resourceInputs["geoMapping"] = undefined /*out*/;
            resourceInputs["minChildEndpoints"] = undefined /*out*/;
            resourceInputs["minChildEndpointsIPv4"] = undefined /*out*/;
            resourceInputs["minChildEndpointsIPv6"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["target"] = undefined /*out*/;
            resourceInputs["targetResourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["weight"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20151101:Endpoint" }, { type: "azure-native:network/v20170301:Endpoint" }, { type: "azure-native:network/v20170501:Endpoint" }, { type: "azure-native:network/v20180201:Endpoint" }, { type: "azure-native:network/v20180301:Endpoint" }, { type: "azure-native:network/v20180401:Endpoint" }, { type: "azure-native:network/v20180801:Endpoint" }, { type: "azure-native:network/v20220401:Endpoint" }, { type: "azure-native:network/v20220401preview:Endpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Endpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method.
     */
    alwaysServe?: pulumi.Input<string | types.enums.AlwaysServe>;
    /**
     * List of custom headers.
     */
    customHeaders?: pulumi.Input<pulumi.Input<types.inputs.EndpointPropertiesCustomHeadersArgs>[]>;
    /**
     * Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
     */
    endpointLocation?: pulumi.Input<string>;
    /**
     * The monitoring status of the endpoint.
     */
    endpointMonitorStatus?: pulumi.Input<string | types.enums.EndpointMonitorStatus>;
    /**
     * The name of the Traffic Manager endpoint to be created or updated.
     */
    endpointName?: pulumi.Input<string>;
    /**
     * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
     */
    endpointStatus?: pulumi.Input<string | types.enums.EndpointStatus>;
    /**
     * The type of the Traffic Manager endpoint to be created or updated.
     */
    endpointType: pulumi.Input<string>;
    /**
     * The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
     */
    geoMapping?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
     */
    id?: pulumi.Input<string>;
    /**
     * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpoints?: pulumi.Input<number>;
    /**
     * The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpointsIPv4?: pulumi.Input<number>;
    /**
     * The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpointsIPv6?: pulumi.Input<number>;
    /**
     * The name of the resource
     */
    name?: pulumi.Input<string>;
    /**
     * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
     */
    priority?: pulumi.Input<number>;
    /**
     * The name of the Traffic Manager profile.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
     */
    subnets?: pulumi.Input<pulumi.Input<types.inputs.EndpointPropertiesSubnetsArgs>[]>;
    /**
     * The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
     */
    target?: pulumi.Input<string>;
    /**
     * The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
     */
    targetResourceId?: pulumi.Input<string>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    type?: pulumi.Input<string>;
    /**
     * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
     */
    weight?: pulumi.Input<number>;
}