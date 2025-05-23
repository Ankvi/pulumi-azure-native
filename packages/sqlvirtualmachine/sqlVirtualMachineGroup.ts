import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A SQL virtual machine group.
 *
 * Uses Azure REST API version 2023-10-01. In version 2.x of the Azure Native provider, it used API version 2022-02-01.
 *
 * Other available API versions: 2022-02-01, 2022-07-01-preview, 2022-08-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sqlvirtualmachine [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SqlVirtualMachineGroup extends pulumi.CustomResource {
    /**
     * Get an existing SqlVirtualMachineGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlVirtualMachineGroup {
        return new SqlVirtualMachineGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sqlvirtualmachine:SqlVirtualMachineGroup';

    /**
     * Returns true if the given object is an instance of SqlVirtualMachineGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlVirtualMachineGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlVirtualMachineGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Cluster type.
     */
    public /*out*/ readonly clusterConfiguration!: pulumi.Output<string>;
    /**
     * Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of the group and the OS type.
     */
    public /*out*/ readonly clusterManagerType!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state to track the async operation status.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Scale type.
     */
    public /*out*/ readonly scaleType!: pulumi.Output<string>;
    /**
     * SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
     */
    public readonly sqlImageOffer!: pulumi.Output<string | undefined>;
    /**
     * SQL image sku.
     */
    public readonly sqlImageSku!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Cluster Active Directory domain profile.
     */
    public readonly wsfcDomainProfile!: pulumi.Output<types.outputs.WsfcDomainProfileResponse | undefined>;

    /**
     * Create a SqlVirtualMachineGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlVirtualMachineGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sqlImageOffer"] = args ? args.sqlImageOffer : undefined;
            resourceInputs["sqlImageSku"] = args ? args.sqlImageSku : undefined;
            resourceInputs["sqlVirtualMachineGroupName"] = args ? args.sqlVirtualMachineGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["wsfcDomainProfile"] = args ? args.wsfcDomainProfile : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterConfiguration"] = undefined /*out*/;
            resourceInputs["clusterManagerType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scaleType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterConfiguration"] = undefined /*out*/;
            resourceInputs["clusterManagerType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scaleType"] = undefined /*out*/;
            resourceInputs["sqlImageOffer"] = undefined /*out*/;
            resourceInputs["sqlImageSku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["wsfcDomainProfile"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sqlvirtualmachine/v20170301preview:SqlVirtualMachineGroup" }, { type: "azure-native:sqlvirtualmachine/v20211101preview:SqlVirtualMachineGroup" }, { type: "azure-native:sqlvirtualmachine/v20220201:SqlVirtualMachineGroup" }, { type: "azure-native:sqlvirtualmachine/v20220201preview:SqlVirtualMachineGroup" }, { type: "azure-native:sqlvirtualmachine/v20220701preview:SqlVirtualMachineGroup" }, { type: "azure-native:sqlvirtualmachine/v20220801preview:SqlVirtualMachineGroup" }, { type: "azure-native:sqlvirtualmachine/v20230101preview:SqlVirtualMachineGroup" }, { type: "azure-native:sqlvirtualmachine/v20231001:SqlVirtualMachineGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlVirtualMachineGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlVirtualMachineGroup resource.
 */
export interface SqlVirtualMachineGroupArgs {
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
     */
    sqlImageOffer?: pulumi.Input<string>;
    /**
     * SQL image sku.
     */
    sqlImageSku?: pulumi.Input<string | types.enums.SqlVmGroupImageSku>;
    /**
     * Name of the SQL virtual machine group.
     */
    sqlVirtualMachineGroupName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Cluster Active Directory domain profile.
     */
    wsfcDomainProfile?: pulumi.Input<types.inputs.WsfcDomainProfileArgs>;
}