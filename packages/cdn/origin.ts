import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-09-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview.
 */
export class Origin extends pulumi.CustomResource {
    /**
     * Get an existing Origin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Origin {
        return new Origin(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:Origin';

    /**
     * Returns true if the given object is an instance of Origin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Origin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Origin.__pulumiType;
    }

    /**
     * Origin is enabled for load balancing or not
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
     */
    public readonly hostName!: pulumi.Output<string>;
    /**
     * The value of the HTTP port. Must be between 1 and 65535.
     */
    public readonly httpPort!: pulumi.Output<number | undefined>;
    /**
     * The value of the HTTPS port. Must be between 1 and 65535.
     */
    public readonly httpsPort!: pulumi.Output<number | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
     */
    public readonly originHostHeader!: pulumi.Output<string | undefined>;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * The approval status for the connection to the Private Link
     */
    public /*out*/ readonly privateEndpointStatus!: pulumi.Output<string>;
    /**
     * The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
     */
    public readonly privateLinkAlias!: pulumi.Output<string | undefined>;
    /**
     * A custom message to be included in the approval request to connect to the Private Link.
     */
    public readonly privateLinkApprovalMessage!: pulumi.Output<string | undefined>;
    /**
     * The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
     */
    public readonly privateLinkLocation!: pulumi.Output<string | undefined>;
    /**
     * The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
     */
    public readonly privateLinkResourceId!: pulumi.Output<string | undefined>;
    /**
     * Provisioning status of the origin.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource status of the origin.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
     */
    public readonly weight!: pulumi.Output<number | undefined>;

    /**
     * Create a Origin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OriginArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointName'");
            }
            if ((!args || args.hostName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["httpPort"] = args ? args.httpPort : undefined;
            resourceInputs["httpsPort"] = args ? args.httpsPort : undefined;
            resourceInputs["originHostHeader"] = args ? args.originHostHeader : undefined;
            resourceInputs["originName"] = args ? args.originName : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["privateLinkAlias"] = args ? args.privateLinkAlias : undefined;
            resourceInputs["privateLinkApprovalMessage"] = args ? args.privateLinkApprovalMessage : undefined;
            resourceInputs["privateLinkLocation"] = args ? args.privateLinkLocation : undefined;
            resourceInputs["privateLinkResourceId"] = args ? args.privateLinkResourceId : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointStatus"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["httpPort"] = undefined /*out*/;
            resourceInputs["httpsPort"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["originHostHeader"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["privateEndpointStatus"] = undefined /*out*/;
            resourceInputs["privateLinkAlias"] = undefined /*out*/;
            resourceInputs["privateLinkApprovalMessage"] = undefined /*out*/;
            resourceInputs["privateLinkLocation"] = undefined /*out*/;
            resourceInputs["privateLinkResourceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["weight"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20150601:Origin" }, { type: "azure-native:cdn/v20160402:Origin" }, { type: "azure-native:cdn/v20191231:Origin" }, { type: "azure-native:cdn/v20200331:Origin" }, { type: "azure-native:cdn/v20200415:Origin" }, { type: "azure-native:cdn/v20200901:Origin" }, { type: "azure-native:cdn/v20210601:Origin" }, { type: "azure-native:cdn/v20220501preview:Origin" }, { type: "azure-native:cdn/v20221101preview:Origin" }, { type: "azure-native:cdn/v20230501:Origin" }, { type: "azure-native:cdn/v20230701preview:Origin" }, { type: "azure-native:cdn/v20240201:Origin" }, { type: "azure-native:cdn/v20240501preview:Origin" }, { type: "azure-native:cdn/v20240601preview:Origin" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Origin.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Origin resource.
 */
export interface OriginArgs {
    /**
     * Origin is enabled for load balancing or not
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
     */
    hostName: pulumi.Input<string>;
    /**
     * The value of the HTTP port. Must be between 1 and 65535.
     */
    httpPort?: pulumi.Input<number>;
    /**
     * The value of the HTTPS port. Must be between 1 and 65535.
     */
    httpsPort?: pulumi.Input<number>;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
     */
    originHostHeader?: pulumi.Input<string>;
    /**
     * Name of the origin that is unique within the endpoint.
     */
    originName?: pulumi.Input<string>;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
     */
    priority?: pulumi.Input<number>;
    /**
     * The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
     */
    privateLinkAlias?: pulumi.Input<string>;
    /**
     * A custom message to be included in the approval request to connect to the Private Link.
     */
    privateLinkApprovalMessage?: pulumi.Input<string>;
    /**
     * The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
     */
    privateLinkLocation?: pulumi.Input<string>;
    /**
     * The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
     */
    privateLinkResourceId?: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
     */
    weight?: pulumi.Input<number>;
}