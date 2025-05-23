import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A multi-stage process to perform update operations across members of a Fleet.
 *
 * Uses Azure REST API version 2024-05-02-preview. In version 2.x of the Azure Native provider, it used API version 2023-03-15-preview.
 *
 * Other available API versions: 2023-03-15-preview, 2023-06-15-preview, 2023-08-15-preview, 2023-10-15, 2024-02-02-preview, 2024-04-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class UpdateRun extends pulumi.CustomResource {
    /**
     * Get an existing UpdateRun resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): UpdateRun {
        return new UpdateRun(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice:UpdateRun';

    /**
     * Returns true if the given object is an instance of UpdateRun.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UpdateRun {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UpdateRun.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    public /*out*/ readonly eTag!: pulumi.Output<string>;
    /**
     * The update to be applied to all clusters in the UpdateRun. The managedClusterUpdate can be modified until the run is started.
     */
    public readonly managedClusterUpdate!: pulumi.Output<types.outputs.ManagedClusterUpdateResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the UpdateRun resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The status of the UpdateRun.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.UpdateRunStatusResponse>;
    /**
     * The strategy defines the order in which the clusters will be updated.
     * If not set, all members will be updated sequentially. The UpdateRun status will show a single UpdateStage and a single UpdateGroup targeting all members.
     * The strategy of the UpdateRun can be modified until the run is started.
     */
    public readonly strategy!: pulumi.Output<types.outputs.UpdateRunStrategyResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The resource id of the FleetUpdateStrategy resource to reference.
     *
     * When creating a new run, there are three ways to define a strategy for the run:
     * 1. Define a new strategy in place: Set the "strategy" field.
     * 2. Use an existing strategy: Set the "updateStrategyId" field. (since 2023-08-15-preview)
     * 3. Use the default strategy to update all the members one by one: Leave both "updateStrategyId" and "strategy" unset. (since 2023-08-15-preview)
     *
     * Setting both "updateStrategyId" and "strategy" is invalid.
     *
     * UpdateRuns created by "updateStrategyId" snapshot the referenced UpdateStrategy at the time of creation and store it in the "strategy" field. 
     * Subsequent changes to the referenced FleetUpdateStrategy resource do not propagate.
     * UpdateRunStrategy changes can be made directly on the "strategy" field before launching the UpdateRun.
     */
    public readonly updateStrategyId!: pulumi.Output<string | undefined>;

    /**
     * Create a UpdateRun resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UpdateRunArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fleetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fleetName'");
            }
            if ((!args || args.managedClusterUpdate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedClusterUpdate'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["fleetName"] = args ? args.fleetName : undefined;
            resourceInputs["managedClusterUpdate"] = args ? args.managedClusterUpdate : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["strategy"] = args ? args.strategy : undefined;
            resourceInputs["updateRunName"] = args ? args.updateRunName : undefined;
            resourceInputs["updateStrategyId"] = args ? args.updateStrategyId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["managedClusterUpdate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["strategy"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updateStrategyId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice/v20230315preview:UpdateRun" }, { type: "azure-native:containerservice/v20230615preview:UpdateRun" }, { type: "azure-native:containerservice/v20230815preview:UpdateRun" }, { type: "azure-native:containerservice/v20231015:UpdateRun" }, { type: "azure-native:containerservice/v20240202preview:UpdateRun" }, { type: "azure-native:containerservice/v20240401:UpdateRun" }, { type: "azure-native:containerservice/v20240502preview:UpdateRun" }, { type: "azure-native:containerservice/v20250301:UpdateRun" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(UpdateRun.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a UpdateRun resource.
 */
export interface UpdateRunArgs {
    /**
     * The name of the Fleet resource.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The update to be applied to all clusters in the UpdateRun. The managedClusterUpdate can be modified until the run is started.
     */
    managedClusterUpdate: pulumi.Input<types.inputs.ManagedClusterUpdateArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The strategy defines the order in which the clusters will be updated.
     * If not set, all members will be updated sequentially. The UpdateRun status will show a single UpdateStage and a single UpdateGroup targeting all members.
     * The strategy of the UpdateRun can be modified until the run is started.
     */
    strategy?: pulumi.Input<types.inputs.UpdateRunStrategyArgs>;
    /**
     * The name of the UpdateRun resource.
     */
    updateRunName?: pulumi.Input<string>;
    /**
     * The resource id of the FleetUpdateStrategy resource to reference.
     *
     * When creating a new run, there are three ways to define a strategy for the run:
     * 1. Define a new strategy in place: Set the "strategy" field.
     * 2. Use an existing strategy: Set the "updateStrategyId" field. (since 2023-08-15-preview)
     * 3. Use the default strategy to update all the members one by one: Leave both "updateStrategyId" and "strategy" unset. (since 2023-08-15-preview)
     *
     * Setting both "updateStrategyId" and "strategy" is invalid.
     *
     * UpdateRuns created by "updateStrategyId" snapshot the referenced UpdateStrategy at the time of creation and store it in the "strategy" field. 
     * Subsequent changes to the referenced FleetUpdateStrategy resource do not propagate.
     * UpdateRunStrategy changes can be made directly on the "strategy" field before launching the UpdateRun.
     */
    updateStrategyId?: pulumi.Input<string>;
}