import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the Database resource.
 *
 * Uses Azure REST API version 2023-04-01. In version 1.x of the Azure Native provider, it used API version 2021-12-01-preview.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export class SAPDatabaseInstance extends pulumi.CustomResource {
    /**
     * Get an existing SAPDatabaseInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SAPDatabaseInstance {
        return new SAPDatabaseInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:SAPDatabaseInstance';

    /**
     * Returns true if the given object is an instance of SAPDatabaseInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SAPDatabaseInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SAPDatabaseInstance.__pulumiType;
    }

    /**
     * Database SID name.
     */
    public /*out*/ readonly databaseSid!: pulumi.Output<string>;
    /**
     * Database type, that is if the DB is HANA, DB2, Oracle, SAP ASE, Max DB or MS SQL Server.
     */
    public /*out*/ readonly databaseType!: pulumi.Output<string>;
    /**
     * Defines the errors related to Database resource.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.SAPVirtualInstanceErrorResponse>;
    /**
     * Database IP Address.
     */
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    /**
     * The Load Balancer details such as LoadBalancer ID attached to Database Virtual Machines
     */
    public /*out*/ readonly loadBalancerDetails!: pulumi.Output<types.outputs.LoadBalancerDetailsResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the provisioning states.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Defines the SAP Instance status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Database subnet.
     */
    public /*out*/ readonly subnet!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The list of virtual machines corresponding to the Database resource.
     */
    public /*out*/ readonly vmDetails!: pulumi.Output<types.outputs.DatabaseVmDetailsResponse[]>;

    /**
     * Create a SAPDatabaseInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SAPDatabaseInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sapVirtualInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sapVirtualInstanceName'");
            }
            resourceInputs["databaseInstanceName"] = args ? args.databaseInstanceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sapVirtualInstanceName"] = args ? args.sapVirtualInstanceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["databaseSid"] = undefined /*out*/;
            resourceInputs["databaseType"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["loadBalancerDetails"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmDetails"] = undefined /*out*/;
        } else {
            resourceInputs["databaseSid"] = undefined /*out*/;
            resourceInputs["databaseType"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["loadBalancerDetails"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmDetails"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20211201preview:SAPDatabaseInstance" }, { type: "azure-native:workloads/v20221101preview:SAPDatabaseInstance" }, { type: "azure-native:workloads/v20230401:SAPDatabaseInstance" }, { type: "azure-native:workloads/v20231001preview:SAPDatabaseInstance" }, { type: "azure-native:workloads/v20240901:SAPDatabaseInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SAPDatabaseInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SAPDatabaseInstance resource.
 */
export interface SAPDatabaseInstanceArgs {
    /**
     * Database resource name string modeled as parameter for auto generation to work correctly.
     */
    databaseInstanceName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}