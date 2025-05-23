import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * API source entity.
 *
 * Uses Azure REST API version 2024-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-06-01-preview.
 */
export class ApiSource extends pulumi.CustomResource {
    /**
     * Get an existing ApiSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiSource {
        return new ApiSource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apicenter:ApiSource';

    /**
     * Returns true if the given object is an instance of ApiSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiSource.__pulumiType;
    }

    /**
     * API source configuration for Azure API Management.
     */
    public readonly azureApiManagementSource!: pulumi.Output<types.outputs.AzureApiManagementSourceResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Indicates if the specification should be imported along with metadata.
     */
    public readonly importSpecification!: pulumi.Output<string | undefined>;
    /**
     * The state of the API source link
     */
    public /*out*/ readonly linkState!: pulumi.Output<types.outputs.LinkStateResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The target environment resource ID.
     */
    public readonly targetEnvironmentId!: pulumi.Output<string | undefined>;
    /**
     * The target lifecycle stage.
     */
    public readonly targetLifecycleStage!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApiSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiSourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["apiSourceName"] = args ? args.apiSourceName : undefined;
            resourceInputs["azureApiManagementSource"] = args ? args.azureApiManagementSource : undefined;
            resourceInputs["importSpecification"] = (args ? args.importSpecification : undefined) ?? "ondemand";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["targetEnvironmentId"] = args ? args.targetEnvironmentId : undefined;
            resourceInputs["targetLifecycleStage"] = args ? args.targetLifecycleStage : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["linkState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiManagementSource"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["importSpecification"] = undefined /*out*/;
            resourceInputs["linkState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetEnvironmentId"] = undefined /*out*/;
            resourceInputs["targetLifecycleStage"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apicenter/v20240601preview:ApiSource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiSource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiSource resource.
 */
export interface ApiSourceArgs {
    /**
     * The name of the API.
     */
    apiSourceName?: pulumi.Input<string>;
    /**
     * API source configuration for Azure API Management.
     */
    azureApiManagementSource?: pulumi.Input<types.inputs.AzureApiManagementSourceArgs>;
    /**
     * Indicates if the specification should be imported along with metadata.
     */
    importSpecification?: pulumi.Input<string | types.enums.ImportSpecificationOptions>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The target environment resource ID.
     */
    targetEnvironmentId?: pulumi.Input<string>;
    /**
     * The target lifecycle stage.
     */
    targetLifecycleStage?: pulumi.Input<string | types.enums.LifecycleStage>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}