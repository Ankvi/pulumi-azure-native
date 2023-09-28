import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a container registry.
 */
export class Registry extends pulumi.CustomResource {
    /**
     * Get an existing Registry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Registry {
        return new Registry(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230701:Registry';

    /**
     * Returns true if the given object is an instance of Registry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Registry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Registry.__pulumiType;
    }

    /**
     * The value that indicates whether the admin user is enabled.
     */
    public readonly adminUserEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The creation date of the container registry in ISO8601 format.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Enable a single data endpoint per region for serving data.
     */
    public readonly dataEndpointEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * List of host names that will serve data when dataEndpointEnabled is true.
     */
    public /*out*/ readonly dataEndpointHostNames!: pulumi.Output<string[]>;
    /**
     * The encryption settings of container registry.
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionPropertyResponse | undefined>;
    /**
     * The identity of the container registry.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityPropertiesResponse | undefined>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The URL that can be used to log into the container registry.
     */
    public /*out*/ readonly loginServer!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Whether to allow trusted Azure services to access a network restricted registry.
     */
    public readonly networkRuleBypassOptions!: pulumi.Output<string | undefined>;
    /**
     * The network rule set for a container registry.
     */
    public readonly networkRuleSet!: pulumi.Output<types.outputs.NetworkRuleSetResponse | undefined>;
    /**
     * The policies for a container registry.
     */
    public readonly policies!: pulumi.Output<types.outputs.PoliciesResponse | undefined>;
    /**
     * List of private endpoint connections for a container registry.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The provisioning state of the container registry at the time the operation was called.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Whether or not public network access is allowed for the container registry.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The SKU of the container registry.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * The status of the container registry at the time the operation was called.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.StatusResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Whether or not zone redundancy is enabled for this container registry
     */
    public readonly zoneRedundancy!: pulumi.Output<string | undefined>;

    /**
     * Create a Registry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["adminUserEnabled"] = (args ? args.adminUserEnabled : undefined) ?? false;
            resourceInputs["dataEndpointEnabled"] = args ? args.dataEndpointEnabled : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkRuleBypassOptions"] = (args ? args.networkRuleBypassOptions : undefined) ?? "AzureServices";
            resourceInputs["networkRuleSet"] = args ? (args.networkRuleSet ? pulumi.output(args.networkRuleSet).apply(types.inputs.networkRuleSetArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["policies"] = args ? (args.policies ? pulumi.output(args.policies).apply(types.inputs.policiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundancy"] = (args ? args.zoneRedundancy : undefined) ?? "Disabled";
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["dataEndpointHostNames"] = undefined /*out*/;
            resourceInputs["loginServer"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["adminUserEnabled"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["dataEndpointEnabled"] = undefined /*out*/;
            resourceInputs["dataEndpointHostNames"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["loginServer"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkRuleBypassOptions"] = undefined /*out*/;
            resourceInputs["networkRuleSet"] = undefined /*out*/;
            resourceInputs["policies"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zoneRedundancy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:Registry" }, { type: "azure-native:containerregistry/v20170301:Registry" }, { type: "azure-native:containerregistry/v20171001:Registry" }, { type: "azure-native:containerregistry/v20190501:Registry" }, { type: "azure-native:containerregistry/v20191201preview:Registry" }, { type: "azure-native:containerregistry/v20201101preview:Registry" }, { type: "azure-native:containerregistry/v20210601preview:Registry" }, { type: "azure-native:containerregistry/v20210801preview:Registry" }, { type: "azure-native:containerregistry/v20210901:Registry" }, { type: "azure-native:containerregistry/v20211201preview:Registry" }, { type: "azure-native:containerregistry/v20220201preview:Registry" }, { type: "azure-native:containerregistry/v20221201:Registry" }, { type: "azure-native:containerregistry/v20230101preview:Registry" }, { type: "azure-native:containerregistry/v20230601preview:Registry" }, { type: "azure-native:containerregistry/v20230801preview:Registry" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Registry.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Registry resource.
 */
export interface RegistryArgs {
    /**
     * The value that indicates whether the admin user is enabled.
     */
    adminUserEnabled?: pulumi.Input<boolean>;
    /**
     * Enable a single data endpoint per region for serving data.
     */
    dataEndpointEnabled?: pulumi.Input<boolean>;
    /**
     * The encryption settings of container registry.
     */
    encryption?: pulumi.Input<types.inputs.EncryptionPropertyArgs>;
    /**
     * The identity of the container registry.
     */
    identity?: pulumi.Input<types.inputs.IdentityPropertiesArgs>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    location?: pulumi.Input<string>;
    /**
     * Whether to allow trusted Azure services to access a network restricted registry.
     */
    networkRuleBypassOptions?: pulumi.Input<string | types.enums.NetworkRuleBypassOptions>;
    /**
     * The network rule set for a container registry.
     */
    networkRuleSet?: pulumi.Input<types.inputs.NetworkRuleSetArgs>;
    /**
     * The policies for a container registry.
     */
    policies?: pulumi.Input<types.inputs.PoliciesArgs>;
    /**
     * Whether or not public network access is allowed for the container registry.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the container registry.
     */
    registryName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the container registry.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether or not zone redundancy is enabled for this container registry
     */
    zoneRedundancy?: pulumi.Input<string | types.enums.ZoneRedundancy>;
}
