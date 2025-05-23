import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a machine learning workspace.
 *
 * Uses Azure REST API version 2019-10-01. In version 2.x of the Azure Native provider, it used API version 2019-10-01.
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
    public static readonly __pulumiType = 'azure-native:machinelearning:Workspace';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The creation time for this workspace resource.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The key vault identifier used for encrypted workspaces.
     */
    public readonly keyVaultIdentifierId!: pulumi.Output<string | undefined>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The email id of the owner for this workspace.
     */
    public readonly ownerEmail!: pulumi.Output<string>;
    /**
     * The sku of the workspace.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The regional endpoint for the machine learning studio service which hosts this workspace.
     */
    public /*out*/ readonly studioEndpoint!: pulumi.Output<string>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The fully qualified arm id of the storage account associated with this workspace.
     */
    public readonly userStorageAccountId!: pulumi.Output<string>;
    /**
     * The immutable id associated with this workspace.
     */
    public /*out*/ readonly workspaceId!: pulumi.Output<string>;
    /**
     * The current state of workspace resource.
     */
    public /*out*/ readonly workspaceState!: pulumi.Output<string>;
    /**
     * The type of this workspace.
     */
    public /*out*/ readonly workspaceType!: pulumi.Output<string>;

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
            if ((!args || args.ownerEmail === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ownerEmail'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.userStorageAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userStorageAccountId'");
            }
            resourceInputs["keyVaultIdentifierId"] = args ? args.keyVaultIdentifierId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["ownerEmail"] = args ? args.ownerEmail : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userStorageAccountId"] = args ? args.userStorageAccountId : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["studioEndpoint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
            resourceInputs["workspaceState"] = undefined /*out*/;
            resourceInputs["workspaceType"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["keyVaultIdentifierId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["ownerEmail"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["studioEndpoint"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userStorageAccountId"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
            resourceInputs["workspaceState"] = undefined /*out*/;
            resourceInputs["workspaceType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearning/v20160401:Workspace" }, { type: "azure-native:machinelearning/v20191001:Workspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Workspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The key vault identifier used for encrypted workspaces.
     */
    keyVaultIdentifierId?: pulumi.Input<string>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    location?: pulumi.Input<string>;
    /**
     * The email id of the owner for this workspace.
     */
    ownerEmail: pulumi.Input<string>;
    /**
     * The name of the resource group to which the machine learning workspace belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the workspace.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The fully qualified arm id of the storage account associated with this workspace.
     */
    userStorageAccountId: pulumi.Input<string>;
    /**
     * The name of the machine learning workspace.
     */
    workspaceName?: pulumi.Input<string>;
}