import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Tag-API link details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WorkspaceTagApiLink extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceTagApiLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceTagApiLink {
        return new WorkspaceTagApiLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:WorkspaceTagApiLink';

    /**
     * Returns true if the given object is an instance of WorkspaceTagApiLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceTagApiLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceTagApiLink.__pulumiType;
    }

    /**
     * Full resource Id of an API.
     */
    public readonly apiId!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkspaceTagApiLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceTagApiLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.tagId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tagId'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["apiLinkId"] = args ? args.apiLinkId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tagId"] = args ? args.tagId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220901preview:WorkspaceTagApiLink" }, { type: "azure-native:apimanagement/v20230301preview:WorkspaceTagApiLink" }, { type: "azure-native:apimanagement/v20230501preview:WorkspaceTagApiLink" }, { type: "azure-native:apimanagement/v20230901preview:WorkspaceTagApiLink" }, { type: "azure-native:apimanagement/v20240501:WorkspaceTagApiLink" }, { type: "azure-native:apimanagement/v20240601preview:WorkspaceTagApiLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceTagApiLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceTagApiLink resource.
 */
export interface WorkspaceTagApiLinkArgs {
    /**
     * Full resource Id of an API.
     */
    apiId: pulumi.Input<string>;
    /**
     * Tag-API link identifier. Must be unique in the current API Management service instance.
     */
    apiLinkId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    tagId: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}