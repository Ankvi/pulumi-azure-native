import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the backup connection resource of virtual instance for SAP..
 * Azure REST API version: 2023-10-01-preview.
 */
export class ACSSBackupConnection extends pulumi.CustomResource {
    /**
     * Get an existing ACSSBackupConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ACSSBackupConnection {
        return new ACSSBackupConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:ACSSBackupConnection';

    /**
     * Returns true if the given object is an instance of ACSSBackupConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ACSSBackupConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ACSSBackupConnection.__pulumiType;
    }

    /**
     * Information about the recovery services vault and backup policy used for backup.
     */
    public readonly backupData!: pulumi.Output<types.outputs.HanaBackupDataResponse | types.outputs.SqlBackupDataResponse | types.outputs.VMBackupDataResponse | undefined>;
    /**
     * Defines the errors related to backup connection resource of virtual instance for SAP.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.ConnectorErrorDefinitionResponse>;
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
     * Create a ACSSBackupConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ACSSBackupConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["backupData"] = args ? args.backupData : undefined;
            resourceInputs["backupName"] = args ? args.backupName : undefined;
            resourceInputs["connectorName"] = args ? args.connectorName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["backupData"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20231001preview:ACSSBackupConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ACSSBackupConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ACSSBackupConnection resource.
 */
export interface ACSSBackupConnectionArgs {
    /**
     * Information about the recovery services vault and backup policy used for backup.
     */
    backupData?: pulumi.Input<types.inputs.HanaBackupDataArgs | types.inputs.SqlBackupDataArgs | types.inputs.VMBackupDataArgs>;
    /**
     * The name of the backup connection resource of virtual instance for SAP.
     */
    backupName?: pulumi.Input<string>;
    /**
     * The name of the connector resource
     */
    connectorName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
