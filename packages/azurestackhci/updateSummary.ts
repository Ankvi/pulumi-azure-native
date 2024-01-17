import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the update summaries for the cluster
 * Azure REST API version: 2023-03-01.
 *
 * Other available API versions: 2022-12-15-preview, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview.
 */
export class UpdateSummary extends pulumi.CustomResource {
    /**
     * Get an existing UpdateSummary resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): UpdateSummary {
        return new UpdateSummary(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:UpdateSummary';

    /**
     * Returns true if the given object is an instance of UpdateSummary.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UpdateSummary {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UpdateSummary.__pulumiType;
    }

    /**
     * Current Solution Bundle version of the stamp.
     */
    public readonly currentVersion!: pulumi.Output<string | undefined>;
    /**
     * Name of the hardware model.
     */
    public readonly hardwareModel!: pulumi.Output<string | undefined>;
    /**
     * Last time the package-specific checks were run.
     */
    public readonly healthCheckDate!: pulumi.Output<string | undefined>;
    /**
     * Last time the update service successfully checked for updates
     */
    public readonly lastChecked!: pulumi.Output<string | undefined>;
    /**
     * Last time an update installation completed successfully.
     */
    public readonly lastUpdated!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * OEM family name.
     */
    public readonly oemFamily!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the UpdateSummaries proxy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Overall update state of the stamp.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a UpdateSummary resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UpdateSummaryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["currentVersion"] = args ? args.currentVersion : undefined;
            resourceInputs["hardwareModel"] = args ? args.hardwareModel : undefined;
            resourceInputs["healthCheckDate"] = args ? args.healthCheckDate : undefined;
            resourceInputs["lastChecked"] = args ? args.lastChecked : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["oemFamily"] = args ? args.oemFamily : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["currentVersion"] = undefined /*out*/;
            resourceInputs["hardwareModel"] = undefined /*out*/;
            resourceInputs["healthCheckDate"] = undefined /*out*/;
            resourceInputs["lastChecked"] = undefined /*out*/;
            resourceInputs["lastUpdated"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["oemFamily"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20221201:UpdateSummary" }, { type: "azure-native:azurestackhci/v20221215preview:UpdateSummary" }, { type: "azure-native:azurestackhci/v20230201:UpdateSummary" }, { type: "azure-native:azurestackhci/v20230301:UpdateSummary" }, { type: "azure-native:azurestackhci/v20230601:UpdateSummary" }, { type: "azure-native:azurestackhci/v20230801:UpdateSummary" }, { type: "azure-native:azurestackhci/v20230801preview:UpdateSummary" }, { type: "azure-native:azurestackhci/v20231101preview:UpdateSummary" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(UpdateSummary.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a UpdateSummary resource.
 */
export interface UpdateSummaryArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Current Solution Bundle version of the stamp.
     */
    currentVersion?: pulumi.Input<string>;
    /**
     * Name of the hardware model.
     */
    hardwareModel?: pulumi.Input<string>;
    /**
     * Last time the package-specific checks were run.
     */
    healthCheckDate?: pulumi.Input<string>;
    /**
     * Last time the update service successfully checked for updates
     */
    lastChecked?: pulumi.Input<string>;
    /**
     * Last time an update installation completed successfully.
     */
    lastUpdated?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * OEM family name.
     */
    oemFamily?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Overall update state of the stamp.
     */
    state?: pulumi.Input<string | types.enums.UpdateSummariesPropertiesState>;
}