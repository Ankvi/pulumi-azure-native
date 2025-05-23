import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a Kusto kusto pool.
 *
 * Uses Azure REST API version 2021-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-06-01-preview.
 *
 * Other available API versions: 2021-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class KustoPool extends pulumi.CustomResource {
    /**
     * Get an existing KustoPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KustoPool {
        return new KustoPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:KustoPool';

    /**
     * Returns true if the given object is an instance of KustoPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KustoPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KustoPool.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The Kusto Pool data ingestion URI.
     */
    public /*out*/ readonly dataIngestionUri!: pulumi.Output<string>;
    /**
     * A boolean value that indicates if the purge operations are enabled.
     */
    public readonly enablePurge!: pulumi.Output<boolean | undefined>;
    /**
     * A boolean value that indicates if the streaming ingest is enabled.
     */
    public readonly enableStreamingIngest!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * List of the Kusto Pool's language extensions.
     */
    public /*out*/ readonly languageExtensions!: pulumi.Output<types.outputs.LanguageExtensionsListResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Optimized auto scale definition.
     */
    public readonly optimizedAutoscale!: pulumi.Output<types.outputs.OptimizedAutoscaleResponse | undefined>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU of the kusto pool.
     */
    public readonly sku!: pulumi.Output<types.outputs.AzureSkuResponse>;
    /**
     * The state of the resource.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The reason for the Kusto Pool's current state.
     */
    public /*out*/ readonly stateReason!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The Kusto Pool URI.
     */
    public /*out*/ readonly uri!: pulumi.Output<string>;
    /**
     * The workspace unique identifier.
     */
    public readonly workspaceUID!: pulumi.Output<string | undefined>;

    /**
     * Create a KustoPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KustoPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["enablePurge"] = (args ? args.enablePurge : undefined) ?? false;
            resourceInputs["enableStreamingIngest"] = (args ? args.enableStreamingIngest : undefined) ?? false;
            resourceInputs["kustoPoolName"] = args ? args.kustoPoolName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["optimizedAutoscale"] = args ? args.optimizedAutoscale : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["workspaceUID"] = args ? args.workspaceUID : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataIngestionUri"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["languageExtensions"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataIngestionUri"] = undefined /*out*/;
            resourceInputs["enablePurge"] = undefined /*out*/;
            resourceInputs["enableStreamingIngest"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["languageExtensions"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["optimizedAutoscale"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
            resourceInputs["workspaceUID"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20210401preview:KustoPool" }, { type: "azure-native:synapse/v20210601preview:KustoPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KustoPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KustoPool resource.
 */
export interface KustoPoolArgs {
    /**
     * A boolean value that indicates if the purge operations are enabled.
     */
    enablePurge?: pulumi.Input<boolean>;
    /**
     * A boolean value that indicates if the streaming ingest is enabled.
     */
    enableStreamingIngest?: pulumi.Input<boolean>;
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Optimized auto scale definition.
     */
    optimizedAutoscale?: pulumi.Input<types.inputs.OptimizedAutoscaleArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the kusto pool.
     */
    sku: pulumi.Input<types.inputs.AzureSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
    /**
     * The workspace unique identifier.
     */
    workspaceUID?: pulumi.Input<string>;
}