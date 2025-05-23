import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A profile object that contains change analysis configuration, such as notification settings, for this subscription
 *
 * Uses Azure REST API version 2020-04-01-preview. In version 2.x of the Azure Native provider, it used API version 2020-04-01-preview.
 */
export class ConfigurationProfile extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConfigurationProfile {
        return new ConfigurationProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:changeanalysis:ConfigurationProfile';

    /**
     * Returns true if the given object is an instance of ConfigurationProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigurationProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigurationProfile.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The identity block returned by ARM resource that supports managed identity.
     */
    public readonly identity!: pulumi.Output<types.outputs.ResourceIdentityResponse | undefined>;
    /**
     * The location where the resource is to be deployed.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of a configuration profile.
     */
    public readonly properties!: pulumi.Output<types.outputs.ConfigurationProfileResourcePropertiesResponse>;
    /**
     * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConfigurationProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ConfigurationProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:changeanalysis/v20200401preview:ConfigurationProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConfigurationProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConfigurationProfile resource.
 */
export interface ConfigurationProfileArgs {
    /**
     * The identity block returned by ARM resource that supports managed identity.
     */
    identity?: pulumi.Input<types.inputs.ResourceIdentityArgs>;
    /**
     * The location where the resource is to be deployed.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the configuration profile. The profile name should be set to 'default', all other names will be overwritten.
     */
    profileName?: pulumi.Input<string>;
    /**
     * The properties of a configuration profile.
     */
    properties?: pulumi.Input<types.inputs.ConfigurationProfileResourcePropertiesArgs>;
}