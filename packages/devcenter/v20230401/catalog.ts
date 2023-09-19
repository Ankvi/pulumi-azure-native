import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a catalog.
 */
export class Catalog extends pulumi.CustomResource {
    /**
     * Get an existing Catalog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Catalog {
        return new Catalog(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter/v20230401:Catalog';

    /**
     * Returns true if the given object is an instance of Catalog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Catalog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Catalog.__pulumiType;
    }

    /**
     * Properties for an Azure DevOps catalog type.
     */
    public readonly adoGit!: pulumi.Output<types.outputs.GitCatalogResponse | undefined>;
    /**
     * Properties for a GitHub catalog type.
     */
    public readonly gitHub!: pulumi.Output<types.outputs.GitCatalogResponse | undefined>;
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Catalog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CatalogArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.devCenterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devCenterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["adoGit"] = args ? args.adoGit : undefined;
            resourceInputs["catalogName"] = args ? args.catalogName : undefined;
            resourceInputs["devCenterName"] = args ? args.devCenterName : undefined;
            resourceInputs["gitHub"] = args ? args.gitHub : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["lastSyncTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["syncState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["adoGit"] = undefined /*out*/;
            resourceInputs["gitHub"] = undefined /*out*/;
            resourceInputs["lastSyncTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["syncState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter:Catalog" }, { type: "azure-native:devcenter/v20220801preview:Catalog" }, { type: "azure-native:devcenter/v20220901preview:Catalog" }, { type: "azure-native:devcenter/v20221012preview:Catalog" }, { type: "azure-native:devcenter/v20221111preview:Catalog" }, { type: "azure-native:devcenter/v20230101preview:Catalog" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Catalog.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Catalog resource.
 */
export interface CatalogArgs {
    /**
     * Properties for an Azure DevOps catalog type.
     */
    adoGit?: pulumi.Input<types.inputs.GitCatalogArgs>;
    /**
     * The name of the Catalog.
     */
    catalogName?: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * Properties for a GitHub catalog type.
     */
    gitHub?: pulumi.Input<types.inputs.GitCatalogArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
