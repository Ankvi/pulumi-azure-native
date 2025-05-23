import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A host resource belonging to a site resource.
 *
 * Uses Azure REST API version 2023-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-06-06.
 *
 * Other available API versions: 2023-06-06, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class HypervHostController extends pulumi.CustomResource {
    /**
     * Get an existing HypervHostController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HypervHostController {
        return new HypervHostController(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:offazure:HypervHostController';

    /**
     * Returns true if the given object is an instance of HypervHostController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HypervHostController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HypervHostController.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the timestamp marking Hyper-V host creation.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * Gets the errors.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.HealthErrorDetailsResponse[]>;
    /**
     * Gets or sets the FQDN/IPAddress of the Hyper-V host.
     */
    public readonly fqdn!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the run as account ID of the Hyper-V host.
     */
    public readonly runAsAccountId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets the timestamp marking last updated on the Hyper-V host.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;
    /**
     * Gets the version of the Hyper-V host.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a HypervHostController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HypervHostControllerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.siteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteName'");
            }
            resourceInputs["fqdn"] = args ? args.fqdn : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runAsAccountId"] = args ? args.runAsAccountId : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["runAsAccountId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:offazure/v20230606:HypervHostController" }, { type: "azure-native:offazure/v20231001preview:HypervHostController" }, { type: "azure-native:offazure/v20240501preview:HypervHostController" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HypervHostController.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HypervHostController resource.
 */
export interface HypervHostControllerArgs {
    /**
     * Gets or sets the FQDN/IPAddress of the Hyper-V host.
     */
    fqdn?: pulumi.Input<string>;
    /**
     *  Host name
     */
    hostName?: pulumi.Input<string>;
    /**
     * The status of the last operation.
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the run as account ID of the Hyper-V host.
     */
    runAsAccountId?: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}