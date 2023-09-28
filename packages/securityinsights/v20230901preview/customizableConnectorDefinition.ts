import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Connector definition for kind 'Customizable'.
 */
export class CustomizableConnectorDefinition extends pulumi.CustomResource {
    /**
     * Get an existing CustomizableConnectorDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomizableConnectorDefinition {
        return new CustomizableConnectorDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230901preview:CustomizableConnectorDefinition';

    /**
     * Returns true if the given object is an instance of CustomizableConnectorDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomizableConnectorDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomizableConnectorDefinition.__pulumiType;
    }

    /**
     * The UiConfig for 'Customizable' connector definition kind.
     */
    public readonly connectionsConfig!: pulumi.Output<types.outputs.CustomizableConnectionsConfigResponse | undefined>;
    /**
     * The UiConfig for 'Customizable' connector definition kind.
     */
    public readonly connectorUiConfig!: pulumi.Output<types.outputs.CustomizableConnectorUiConfigResponse>;
    /**
     * Gets or sets the connector definition created date in UTC format.
     */
    public readonly createdTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector definitions
     * Expected value is 'Customizable'.
     */
    public readonly kind!: pulumi.Output<"Customizable">;
    /**
     * Gets or sets the connector definition last modified date in UTC format.
     */
    public readonly lastModifiedUtc!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CustomizableConnectorDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomizableConnectorDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectorUiConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectorUiConfig'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["connectionsConfig"] = args ? args.connectionsConfig : undefined;
            resourceInputs["connectorUiConfig"] = args ? args.connectorUiConfig : undefined;
            resourceInputs["createdTimeUtc"] = args ? args.createdTimeUtc : undefined;
            resourceInputs["dataConnectorDefinitionName"] = args ? args.dataConnectorDefinitionName : undefined;
            resourceInputs["kind"] = "Customizable";
            resourceInputs["lastModifiedUtc"] = args ? args.lastModifiedUtc : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["connectionsConfig"] = undefined /*out*/;
            resourceInputs["connectorUiConfig"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastModifiedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:CustomizableConnectorDefinition" }, { type: "azure-native:securityinsights/v20230701preview:CustomizableConnectorDefinition" }, { type: "azure-native:securityinsights/v20230801preview:CustomizableConnectorDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomizableConnectorDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomizableConnectorDefinition resource.
 */
export interface CustomizableConnectorDefinitionArgs {
    /**
     * The UiConfig for 'Customizable' connector definition kind.
     */
    connectionsConfig?: pulumi.Input<types.inputs.CustomizableConnectionsConfigArgs>;
    /**
     * The UiConfig for 'Customizable' connector definition kind.
     */
    connectorUiConfig: pulumi.Input<types.inputs.CustomizableConnectorUiConfigArgs>;
    /**
     * Gets or sets the connector definition created date in UTC format.
     */
    createdTimeUtc?: pulumi.Input<string>;
    /**
     * The data connector definition name.
     */
    dataConnectorDefinitionName?: pulumi.Input<string>;
    /**
     * The kind of the data connector definitions
     * Expected value is 'Customizable'.
     */
    kind: pulumi.Input<"Customizable">;
    /**
     * Gets or sets the connector definition last modified date in UTC format.
     */
    lastModifiedUtc?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
