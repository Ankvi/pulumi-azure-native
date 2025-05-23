import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the dsc node configuration.
 *
 * Uses Azure REST API version 2023-11-01. In version 2.x of the Azure Native provider, it used API version 2022-08-08.
 *
 * Other available API versions: 2015-10-31, 2018-01-15, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DscNodeConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing DscNodeConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DscNodeConfiguration {
        return new DscNodeConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:DscNodeConfiguration';

    /**
     * Returns true if the given object is an instance of DscNodeConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DscNodeConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DscNodeConfiguration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the configuration of the node.
     */
    public readonly configuration!: pulumi.Output<types.outputs.DscConfigurationAssociationPropertyResponse | undefined>;
    /**
     * Gets or sets creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string | undefined>;
    /**
     * If a new build version of NodeConfiguration is required.
     */
    public readonly incrementNodeConfigurationBuild!: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Number of nodes with this node configuration assigned
     */
    public /*out*/ readonly nodeCount!: pulumi.Output<number | undefined>;
    /**
     * Source of node configuration.
     */
    public readonly source!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DscNodeConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DscNodeConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.configuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configuration'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["incrementNodeConfigurationBuild"] = args ? args.incrementNodeConfigurationBuild : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeConfigurationName"] = args ? args.nodeConfigurationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configuration"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["incrementNodeConfigurationBuild"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20151031:DscNodeConfiguration" }, { type: "azure-native:automation/v20180115:DscNodeConfiguration" }, { type: "azure-native:automation/v20190601:DscNodeConfiguration" }, { type: "azure-native:automation/v20200113preview:DscNodeConfiguration" }, { type: "azure-native:automation/v20220808:DscNodeConfiguration" }, { type: "azure-native:automation/v20230515preview:DscNodeConfiguration" }, { type: "azure-native:automation/v20231101:DscNodeConfiguration" }, { type: "azure-native:automation/v20241023:DscNodeConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DscNodeConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DscNodeConfiguration resource.
 */
export interface DscNodeConfigurationArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the configuration of the node.
     */
    configuration: pulumi.Input<types.inputs.DscConfigurationAssociationPropertyArgs>;
    /**
     * If a new build version of NodeConfiguration is required.
     */
    incrementNodeConfigurationBuild?: pulumi.Input<boolean>;
    /**
     * Name of the node configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * The Dsc node configuration name.
     */
    nodeConfigurationName?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the source.
     */
    source: pulumi.Input<types.inputs.ContentSourceArgs>;
    /**
     * Gets or sets the tags attached to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}