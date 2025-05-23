import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The connector resource format.
 *
 * Uses Azure REST API version 2017-04-26. In version 2.x of the Azure Native provider, it used API version 2017-04-26.
 */
export class Connector extends pulumi.CustomResource {
    /**
     * Get an existing Connector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Connector {
        return new Connector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:Connector';

    /**
     * Returns true if the given object is an instance of Connector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Connector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Connector.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * ID of the connector.
     */
    public /*out*/ readonly connectorId!: pulumi.Output<number>;
    /**
     * Name of the connector.
     */
    public readonly connectorName!: pulumi.Output<string | undefined>;
    /**
     * The connector properties.
     */
    public readonly connectorProperties!: pulumi.Output<{[key: string]: any}>;
    /**
     * Type of connector.
     */
    public readonly connectorType!: pulumi.Output<string>;
    /**
     * The created time.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Description of the connector.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name of the connector.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * If this is an internal connector.
     */
    public readonly isInternal!: pulumi.Output<boolean | undefined>;
    /**
     * The last modified time.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of connector.
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
     * Create a Connector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectorProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectorProperties'");
            }
            if ((!args || args.connectorType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectorType'");
            }
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectorName"] = args ? args.connectorName : undefined;
            resourceInputs["connectorProperties"] = args ? args.connectorProperties : undefined;
            resourceInputs["connectorType"] = args ? args.connectorType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["isInternal"] = args ? args.isInternal : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectorId"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectorId"] = undefined /*out*/;
            resourceInputs["connectorName"] = undefined /*out*/;
            resourceInputs["connectorProperties"] = undefined /*out*/;
            resourceInputs["connectorType"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["isInternal"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:Connector" }, { type: "azure-native:customerinsights/v20170426:Connector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Connector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Connector resource.
 */
export interface ConnectorArgs {
    /**
     * Name of the connector.
     */
    connectorName?: pulumi.Input<string>;
    /**
     * The connector properties.
     */
    connectorProperties: pulumi.Input<{[key: string]: any}>;
    /**
     * Type of connector.
     */
    connectorType: pulumi.Input<string | types.enums.ConnectorTypes>;
    /**
     * Description of the connector.
     */
    description?: pulumi.Input<string>;
    /**
     * Display name of the connector.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * If this is an internal connector.
     */
    isInternal?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}