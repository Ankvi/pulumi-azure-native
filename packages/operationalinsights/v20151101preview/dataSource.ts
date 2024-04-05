import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Datasources under OMS Workspace.
 */
export class DataSource extends pulumi.CustomResource {
    /**
     * Get an existing DataSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataSource {
        return new DataSource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights/v20151101preview:DataSource';

    /**
     * Returns true if the given object is an instance of DataSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataSource.__pulumiType;
    }

    /**
     * The ETag of the data source.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the DataSource.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The data source properties in raw json format, each kind of data source have it's own schema.
     */
    public readonly properties!: pulumi.Output<any>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataSourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["dataSourceName"] = args ? args.dataSourceName : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights:DataSource" }, { type: "azure-native:operationalinsights/v20200301preview:DataSource" }, { type: "azure-native:operationalinsights/v20200801:DataSource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataSource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataSource resource.
 */
export interface DataSourceArgs {
    /**
     * The name of the datasource resource.
     */
    dataSourceName?: pulumi.Input<string>;
    /**
     * The ETag of the data source.
     */
    eTag?: pulumi.Input<string>;
    /**
     * The kind of the DataSource.
     */
    kind: pulumi.Input<string | types.enums.DataSourceKind>;
    /**
     * The data source properties in raw json format, each kind of data source have it's own schema.
     */
    properties: any;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the Log Analytics Workspace that will contain the datasource
     */
    workspaceName: pulumi.Input<string>;
}