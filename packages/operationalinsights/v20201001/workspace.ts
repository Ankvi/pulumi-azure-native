import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The top level Workspace resource container.
 */
export class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workspace {
        return new Workspace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights/v20201001:Workspace';

    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workspace.__pulumiType;
    }

    /**
     * Workspace creation date.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * This is a read-only property. Represents the ID associated with the workspace.
     */
    public /*out*/ readonly customerId!: pulumi.Output<string>;
    /**
     * The ETag of the workspace.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Workspace features.
     */
    public readonly features!: pulumi.Output<types.outputs.WorkspaceFeaturesResponse | undefined>;
    /**
     * Indicates whether customer managed storage is mandatory for query management.
     */
    public readonly forceCmkForQuery!: pulumi.Output<boolean | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Workspace modification date.
     */
    public /*out*/ readonly modifiedDate!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of linked private link scope resources.
     */
    public /*out*/ readonly privateLinkScopedResources!: pulumi.Output<types.outputs.PrivateLinkScopedResourceResponse[]>;
    /**
     * The provisioning state of the workspace.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The network access type for accessing Log Analytics ingestion.
     */
    public readonly publicNetworkAccessForIngestion!: pulumi.Output<string | undefined>;
    /**
     * The network access type for accessing Log Analytics query.
     */
    public readonly publicNetworkAccessForQuery!: pulumi.Output<string | undefined>;
    /**
     * The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details.
     */
    public readonly retentionInDays!: pulumi.Output<number | undefined>;
    /**
     * The SKU of the workspace.
     */
    public readonly sku!: pulumi.Output<types.outputs.WorkspaceSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The daily volume cap for ingestion.
     */
    public readonly workspaceCapping!: pulumi.Output<types.outputs.WorkspaceCappingResponse | undefined>;

    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["features"] = args ? args.features : undefined;
            resourceInputs["forceCmkForQuery"] = args ? args.forceCmkForQuery : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["publicNetworkAccessForIngestion"] = args ? args.publicNetworkAccessForIngestion : undefined;
            resourceInputs["publicNetworkAccessForQuery"] = args ? args.publicNetworkAccessForQuery : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionInDays"] = args ? args.retentionInDays : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceCapping"] = args ? args.workspaceCapping : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["customerId"] = undefined /*out*/;
            resourceInputs["modifiedDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkScopedResources"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["customerId"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["features"] = undefined /*out*/;
            resourceInputs["forceCmkForQuery"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["modifiedDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkScopedResources"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccessForIngestion"] = undefined /*out*/;
            resourceInputs["publicNetworkAccessForQuery"] = undefined /*out*/;
            resourceInputs["retentionInDays"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceCapping"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights:Workspace" }, { type: "azure-native:operationalinsights/v20151101preview:Workspace" }, { type: "azure-native:operationalinsights/v20200301preview:Workspace" }, { type: "azure-native:operationalinsights/v20200801:Workspace" }, { type: "azure-native:operationalinsights/v20210601:Workspace" }, { type: "azure-native:operationalinsights/v20211201preview:Workspace" }, { type: "azure-native:operationalinsights/v20221001:Workspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Workspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The ETag of the workspace.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Workspace features.
     */
    features?: pulumi.Input<types.inputs.WorkspaceFeaturesArgs>;
    /**
     * Indicates whether customer managed storage is mandatory for query management.
     */
    forceCmkForQuery?: pulumi.Input<boolean>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The provisioning state of the workspace.
     */
    provisioningState?: pulumi.Input<string | types.enums.WorkspaceEntityStatus>;
    /**
     * The network access type for accessing Log Analytics ingestion.
     */
    publicNetworkAccessForIngestion?: pulumi.Input<string | types.enums.PublicNetworkAccessType>;
    /**
     * The network access type for accessing Log Analytics query.
     */
    publicNetworkAccessForQuery?: pulumi.Input<string | types.enums.PublicNetworkAccessType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details.
     */
    retentionInDays?: pulumi.Input<number>;
    /**
     * The SKU of the workspace.
     */
    sku?: pulumi.Input<types.inputs.WorkspaceSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The daily volume cap for ingestion.
     */
    workspaceCapping?: pulumi.Input<types.inputs.WorkspaceCappingArgs>;
    /**
     * The name of the workspace.
     */
    workspaceName?: pulumi.Input<string>;
}
