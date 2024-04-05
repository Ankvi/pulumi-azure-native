import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Private link service resource.
 */
export class PrivateLinkService extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateLinkService {
        return new PrivateLinkService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190801:PrivateLinkService';

    /**
     * Returns true if the given object is an instance of PrivateLinkService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateLinkService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateLinkService.__pulumiType;
    }

    /**
     * The alias of the private link service.
     */
    public /*out*/ readonly alias!: pulumi.Output<string>;
    /**
     * The auto-approval list of the private link service.
     */
    public readonly autoApproval!: pulumi.Output<types.outputs.PrivateLinkServicePropertiesResponseAutoApproval | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The list of Fqdn.
     */
    public readonly fqdns!: pulumi.Output<string[] | undefined>;
    /**
     * An array of private link service IP configurations.
     */
    public readonly ipConfigurations!: pulumi.Output<types.outputs.PrivateLinkServiceIpConfigurationResponse[] | undefined>;
    /**
     * An array of references to the load balancer IP configurations.
     */
    public readonly loadBalancerFrontendIpConfigurations!: pulumi.Output<types.outputs.FrontendIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * An array of references to the network interfaces created for this private link service.
     */
    public /*out*/ readonly networkInterfaces!: pulumi.Output<types.outputs.NetworkInterfaceResponse[]>;
    /**
     * An array of list about connections to the private endpoint.
     */
    public readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[] | undefined>;
    /**
     * The provisioning state of the private link service resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The visibility list of the private link service.
     */
    public readonly visibility!: pulumi.Output<types.outputs.PrivateLinkServicePropertiesResponseVisibility | undefined>;

    /**
     * Create a PrivateLinkService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoApproval"] = args ? args.autoApproval : undefined;
            resourceInputs["fqdns"] = args ? args.fqdns : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["loadBalancerFrontendIpConfigurations"] = args ? args.loadBalancerFrontendIpConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privateEndpointConnections"] = args ? args.privateEndpointConnections : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["visibility"] = args ? args.visibility : undefined;
            resourceInputs["alias"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alias"] = undefined /*out*/;
            resourceInputs["autoApproval"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdns"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["loadBalancerFrontendIpConfigurations"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["visibility"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:PrivateLinkService" }, { type: "azure-native:network/v20190401:PrivateLinkService" }, { type: "azure-native:network/v20190601:PrivateLinkService" }, { type: "azure-native:network/v20190701:PrivateLinkService" }, { type: "azure-native:network/v20190901:PrivateLinkService" }, { type: "azure-native:network/v20191101:PrivateLinkService" }, { type: "azure-native:network/v20191201:PrivateLinkService" }, { type: "azure-native:network/v20200301:PrivateLinkService" }, { type: "azure-native:network/v20200401:PrivateLinkService" }, { type: "azure-native:network/v20200501:PrivateLinkService" }, { type: "azure-native:network/v20200601:PrivateLinkService" }, { type: "azure-native:network/v20200701:PrivateLinkService" }, { type: "azure-native:network/v20200801:PrivateLinkService" }, { type: "azure-native:network/v20201101:PrivateLinkService" }, { type: "azure-native:network/v20210201:PrivateLinkService" }, { type: "azure-native:network/v20210301:PrivateLinkService" }, { type: "azure-native:network/v20210501:PrivateLinkService" }, { type: "azure-native:network/v20210801:PrivateLinkService" }, { type: "azure-native:network/v20220101:PrivateLinkService" }, { type: "azure-native:network/v20220501:PrivateLinkService" }, { type: "azure-native:network/v20220701:PrivateLinkService" }, { type: "azure-native:network/v20220901:PrivateLinkService" }, { type: "azure-native:network/v20221101:PrivateLinkService" }, { type: "azure-native:network/v20230201:PrivateLinkService" }, { type: "azure-native:network/v20230401:PrivateLinkService" }, { type: "azure-native:network/v20230501:PrivateLinkService" }, { type: "azure-native:network/v20230601:PrivateLinkService" }, { type: "azure-native:network/v20230901:PrivateLinkService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateLinkService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateLinkService resource.
 */
export interface PrivateLinkServiceArgs {
    /**
     * The auto-approval list of the private link service.
     */
    autoApproval?: pulumi.Input<types.inputs.PrivateLinkServicePropertiesAutoApprovalArgs>;
    /**
     * The list of Fqdn.
     */
    fqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * An array of private link service IP configurations.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<types.inputs.PrivateLinkServiceIpConfigurationArgs>[]>;
    /**
     * An array of references to the load balancer IP configurations.
     */
    loadBalancerFrontendIpConfigurations?: pulumi.Input<pulumi.Input<types.inputs.FrontendIPConfigurationArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * An array of list about connections to the private endpoint.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateEndpointConnectionArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the private link service.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The visibility list of the private link service.
     */
    visibility?: pulumi.Input<types.inputs.PrivateLinkServicePropertiesVisibilityArgs>;
}