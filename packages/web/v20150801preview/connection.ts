import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * API Connection
 */
export class Connection extends pulumi.CustomResource {
    /**
     * Get an existing Connection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Connection {
        return new Connection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20150801preview:Connection';

    /**
     * Returns true if the given object is an instance of Connection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Connection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Connection.__pulumiType;
    }

    /**
     * expanded connection provider name
     */
    public readonly api!: pulumi.Output<types.outputs.web.v20150801preview.ExpandedParentApiEntityResponse | undefined>;
    /**
     * Timestamp of last connection change.
     */
    public readonly changedTime!: pulumi.Output<string | undefined>;
    /**
     * Timestamp of the connection creation
     */
    public readonly createdTime!: pulumi.Output<string | undefined>;
    /**
     * Custom login setting values.
     */
    public readonly customParameterValues!: pulumi.Output<{[key: string]: types.outputs.web.v20150801preview.ParameterCustomLoginSettingValuesResponse} | undefined>;
    /**
     * display name
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Time in UTC when the first expiration of OAuth tokens
     */
    public readonly firstExpirationTime!: pulumi.Output<string | undefined>;
    /**
     * List of Keywords that tag the acl
     */
    public readonly keywords!: pulumi.Output<string[] | undefined>;
    /**
     * Kind of resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    public readonly location!: pulumi.Output<string>;
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * Resource Name
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Tokens/Claim
     */
    public readonly nonSecretParameterValues!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Tokens/Claim
     */
    public readonly parameterValues!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Status of the connection
     */
    public readonly statuses!: pulumi.Output<types.outputs.web.v20150801preview.ConnectionStatusResponse[] | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a Connection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["api"] = args ? args.api : undefined;
            resourceInputs["changedTime"] = args ? args.changedTime : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["createdTime"] = args ? args.createdTime : undefined;
            resourceInputs["customParameterValues"] = args ? args.customParameterValues : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["firstExpirationTime"] = args ? args.firstExpirationTime : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["keywords"] = args ? args.keywords : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nonSecretParameterValues"] = args ? args.nonSecretParameterValues : undefined;
            resourceInputs["parameterValues"] = args ? args.parameterValues : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["statuses"] = args ? args.statuses : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        } else {
            resourceInputs["api"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["customParameterValues"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["firstExpirationTime"] = undefined /*out*/;
            resourceInputs["keywords"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nonSecretParameterValues"] = undefined /*out*/;
            resourceInputs["parameterValues"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:Connection" }, { type: "azure-native:web/v20160601:Connection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Connection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Connection resource.
 */
export interface ConnectionArgs {
    /**
     * expanded connection provider name
     */
    api?: pulumi.Input<types.inputs.web.v20150801preview.ExpandedParentApiEntityArgs>;
    /**
     * Timestamp of last connection change.
     */
    changedTime?: pulumi.Input<string>;
    /**
     * The connection name.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Timestamp of the connection creation
     */
    createdTime?: pulumi.Input<string>;
    /**
     * Custom login setting values.
     */
    customParameterValues?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.web.v20150801preview.ParameterCustomLoginSettingValuesArgs>}>;
    /**
     * display name
     */
    displayName?: pulumi.Input<string>;
    /**
     * Time in UTC when the first expiration of OAuth tokens
     */
    firstExpirationTime?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
    /**
     * List of Keywords that tag the acl
     */
    keywords?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kind of resource
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    location?: pulumi.Input<string>;
    metadata?: any;
    /**
     * Resource Name
     */
    name?: pulumi.Input<string>;
    /**
     * Tokens/Claim
     */
    nonSecretParameterValues?: pulumi.Input<{[key: string]: any}>;
    /**
     * Tokens/Claim
     */
    parameterValues?: pulumi.Input<{[key: string]: any}>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Status of the connection
     */
    statuses?: pulumi.Input<pulumi.Input<types.inputs.web.v20150801preview.ConnectionStatusArgs>[]>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tenantId?: pulumi.Input<string>;
    /**
     * Resource type
     */
    type?: pulumi.Input<string>;
}
