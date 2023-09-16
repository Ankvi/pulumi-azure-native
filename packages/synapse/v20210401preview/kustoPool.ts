import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Class representing a Kusto kusto pool.
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
    public static readonly __pulumiType = 'azure-native:synapse/v20210401preview:KustoPool';

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
     * The Kusto Pool data ingestion URI.
     */
    public /*out*/ readonly dataIngestionUri!: pulumi.Output<string>;
    /**
     * The engine type
     */
    public readonly engineType!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU of the kusto pool.
     */
    public readonly sku!: pulumi.Output<types.outputs.synapse.v20210401preview.AzureSkuResponse>;
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
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.synapse.v20210401preview.SystemDataResponse>;
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
    public readonly workspaceUid!: pulumi.Output<string | undefined>;

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
            resourceInputs["engineType"] = args ? args.engineType : undefined;
            resourceInputs["kustoPoolName"] = args ? args.kustoPoolName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["workspaceUid"] = args ? args.workspaceUid : undefined;
            resourceInputs["dataIngestionUri"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        } else {
            resourceInputs["dataIngestionUri"] = undefined /*out*/;
            resourceInputs["engineType"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
            resourceInputs["workspaceUid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20210401preview:kustoPool" }, { type: "azure-native:synapse:KustoPool" }, { type: "azure-native:synapse:kustoPool" }, { type: "azure-native:synapse/v20210601preview:KustoPool" }, { type: "azure-native:synapse/v20210601preview:kustoPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KustoPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KustoPool resource.
 */
export interface KustoPoolArgs {
    /**
     * The engine type
     */
    engineType?: pulumi.Input<string | types.enums.v20210401preview.EngineType>;
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the kusto pool.
     */
    sku: pulumi.Input<types.inputs.synapse.v20210401preview.AzureSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the workspace
     */
    workspaceName: pulumi.Input<string>;
    /**
     * The workspace unique identifier.
     */
    workspaceUid?: pulumi.Input<string>;
}
