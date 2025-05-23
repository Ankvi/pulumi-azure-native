import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * API Operation details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WorkspaceApiOperation extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceApiOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceApiOperation {
        return new WorkspaceApiOperation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:WorkspaceApiOperation';

    /**
     * Returns true if the given object is an instance of WorkspaceApiOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceApiOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceApiOperation.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of the operation. May include HTML formatting tags.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Operation Name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    public readonly method!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Operation Policies
     */
    public readonly policies!: pulumi.Output<string | undefined>;
    /**
     * An entity containing request details.
     */
    public readonly request!: pulumi.Output<types.outputs.RequestContractResponse | undefined>;
    /**
     * Array of Operation responses.
     */
    public readonly responses!: pulumi.Output<types.outputs.ResponseContractResponse[] | undefined>;
    /**
     * Collection of URL template parameters.
     */
    public readonly templateParameters!: pulumi.Output<types.outputs.ParameterContractResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    public readonly urlTemplate!: pulumi.Output<string>;

    /**
     * Create a WorkspaceApiOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceApiOperationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.method === undefined) && !opts.urn) {
                throw new Error("Missing required property 'method'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.urlTemplate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'urlTemplate'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["method"] = args ? args.method : undefined;
            resourceInputs["operationId"] = args ? args.operationId : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["request"] = args ? args.request : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["responses"] = args ? args.responses : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["templateParameters"] = args ? args.templateParameters : undefined;
            resourceInputs["urlTemplate"] = args ? args.urlTemplate : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["method"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policies"] = undefined /*out*/;
            resourceInputs["request"] = undefined /*out*/;
            resourceInputs["responses"] = undefined /*out*/;
            resourceInputs["templateParameters"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["urlTemplate"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220901preview:WorkspaceApiOperation" }, { type: "azure-native:apimanagement/v20230301preview:WorkspaceApiOperation" }, { type: "azure-native:apimanagement/v20230501preview:WorkspaceApiOperation" }, { type: "azure-native:apimanagement/v20230901preview:WorkspaceApiOperation" }, { type: "azure-native:apimanagement/v20240501:WorkspaceApiOperation" }, { type: "azure-native:apimanagement/v20240601preview:WorkspaceApiOperation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceApiOperation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceApiOperation resource.
 */
export interface WorkspaceApiOperationArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Description of the operation. May include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * Operation Name.
     */
    displayName: pulumi.Input<string>;
    /**
     * A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    method: pulumi.Input<string>;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId?: pulumi.Input<string>;
    /**
     * Operation Policies
     */
    policies?: pulumi.Input<string>;
    /**
     * An entity containing request details.
     */
    request?: pulumi.Input<types.inputs.RequestContractArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Array of Operation responses.
     */
    responses?: pulumi.Input<pulumi.Input<types.inputs.ResponseContractArgs>[]>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Collection of URL template parameters.
     */
    templateParameters?: pulumi.Input<pulumi.Input<types.inputs.ParameterContractArgs>[]>;
    /**
     * Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    urlTemplate: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}