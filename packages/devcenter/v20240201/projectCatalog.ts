import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a catalog.
 */
export class ProjectCatalog extends pulumi.CustomResource {
    /**
     * Get an existing ProjectCatalog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProjectCatalog {
        return new ProjectCatalog(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter/v20240201:ProjectCatalog';

    /**
     * Returns true if the given object is an instance of ProjectCatalog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProjectCatalog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProjectCatalog.__pulumiType;
    }

    /**
     * Properties for an Azure DevOps catalog type.
     */
    public readonly adoGit!: pulumi.Output<types.outputs.GitCatalogResponse | undefined>;
    /**
     * The connection state of the catalog.
     */
    public /*out*/ readonly connectionState!: pulumi.Output<string>;
    /**
     * Properties for a GitHub catalog type.
     */
    public readonly gitHub!: pulumi.Output<types.outputs.GitCatalogResponse | undefined>;
    /**
     * When the catalog was last connected.
     */
    public /*out*/ readonly lastConnectionTime!: pulumi.Output<string>;
    /**
     * Stats of the latest synchronization.
     */
    public /*out*/ readonly lastSyncStats!: pulumi.Output<types.outputs.SyncStatsResponse>;
    /**
     * When the catalog was last synced.
     */
    public /*out*/ readonly lastSyncTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The synchronization state of the catalog.
     */
    public /*out*/ readonly syncState!: pulumi.Output<string>;
    /**
     * Indicates the type of sync that is configured for the catalog.
     */
    public readonly syncType!: pulumi.Output<string | undefined>;
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
     * Create a ProjectCatalog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectCatalogArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["adoGit"] = args ? args.adoGit : undefined;
            resourceInputs["catalogName"] = args ? args.catalogName : undefined;
            resourceInputs["gitHub"] = args ? args.gitHub : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["syncType"] = args ? args.syncType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["connectionState"] = undefined /*out*/;
            resourceInputs["lastConnectionTime"] = undefined /*out*/;
            resourceInputs["lastSyncStats"] = undefined /*out*/;
            resourceInputs["lastSyncTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["syncState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["adoGit"] = undefined /*out*/;
            resourceInputs["connectionState"] = undefined /*out*/;
            resourceInputs["gitHub"] = undefined /*out*/;
            resourceInputs["lastConnectionTime"] = undefined /*out*/;
            resourceInputs["lastSyncStats"] = undefined /*out*/;
            resourceInputs["lastSyncTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["syncState"] = undefined /*out*/;
            resourceInputs["syncType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter:ProjectCatalog" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProjectCatalog.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProjectCatalog resource.
 */
export interface ProjectCatalogArgs {
    /**
     * Properties for an Azure DevOps catalog type.
     */
    adoGit?: pulumi.Input<types.inputs.GitCatalogArgs>;
    /**
     * The name of the Catalog.
     */
    catalogName?: pulumi.Input<string>;
    /**
     * Properties for a GitHub catalog type.
     */
    gitHub?: pulumi.Input<types.inputs.GitCatalogArgs>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Indicates the type of sync that is configured for the catalog.
     */
    syncType?: pulumi.Input<string | types.enums.CatalogSyncType>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}