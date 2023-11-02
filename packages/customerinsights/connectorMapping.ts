import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The connector mapping resource format.
 * Azure REST API version: 2017-04-26. Prior API version in Azure Native 1.x: 2017-04-26.
 */
export class ConnectorMapping extends pulumi.CustomResource {
    /**
     * Get an existing ConnectorMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectorMapping {
        return new ConnectorMapping(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:ConnectorMapping';

    /**
     * Returns true if the given object is an instance of ConnectorMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectorMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectorMapping.__pulumiType;
    }

    /**
     * The connector mapping name
     */
    public /*out*/ readonly connectorMappingName!: pulumi.Output<string>;
    /**
     * The connector name.
     */
    public readonly connectorName!: pulumi.Output<string>;
    /**
     * Type of connector.
     */
    public readonly connectorType!: pulumi.Output<string | undefined>;
    /**
     * The created time.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The DataFormat ID.
     */
    public /*out*/ readonly dataFormatId!: pulumi.Output<string>;
    /**
     * The description of the connector mapping.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for the connector mapping.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Defines which entity type the file should map to.
     */
    public readonly entityType!: pulumi.Output<string>;
    /**
     * The mapping entity name.
     */
    public readonly entityTypeName!: pulumi.Output<string>;
    /**
     * The last modified time.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The properties of the mapping.
     */
    public readonly mappingProperties!: pulumi.Output<types.outputs.ConnectorMappingPropertiesResponse>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The next run time based on customer's settings.
     */
    public /*out*/ readonly nextRunTime!: pulumi.Output<string>;
    /**
     * The RunId.
     */
    public /*out*/ readonly runId!: pulumi.Output<string>;
    /**
     * State of connector mapping.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The hub name.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectorMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorMappingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectorName'");
            }
            if ((!args || args.entityType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entityType'");
            }
            if ((!args || args.entityTypeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entityTypeName'");
            }
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.mappingProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mappingProperties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectorName"] = args ? args.connectorName : undefined;
            resourceInputs["connectorType"] = args ? args.connectorType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["entityType"] = args ? args.entityType : undefined;
            resourceInputs["entityTypeName"] = args ? args.entityTypeName : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["mappingName"] = args ? args.mappingName : undefined;
            resourceInputs["mappingProperties"] = args ? args.mappingProperties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["connectorMappingName"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["dataFormatId"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextRunTime"] = undefined /*out*/;
            resourceInputs["runId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["connectorMappingName"] = undefined /*out*/;
            resourceInputs["connectorName"] = undefined /*out*/;
            resourceInputs["connectorType"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["dataFormatId"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["entityType"] = undefined /*out*/;
            resourceInputs["entityTypeName"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["mappingProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextRunTime"] = undefined /*out*/;
            resourceInputs["runId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:ConnectorMapping" }, { type: "azure-native:customerinsights/v20170426:ConnectorMapping" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectorMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectorMapping resource.
 */
export interface ConnectorMappingArgs {
    /**
     * The name of the connector.
     */
    connectorName: pulumi.Input<string>;
    /**
     * Type of connector.
     */
    connectorType?: pulumi.Input<string | types.enums.ConnectorTypes>;
    /**
     * The description of the connector mapping.
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for the connector mapping.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Defines which entity type the file should map to.
     */
    entityType: pulumi.Input<types.enums.EntityTypes>;
    /**
     * The mapping entity name.
     */
    entityTypeName: pulumi.Input<string>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the connector mapping.
     */
    mappingName?: pulumi.Input<string>;
    /**
     * The properties of the mapping.
     */
    mappingProperties: pulumi.Input<types.inputs.ConnectorMappingPropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
