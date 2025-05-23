import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure.
 *
 * Uses Azure REST API version 2024-05-02-preview. In version 2.x of the Azure Native provider, it used API version 2023-03-15-preview.
 *
 * Other available API versions: 2022-06-02-preview, 2022-07-02-preview, 2022-09-02-preview, 2023-03-15-preview, 2023-06-15-preview, 2023-08-15-preview, 2023-10-15, 2024-02-02-preview, 2024-04-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FleetMember extends pulumi.CustomResource {
    /**
     * Get an existing FleetMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FleetMember {
        return new FleetMember(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice:FleetMember';

    /**
     * Returns true if the given object is an instance of FleetMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FleetMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FleetMember.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'.
     */
    public readonly clusterResourceId!: pulumi.Output<string>;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    public /*out*/ readonly eTag!: pulumi.Output<string>;
    /**
     * The group this member belongs to for multi-cluster update management.
     */
    public readonly group!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
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
     * Create a FleetMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FleetMemberArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterResourceId'");
            }
            if ((!args || args.fleetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fleetName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterResourceId"] = args ? args.clusterResourceId : undefined;
            resourceInputs["fleetMemberName"] = args ? args.fleetMemberName : undefined;
            resourceInputs["fleetName"] = args ? args.fleetName : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterResourceId"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["group"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice/v20220602preview:FleetMember" }, { type: "azure-native:containerservice/v20220702preview:FleetMember" }, { type: "azure-native:containerservice/v20220902preview:FleetMember" }, { type: "azure-native:containerservice/v20230315preview:FleetMember" }, { type: "azure-native:containerservice/v20230615preview:FleetMember" }, { type: "azure-native:containerservice/v20230815preview:FleetMember" }, { type: "azure-native:containerservice/v20231015:FleetMember" }, { type: "azure-native:containerservice/v20240202preview:FleetMember" }, { type: "azure-native:containerservice/v20240401:FleetMember" }, { type: "azure-native:containerservice/v20240502preview:FleetMember" }, { type: "azure-native:containerservice/v20250301:FleetMember" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FleetMember.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FleetMember resource.
 */
export interface FleetMemberArgs {
    /**
     * The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'.
     */
    clusterResourceId: pulumi.Input<string>;
    /**
     * The name of the Fleet member resource.
     */
    fleetMemberName?: pulumi.Input<string>;
    /**
     * The name of the Fleet resource.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The group this member belongs to for multi-cluster update management.
     */
    group?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}