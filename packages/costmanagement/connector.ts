import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Connector model definition
 *
 * Uses Azure REST API version 2018-08-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-08-01-preview.
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
    public static readonly __pulumiType = 'azure-native:costmanagement:Connector';

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
     * Collection information
     */
    public /*out*/ readonly collection!: pulumi.Output<types.outputs.ConnectorCollectionInfoResponse>;
    /**
     * Connector definition creation datetime
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Credentials authentication key (eg AWS ARN)
     */
    public readonly credentialsKey!: pulumi.Output<string | undefined>;
    /**
     * Connector DisplayName (defaults to Name)
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Connector kind (eg aws)
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Connector location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Connector last modified datetime
     */
    public /*out*/ readonly modifiedOn!: pulumi.Output<string>;
    /**
     * Connector name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Connector providerAccountId (determined from credentials)
     */
    public /*out*/ readonly providerAccountId!: pulumi.Output<string>;
    /**
     * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
     */
    public readonly reportId!: pulumi.Output<string | undefined>;
    /**
     * Connector status
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Connector type
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectorName"] = args ? args.connectorName : undefined;
            resourceInputs["credentialsKey"] = args ? args.credentialsKey : undefined;
            resourceInputs["credentialsSecret"] = args ? args.credentialsSecret : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["reportId"] = args ? args.reportId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["collection"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerAccountId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["collection"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["credentialsKey"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerAccountId"] = undefined /*out*/;
            resourceInputs["reportId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement/v20180801preview:Connector" }, { type: "azure-native:costmanagement/v20190301preview:CloudConnector" }, { type: "azure-native:costmanagement/v20190301preview:Connector" }, { type: "azure-native:costmanagement:CloudConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Connector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Connector resource.
 */
export interface ConnectorArgs {
    /**
     * Connector Name.
     */
    connectorName?: pulumi.Input<string>;
    /**
     * Credentials authentication key (eg AWS ARN)
     */
    credentialsKey?: pulumi.Input<string>;
    /**
     * Credentials secret (eg AWS ExternalId)
     */
    credentialsSecret?: pulumi.Input<string>;
    /**
     * Connector DisplayName (defaults to Name)
     */
    displayName?: pulumi.Input<string>;
    /**
     * Connector kind (eg aws)
     */
    kind?: pulumi.Input<string>;
    /**
     * Connector location
     */
    location?: pulumi.Input<string>;
    /**
     * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
     */
    reportId?: pulumi.Input<string>;
    /**
     * Azure Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Connector status
     */
    status?: pulumi.Input<string | types.enums.ConnectorStatus>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}