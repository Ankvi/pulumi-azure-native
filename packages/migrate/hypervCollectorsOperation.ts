import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Hyper-V collector resource.
 * Azure REST API version: 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview.
 */
export class HypervCollectorsOperation extends pulumi.CustomResource {
    /**
     * Get an existing HypervCollectorsOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HypervCollectorsOperation {
        return new HypervCollectorsOperation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:HypervCollectorsOperation';

    /**
     * Returns true if the given object is an instance of HypervCollectorsOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HypervCollectorsOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HypervCollectorsOperation.__pulumiType;
    }

    /**
     * Gets or sets the collector agent properties.
     */
    public readonly agentProperties!: pulumi.Output<types.outputs.CollectorAgentPropertiesBaseResponse | undefined>;
    /**
     * Gets the Timestamp when collector was created.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * Gets the discovery site id.
     */
    public readonly discoverySiteId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Timestamp when collector was last updated.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;

    /**
     * Create a HypervCollectorsOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HypervCollectorsOperationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["agentProperties"] = args ? args.agentProperties : undefined;
            resourceInputs["discoverySiteId"] = args ? args.discoverySiteId : undefined;
            resourceInputs["hypervCollectorName"] = args ? args.hypervCollectorName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["agentProperties"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["discoverySiteId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20191001:HypervCollectorsOperation" }, { type: "azure-native:migrate/v20230315:HypervCollectorsOperation" }, { type: "azure-native:migrate/v20230401preview:HypervCollectorsOperation" }, { type: "azure-native:migrate/v20230501preview:HypervCollectorsOperation" }, { type: "azure-native:migrate/v20230909preview:HypervCollectorsOperation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HypervCollectorsOperation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HypervCollectorsOperation resource.
 */
export interface HypervCollectorsOperationArgs {
    /**
     * Gets or sets the collector agent properties.
     */
    agentProperties?: pulumi.Input<types.inputs.CollectorAgentPropertiesBaseArgs>;
    /**
     * Gets the discovery site id.
     */
    discoverySiteId?: pulumi.Input<string>;
    /**
     * Hyper-V collector ARM name
     */
    hypervCollectorName?: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The status of the last operation.
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}