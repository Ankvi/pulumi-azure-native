import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the Server Instance resource.
 *
 * Uses Azure REST API version 2023-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 */
export class ServerInstance extends pulumi.CustomResource {
    /**
     * Get an existing ServerInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerInstance {
        return new ServerInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:ServerInstance';

    /**
     * Returns true if the given object is an instance of ServerInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerInstance.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration data for this server instance.
     */
    public /*out*/ readonly configurationData!: pulumi.Output<types.outputs.ConfigurationDataResponse>;
    /**
     * Defines the errors related to SAP Instance resource.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.SAPMigrateErrorResponse>;
    /**
     * This is the Instance SID for ASCS/AP/DB instance.  An SAP system with HANA database for example could have a different SID for database Instance than that of ASCS instance.
     */
    public /*out*/ readonly instanceSid!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * This is Operating System on which the host server is running.
     */
    public /*out*/ readonly operatingSystem!: pulumi.Output<string>;
    /**
     * Configuration data for this server instance.
     */
    public /*out*/ readonly performanceData!: pulumi.Output<types.outputs.ExcelPerformanceDataResponse | types.outputs.NativePerformanceDataResponse>;
    /**
     * Defines the provisioning states.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Defines the type SAP instance on this server instance.
     */
    public /*out*/ readonly sapInstanceType!: pulumi.Output<string>;
    /**
     * This is the SAP Application Component; e.g. SAP S/4HANA 2022, SAP ERP ENHANCE PACKAGE.
     */
    public /*out*/ readonly sapProduct!: pulumi.Output<string>;
    /**
     * Provide the product version of the SAP product.
     */
    public /*out*/ readonly sapProductVersion!: pulumi.Output<string>;
    /**
     * This is the Virtual Machine Name of the SAP system. Add all the virtual machines attached to an SAP system which you wish to migrate to Azure. Keeping this not equal to ID as for single tier all InstanceTypes would be on same server, leading to multiple resources with same servername.
     */
    public /*out*/ readonly serverName!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sapDiscoverySiteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sapDiscoverySiteName'");
            }
            if ((!args || args.sapInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sapInstanceName'");
            }
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sapDiscoverySiteName"] = args ? args.sapDiscoverySiteName : undefined;
            resourceInputs["sapInstanceName"] = args ? args.sapInstanceName : undefined;
            resourceInputs["serverInstanceName"] = args ? args.serverInstanceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationData"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["instanceSid"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operatingSystem"] = undefined /*out*/;
            resourceInputs["performanceData"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sapInstanceType"] = undefined /*out*/;
            resourceInputs["sapProduct"] = undefined /*out*/;
            resourceInputs["sapProductVersion"] = undefined /*out*/;
            resourceInputs["serverName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationData"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["instanceSid"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operatingSystem"] = undefined /*out*/;
            resourceInputs["performanceData"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sapInstanceType"] = undefined /*out*/;
            resourceInputs["sapProduct"] = undefined /*out*/;
            resourceInputs["sapProductVersion"] = undefined /*out*/;
            resourceInputs["serverName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20231001preview:ServerInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerInstance resource.
 */
export interface ServerInstanceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the discovery site resource for SAP Migration.
     */
    sapDiscoverySiteName: pulumi.Input<string>;
    /**
     * The name of SAP Instance resource for SAP Migration.
     */
    sapInstanceName: pulumi.Input<string>;
    /**
     * The name of the Server instance resource for SAP Migration.
     */
    serverInstanceName?: pulumi.Input<string>;
}