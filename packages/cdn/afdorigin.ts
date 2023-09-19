import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Front Door origin is the source of the content being delivered via Azure Front Door. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-09-01
 */
export class AFDOrigin extends pulumi.CustomResource {
    /**
     * Get an existing AFDOrigin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AFDOrigin {
        return new AFDOrigin(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:AFDOrigin';

    /**
     * Returns true if the given object is an instance of AFDOrigin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AFDOrigin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AFDOrigin.__pulumiType;
    }

    /**
     * Resource reference to the Azure origin resource.
     */
    public readonly azureOrigin!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
     */
    public readonly enabledState!: pulumi.Output<string | undefined>;
    /**
     * Whether to enable certificate name check at origin level
     */
    public readonly enforceCertificateNameCheck!: pulumi.Output<boolean | undefined>;
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
     * The name of the origin group which contains this origin.
     */
    public readonly originGroupName!: pulumi.Output<string>;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure Front Door origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
     */
    public readonly originHostHeader!: pulumi.Output<string | undefined>;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The properties of the private link resource for private origin.
     */
    public readonly sharedPrivateLinkResource!: pulumi.Output<types.outputs.SharedPrivateLinkResourcePropertiesResponse | undefined>;
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
     * Create a AFDOrigin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AFDOriginArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hostName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.originGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'originGroupName'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["azureOrigin"] = args ? args.azureOrigin : undefined;
            resourceInputs["enabledState"] = args ? args.enabledState : undefined;
            resourceInputs["enforceCertificateNameCheck"] = (args ? args.enforceCertificateNameCheck : undefined) ?? true;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["httpPort"] = (args ? args.httpPort : undefined) ?? 80;
            resourceInputs["httpsPort"] = (args ? args.httpsPort : undefined) ?? 443;
            resourceInputs["originGroupName"] = args ? args.originGroupName : undefined;
            resourceInputs["originHostHeader"] = args ? args.originHostHeader : undefined;
            resourceInputs["originName"] = args ? args.originName : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sharedPrivateLinkResource"] = args ? args.sharedPrivateLinkResource : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureOrigin"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["enabledState"] = undefined /*out*/;
            resourceInputs["enforceCertificateNameCheck"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["httpPort"] = undefined /*out*/;
            resourceInputs["httpsPort"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["originGroupName"] = undefined /*out*/;
            resourceInputs["originHostHeader"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sharedPrivateLinkResource"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["weight"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20200901:AFDOrigin" }, { type: "azure-native:cdn/v20210601:AFDOrigin" }, { type: "azure-native:cdn/v20220501preview:AFDOrigin" }, { type: "azure-native:cdn/v20221101preview:AFDOrigin" }, { type: "azure-native:cdn/v20230501:AFDOrigin" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AFDOrigin.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AFDOrigin resource.
 */
export interface AFDOriginArgs {
    /**
     * Resource reference to the Azure origin resource.
     */
    azureOrigin?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
     */
    enabledState?: pulumi.Input<string | types.enums.EnabledState>;
    /**
     * Whether to enable certificate name check at origin level
     */
    enforceCertificateNameCheck?: pulumi.Input<boolean>;
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
     * Name of the origin group which is unique within the profile.
     */
    originGroupName: pulumi.Input<string>;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure Front Door origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
     */
    originHostHeader?: pulumi.Input<string>;
    /**
     * Name of the origin that is unique within the profile.
     */
    originName?: pulumi.Input<string>;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
     */
    priority?: pulumi.Input<number>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The properties of the private link resource for private origin.
     */
    sharedPrivateLinkResource?: pulumi.Input<types.inputs.SharedPrivateLinkResourcePropertiesArgs>;
    /**
     * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
     */
    weight?: pulumi.Input<number>;
}
