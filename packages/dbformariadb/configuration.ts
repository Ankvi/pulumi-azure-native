import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Represents a Configuration.
 *
 * Uses Azure REST API version 2018-06-01. In version 2.x of the Azure Native provider, it used API version 2018-06-01.
 */
export class Configuration extends pulumi.CustomResource {
    /**
     * Get an existing Configuration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Configuration {
        return new Configuration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbformariadb:Configuration';

    /**
     * Returns true if the given object is an instance of Configuration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Configuration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Configuration.__pulumiType;
    }

    /**
     * Allowed values of the configuration.
     */
    public /*out*/ readonly allowedValues!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Data type of the configuration.
     */
    public /*out*/ readonly dataType!: pulumi.Output<string>;
    /**
     * Default value of the configuration.
     */
    public /*out*/ readonly defaultValue!: pulumi.Output<string>;
    /**
     * Description of the configuration.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Source of the configuration.
     */
    public readonly source!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Value of the configuration.
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a Configuration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["allowedValues"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataType"] = undefined /*out*/;
            resourceInputs["defaultValue"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowedValues"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataType"] = undefined /*out*/;
            resourceInputs["defaultValue"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbformariadb/v20180601:Configuration" }, { type: "azure-native:dbformariadb/v20180601preview:Configuration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Configuration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Configuration resource.
 */
export interface ConfigurationArgs {
    /**
     * The name of the server configuration.
     */
    configurationName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * Source of the configuration.
     */
    source?: pulumi.Input<string>;
    /**
     * Value of the configuration.
     */
    value?: pulumi.Input<string>;
}