import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * a dryrun job resource
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2022-11-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicelinker [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ConnectorDryrun extends pulumi.CustomResource {
    /**
     * Get an existing ConnectorDryrun resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectorDryrun {
        return new ConnectorDryrun(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicelinker:ConnectorDryrun';

    /**
     * Returns true if the given object is an instance of ConnectorDryrun.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectorDryrun {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectorDryrun.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * the preview of the operations for creation
     */
    public /*out*/ readonly operationPreviews!: pulumi.Output<types.outputs.DryrunOperationPreviewResponse[]>;
    /**
     * The parameters of the dryrun
     */
    public readonly parameters!: pulumi.Output<types.outputs.CreateOrUpdateDryrunParametersResponse | undefined>;
    /**
     * the result of the dryrun
     */
    public /*out*/ readonly prerequisiteResults!: pulumi.Output<(types.outputs.BasicErrorDryrunPrerequisiteResultResponse | types.outputs.PermissionsMissingDryrunPrerequisiteResultResponse)[]>;
    /**
     * The provisioning state. 
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectorDryrun resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorDryrunArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dryrunName"] = args ? args.dryrunName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationPreviews"] = undefined /*out*/;
            resourceInputs["prerequisiteResults"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationPreviews"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["prerequisiteResults"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicelinker/v20221101preview:ConnectorDryrun" }, { type: "azure-native:servicelinker/v20230401preview:ConnectorDryrun" }, { type: "azure-native:servicelinker/v20240401:ConnectorDryrun" }, { type: "azure-native:servicelinker/v20240701preview:ConnectorDryrun" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectorDryrun.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectorDryrun resource.
 */
export interface ConnectorDryrunArgs {
    /**
     * The name of dryrun.
     */
    dryrunName?: pulumi.Input<string>;
    /**
     * The name of Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * The parameters of the dryrun
     */
    parameters?: pulumi.Input<types.inputs.CreateOrUpdateDryrunParametersArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the target subscription.
     */
    subscriptionId?: pulumi.Input<string>;
}