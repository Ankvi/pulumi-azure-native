import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Front Door endpoint is the entity within a Azure Front Door profile containing configuration information such as origin, protocol, content caching and delivery behavior. The AzureFrontDoor endpoint uses the URL format <endpointname>.azureedge.net.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-09-01.
 *
 * Other available API versions: 2020-09-01, 2023-07-01-preview.
 */
export class AFDEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing AFDEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AFDEndpoint {
        return new AFDEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:AFDEndpoint';

    /**
     * Returns true if the given object is an instance of AFDEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AFDEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AFDEndpoint.__pulumiType;
    }

    /**
     * Indicates the endpoint name reuse scope. The default value is TenantReuse.
     */
    public readonly autoGeneratedDomainNameLabelScope!: pulumi.Output<string | undefined>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    public readonly enabledState!: pulumi.Output<string | undefined>;
    /**
     * The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name of the profile which holds the endpoint.
     */
    public readonly profileName!: pulumi.Output<string>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AFDEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AFDEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoGeneratedDomainNameLabelScope"] = args ? args.autoGeneratedDomainNameLabelScope : undefined;
            resourceInputs["enabledState"] = args ? args.enabledState : undefined;
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoGeneratedDomainNameLabelScope"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["enabledState"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["profileName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20200901:AFDEndpoint" }, { type: "azure-native:cdn/v20210601:AFDEndpoint" }, { type: "azure-native:cdn/v20220501preview:AFDEndpoint" }, { type: "azure-native:cdn/v20221101preview:AFDEndpoint" }, { type: "azure-native:cdn/v20230501:AFDEndpoint" }, { type: "azure-native:cdn/v20230701preview:AFDEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AFDEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AFDEndpoint resource.
 */
export interface AFDEndpointArgs {
    /**
     * Indicates the endpoint name reuse scope. The default value is TenantReuse.
     */
    autoGeneratedDomainNameLabelScope?: pulumi.Input<string | types.enums.AutoGeneratedDomainNameLabelScope>;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    enabledState?: pulumi.Input<string | types.enums.EnabledState>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
