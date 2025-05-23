import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the connection type.
 *
 * Uses Azure REST API version 2023-11-01. In version 2.x of the Azure Native provider, it used API version 2022-08-08.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ConnectionType extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectionType {
        return new ConnectionType(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:ConnectionType';

    /**
     * Returns true if the given object is an instance of ConnectionType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectionType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectionType.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * Gets or sets the description.
     */
    public /*out*/ readonly description!: pulumi.Output<string | undefined>;
    /**
     * Gets the field definitions of the connection type.
     */
    public readonly fieldDefinitions!: pulumi.Output<{[key: string]: types.outputs.FieldDefinitionResponse}>;
    /**
     * Gets or sets a Boolean value to indicate if the connection type is global.
     */
    public readonly isGlobal!: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string | undefined>;
    /**
     * Gets the name of the connection type.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectionType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionTypeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.fieldDefinitions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fieldDefinitions'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["connectionTypeName"] = args ? args.connectionTypeName : undefined;
            resourceInputs["fieldDefinitions"] = args ? args.fieldDefinitions : undefined;
            resourceInputs["isGlobal"] = args ? args.isGlobal : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["fieldDefinitions"] = undefined /*out*/;
            resourceInputs["isGlobal"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20151031:ConnectionType" }, { type: "azure-native:automation/v20190601:ConnectionType" }, { type: "azure-native:automation/v20200113preview:ConnectionType" }, { type: "azure-native:automation/v20220808:ConnectionType" }, { type: "azure-native:automation/v20230515preview:ConnectionType" }, { type: "azure-native:automation/v20231101:ConnectionType" }, { type: "azure-native:automation/v20241023:ConnectionType" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectionType.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectionType resource.
 */
export interface ConnectionTypeArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The parameters supplied to the create or update connection type operation.
     */
    connectionTypeName?: pulumi.Input<string>;
    /**
     * Gets or sets the field definitions of the connection type.
     */
    fieldDefinitions: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.FieldDefinitionArgs>}>;
    /**
     * Gets or sets a Boolean value to indicate if the connection type is global.
     */
    isGlobal?: pulumi.Input<boolean>;
    /**
     * Gets or sets the name of the connection type.
     */
    name: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}