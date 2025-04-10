import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A notebook workspace resource
 *
 * Uses Azure REST API version 2023-04-15. In version 1.x of the Azure Native provider, it used API version 2021-03-15.
 *
 * Other available API versions: 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export class NotebookWorkspace extends pulumi.CustomResource {
    /**
     * Get an existing NotebookWorkspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotebookWorkspace {
        return new NotebookWorkspace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb:NotebookWorkspace';

    /**
     * Returns true if the given object is an instance of NotebookWorkspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotebookWorkspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotebookWorkspace.__pulumiType;
    }

    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the endpoint of Notebook server.
     */
    public /*out*/ readonly notebookServerEndpoint!: pulumi.Output<string>;
    /**
     * Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NotebookWorkspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotebookWorkspaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["notebookWorkspaceName"] = args ? args.notebookWorkspaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notebookServerEndpoint"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notebookServerEndpoint"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb/v20190801:NotebookWorkspace" }, { type: "azure-native:documentdb/v20191212:NotebookWorkspace" }, { type: "azure-native:documentdb/v20200301:NotebookWorkspace" }, { type: "azure-native:documentdb/v20200401:NotebookWorkspace" }, { type: "azure-native:documentdb/v20200601preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20200901:NotebookWorkspace" }, { type: "azure-native:documentdb/v20210115:NotebookWorkspace" }, { type: "azure-native:documentdb/v20210301preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20210315:NotebookWorkspace" }, { type: "azure-native:documentdb/v20210401preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20210415:NotebookWorkspace" }, { type: "azure-native:documentdb/v20210515:NotebookWorkspace" }, { type: "azure-native:documentdb/v20210615:NotebookWorkspace" }, { type: "azure-native:documentdb/v20210701preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20211015:NotebookWorkspace" }, { type: "azure-native:documentdb/v20211015preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20211115preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20220215preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20220515:NotebookWorkspace" }, { type: "azure-native:documentdb/v20220515preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20220815:NotebookWorkspace" }, { type: "azure-native:documentdb/v20220815preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20221115:NotebookWorkspace" }, { type: "azure-native:documentdb/v20221115preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20230301preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20230315:NotebookWorkspace" }, { type: "azure-native:documentdb/v20230315preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20230415:NotebookWorkspace" }, { type: "azure-native:documentdb/v20230915:NotebookWorkspace" }, { type: "azure-native:documentdb/v20230915preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20231115:NotebookWorkspace" }, { type: "azure-native:documentdb/v20231115preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20240215preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20240515:NotebookWorkspace" }, { type: "azure-native:documentdb/v20240515preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20240815:NotebookWorkspace" }, { type: "azure-native:documentdb/v20240901preview:NotebookWorkspace" }, { type: "azure-native:documentdb/v20241115:NotebookWorkspace" }, { type: "azure-native:documentdb/v20241201preview:NotebookWorkspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NotebookWorkspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NotebookWorkspace resource.
 */
export interface NotebookWorkspaceArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the notebook workspace resource.
     */
    notebookWorkspaceName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}