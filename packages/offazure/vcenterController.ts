import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A vcenter resource belonging to a site resource.
 * Azure REST API version: 2023-06-06.
 */
export class VcenterController extends pulumi.CustomResource {
    /**
     * Get an existing VcenterController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VcenterController {
        return new VcenterController(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:offazure:VcenterController';

    /**
     * Returns true if the given object is an instance of VcenterController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VcenterController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VcenterController.__pulumiType;
    }

    /**
     * Gets the timestamp marking vCenter creation.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * Gets the errors.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.HealthErrorDetailsResponse[]>;
    /**
     * Gets or sets the FQDN/IPAddress of the vCenter.
     */
    public readonly fqdn!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the friendly name of the vCenter.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * Gets the instance UUID of the vCenter.
     */
    public /*out*/ readonly instanceUuid!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the performance statistics enabled on the vCenter.
     */
    public /*out*/ readonly perfStatisticsLevel!: pulumi.Output<string>;
    /**
     * Gets or sets the port of the vCenter.
     */
    public readonly port!: pulumi.Output<string | undefined>;
    /**
     * The status of the last operation.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the run as account ID of the vCenter.
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
     * Gets the timestamp marking last updated on the vCenter.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;
    /**
     * Gets the version of the vCenter.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a VcenterController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VcenterControllerArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runAsAccountId"] = args ? args.runAsAccountId : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["vcenterName"] = args ? args.vcenterName : undefined;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["instanceUuid"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perfStatisticsLevel"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["instanceUuid"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perfStatisticsLevel"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["runAsAccountId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:offazure/v20200101:VcenterController" }, { type: "azure-native:offazure/v20200707:VcenterController" }, { type: "azure-native:offazure/v20230606:VcenterController" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VcenterController.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VcenterController resource.
 */
export interface VcenterControllerArgs {
    /**
     * Gets or sets the FQDN/IPAddress of the vCenter.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Gets or sets the friendly name of the vCenter.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Gets or sets the port of the vCenter.
     */
    port?: pulumi.Input<string>;
    /**
     * The status of the last operation.
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the run as account ID of the vCenter.
     */
    runAsAccountId?: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
    /**
     *  VCenters name
     */
    vcenterName?: pulumi.Input<string>;
}
